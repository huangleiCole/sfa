/**
 * Created by Tw93 on 2016/11/4.
 */

export default {

  // 正常模式的tab title配置
  tabTitles: [
    {
      title: '工作',
      icon: 'http://47.98.186.145/api/web/static/img/job.png',
      activeIcon: 'http://47.98.186.145/api/web/static/img/job-active.png'
    },
    {
      title: '消息',
      icon: 'http://47.98.186.145/api/web/static/img/message.png',
      activeIcon: 'http://47.98.186.145/api/web/static/img/message-active.png',
	  badge: 5
    },
    {
      title: '报表',
      icon: 'http://47.98.186.145/api/web/static/img/chart.png',
      activeIcon: 'http://47.98.186.145/api/web/static/img/chart-active.png'

    },
    {
      title: '我',
      icon: 'http://47.98.186.145/api/web/static/img/myself.png',
      activeIcon: 'http://47.98.186.145/api/web/static/img/myself-active.png',
      dot: true
    }
  ],
  tabStyles: {
    bgColor: '#FFFFFF',
    titleColor: '#666666',
    activeTitleColor: '#3D3D3D',
    activeBgColor: '#FFFFFF',
    isActiveTitleBold: true,
    iconWidth: 50,
    iconHeight: 50,
    width: 140,
    height: 120,
    fontSize: 24,
    textPaddingLeft: 10,
    textPaddingRight: 10
  },

  // 使用 iconFont 模式的tab title配置
  tabIconFontTitles: [
    {
      title: '工作',
      codePoint: '\ue623'
    },
    {
      title: '消息',
      codePoint: '\ue608'
    },
    {
      title: '报表',
      codePoint: '\ue752',
      badge: 5
    },
    {
      title: '我',
      codePoint: '\ue601',
      dot: true
    }
  ],
  tabIconFontStyles: {
    bgColor: '#FFFFFF',
    titleColor: '#666666',
    activeTitleColor: '#3D3D3D',
    activeBgColor: '#FFFFFF',
    isActiveTitleBold: true,
    width: 140,
    height: 120,
    fontSize: 24,
    textPaddingLeft: 10,
    textPaddingRight: 10,
  }
}
