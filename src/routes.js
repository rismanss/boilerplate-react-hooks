import home from './pages/home';
import notFound from './pages/notFound';

const routes = [
  {
    path: "/",
    exact: true,
    component: home
  },
  {
    path: '*',
    component: notFound
  }
];

export default routes;