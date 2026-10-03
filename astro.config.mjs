import { defineConfig } from 'astro/config';

// 部署到 GitHub Pages 時，網址與子路徑由 .github/workflows/deploy.yml 自動帶入。
// 部署到其他地方時，可以直接把 site 改成你的網址。
export default defineConfig({
  site: process.env.SITE_URL || 'https://example.com',
  base: process.env.BASE_PATH || '/',
});
