import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  primaryColor: '#886ab5',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: true,
  fixSiderbar: true,
  colorWeak: false,
  title: 'antd-pro',
  pwa: false,
  iconfontUrl: '//at.alicdn.com/t/font_3409471_29pma15m3dv.js',
  splitMenus: true
};

export default Settings;
