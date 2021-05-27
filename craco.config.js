const CracoLessPlugin = require('craco-less');
const aliyunTheme = require('@ant-design/aliyun-theme');
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              ...aliyunTheme,
              '@primary-color': '#faab9f',
              '@link-color': '#faab9f',
              '@link-active-color': '#faab9f',
              '@link-hover-color': '#faab9f',
              '@link-focus-outline': '#faab9f',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
