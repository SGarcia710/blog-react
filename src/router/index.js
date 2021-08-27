import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../views/Home';
import Blog from '../views/Blog';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blog/:id" component={Blog} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
