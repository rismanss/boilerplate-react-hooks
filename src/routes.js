import home from './pages/home';
import notFound from './pages/notFound';
import newsfeed from './pages/newsfeed';
import crud from './pages/crud';

const routes = [
  {
    path: "/",
    exact: true,
    component: home
  },
  {
    path: "/newsfeed",
    exact: true,
    component: newsfeed
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