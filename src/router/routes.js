import Routes from 'vue-routisan'

Routes.setViewResolver((path) => import(`./../${path}`))

// Routes.setViewResolver((path) => {
//     return require('./../' + path)
// });

Routes.view('/', 'pages/home')

console.log(Routes.all())

export default Routes.all()
