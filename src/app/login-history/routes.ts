import { LoginHistoryComponent } from './login-history.component';

export let LoginHistoryRoute = {
  title: 'Login History',
  path: 'login-history',
  url: '/login-history'
};

export let LoginHistoryRoutes = [{ path: LoginHistoryRoute.path, component: LoginHistoryComponent }];
