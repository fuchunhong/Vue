import App from '../App'
const home = r => require.ensure([], () => r(require('../components/Home')), 'home')
const breakfast = r => require.ensure([], () => r(require('../components/BreakFast')), 'breakfast')
const ceshi = r => require.ensure([], () => r(require('../components/BreakFast')), 'ceshi')
export default [{
  path: '/',
  component: App,
  children: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: 'home',
      component: home
    },
    {
      path: 'breakfast',
      component: breakfast
    },
    {
      path: 'ceshi',
      component: ceshi
    }
  ]
}]
