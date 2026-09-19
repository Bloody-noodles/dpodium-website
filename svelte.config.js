import adapter from '@sveltejs/adapter-static';

const deployBasePath = process.env.DEPLOY_BASE_PATH ?? '';

const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html'
    }),
    paths: {
      base: deployBasePath
    }
  }
};

export default config;