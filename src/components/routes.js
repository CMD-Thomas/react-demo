import UsersContainer from '../components/Users/UsersContainer';
import NotFound from '../components/NotFound';
import LoginFormContainer from '../components/LoginForm/LoginFormContainer';
import BeersContainer from '../components/Beers/BeersContainer';
import SingleBeerContainer from '../components/Beers/SingleBeerContainer';

const routes = [
  {
    path: '/',
    component: LoginFormContainer,
  },
  {
    path: '/beers',
    component: BeersContainer,
  },
  {
    path: '/beer/:id',
    component: SingleBeerContainer,
  },
  {
    path: '/users',
    component: UsersContainer,
  },
  {
    path: '*',
    component: NotFound,
  },
];

export default routes;
