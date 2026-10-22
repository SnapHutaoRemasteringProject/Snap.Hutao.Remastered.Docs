import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function getTitleFromFile(filePath) {
  // Some locale homepages start with a UTF-8 BOM and have no H1 fallback.
  // Normalize BOM and CRLF before parsing their YAML frontmatter titles.
  const content = fs.readFileSync(filePath, 'utf-8')
    .replace(/^\uFEFF/, '')
    .replace(/\r\n?/g, '\n');

  const frontmatter = content.match(/^---[ \t]*\n([\s\S]*?)\n---[ \t]*(?:\n|$)/);
  if (frontmatter) {
    const titleMatch = frontmatter[1].match(/^title:[ \t]*(.*)$/m);
    if (titleMatch) {
      const title = titleMatch[1].trim().replace(/^(['"])(.*)\1$/, '$2').trim();
      if (title) return title;
    }
  }

  const headingMatch = content.match(/^#\s+(.+)$/m);
  return headingMatch ? headingMatch[1].trim() : null;
}

function scanDirectory(dir, basePath = '', lang) {
  const items = fs.readdirSync(dir);
  const tree = {};

  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    const relativePath = basePath ? `${basePath}/${item}` : item;

    if (stat.isDirectory()) {
      const subTree = scanDirectory(fullPath, relativePath, lang);
      const indexFile = path.join(fullPath, 'index.md');
      const indexTitle = fs.existsSync(indexFile) ? getTitleFromFile(indexFile) : null;
      const parts = [lang, basePath, item].filter(Boolean).join('/');
      let p = parts.replace(/\\/g, '/').replace(/\/\/+/g, '/').replace(/\/$/, '');
      p = p.replace(/^\//, '');
      tree[item] = {
        title: indexTitle || item,
        path: p,
        children: subTree
      };
    } else if (item.endsWith('.md')) {
      const name = item.replace('.md', '');
      const parsedTitle = getTitleFromFile(fullPath);
      if (!parsedTitle && (name === 'download' || (name === 'index' && !basePath))) {
        throw new Error(`Missing localized page title in ${fullPath}`);
      }
      const title = parsedTitle || name;
      let parts = [lang];
      if (basePath) parts = parts.concat(basePath.split('/'));
      if (name !== 'index') parts.push(name);
      let p = parts.join('/').replace(/\\/g, '/').replace(/\/\/+/g, '/').replace(/\/$/, '');
      p = p.replace(/^\//, '');
      tree[name] = { title, path: p };
    }
  });

  return tree;
}

const languages = ['zh', 'en', 'ru', 'id', 'jp', 'tw'];
const trees = {};

for (const lang of languages) {
  const langDir = path.join(__dirname, 'docs', lang);
  if (fs.existsSync(langDir)) {
    trees[lang] = scanDirectory(langDir, '', lang);
    for (const page of ['download', 'index']) {
      if (!trees[lang][page] || trees[lang][page].title === page) {
        throw new Error(`Invalid catalog title for ${lang}/${page}.md`);
      }
    }
  }
}

const output = `export const catalogTrees = ${JSON.stringify(trees, null, 2)};`;
fs.writeFileSync(path.join(__dirname, 'docs', '.vitepress', 'catalog-tree.ts'), output);

console.log('Catalog trees generated');