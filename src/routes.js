import home from './pages/home';
import notFound from './pages/notFound';
import movie from './pages/movie';
import crud from './pages/crud';

const routes = [
  {
    path: "/",
    exact: true,
    component: home
  },
  {
    path: "/movie",
    exact: true,
    component: movie
  },
  {
    path: "/crud",
    exact: true,
    component: crud
  },
  {
    path: '*',
    component: notFound
  }
];

export default routes;