import Routes from 'vue-routisan'

Routes.setViewResolver(path => () => import(`./../${path}`))

Routes.view('/', 'pages/home')

export default Routes.all()
