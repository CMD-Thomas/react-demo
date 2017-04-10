import Users from '../components/Users';
import NotFound from '../components/NotFound';
import notLoggedIn from '../components/notLoggedIn';
import LoginFormContainer from '../components/LoginForm/LoginFormContainer';
import BeersContainer from '../components/Beers/BeersContainer';
import SingleBeerContainer from '../components/Beers/SingleBeerContainer';
import EnsureLoggedInContainer from './EnsureLoggedInContainer';

const routes = [
  {
    path: '/',
    component: LoginFormContainer,
  },
  {
    path: '/beers',
    component: BeersContainer,
    onEnter: EnsureLoggedInContainer,
  },
  {
    path: '/beer/:id',
    component: SingleBeerContainer,
  },
  {
    path: '/users',
    component: Users,
  },
  {
    path: '/notloggedin',
    component: notLoggedIn,
  },
  {
    path: '*',
    component: NotFound,
  },
];

export default routes;
