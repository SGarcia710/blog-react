import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../views/Home';
import Blog from '../views/Blog';
import Layout from '../components/Layout';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/blog/:id" component={Blog} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
