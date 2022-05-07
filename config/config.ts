import { defineConfig } from 'umi';
import routes from './routes';
import defaultSettings from './defaultSettings';
import proxy from './proxy';

const {REACT_APP_ENV} = process.env;

const IS_PROD = process.env.NODE_ENV !== 'development';

export default defineConfig({
  hash: false,
  antd: {},
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {
    ...defaultSettings,
  },
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    'primary-color': defaultSettings.primaryColor,
  },
  targets: {
    ie: 11,
  },
  routes,
  mfsu: {},
  dynamicImport: {
    loading: '@ant-design/pro-layout/es/PageLoading',
  },
  fastRefresh: {},
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
  esbuild: {},
  webpack5: {},
  exportStatic: {},
  mock: false,
});
