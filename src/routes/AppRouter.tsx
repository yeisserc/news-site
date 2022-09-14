import { useRoutes } from 'react-router-dom';
import routes from './routes';

const AppRouter = () => {
  let element = useRoutes(routes);

  return element;
}

export default AppRouter;