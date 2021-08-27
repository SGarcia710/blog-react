import useSWR from 'swr';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { fetcher } from '../commons/utils';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import styled from 'styled-components';

const Container = styled.div`
  padding-top: 80px;
`;

const Home = () => {
  const { data, error } = useSWR(
    'https://cdn.contentful.com/spaces/yh4w8kx19nfo/environments/master/entries?access_token=zfucnL-f_0rkRXzSSisgxtb7VMPkyXWTA_Qv5G5Rb-w',
    fetcher
  );

  if (error) return <div>Fallo descargando tu super blog, perro</div>;
  if (!data) return <div>cargando tu super blog, perro</div>;

  // render data
  return (
    <Container>
      <NavBar />
      <Hero />
      <h1>hay {data.total} blogs!</h1>

      <div className="listaDeBlogs">
        {React.Children.toArray(
          data.items.map((item) => (
            <Link to={`/blog/${item.sys.id}`}>{item.fields.title}</Link>
          ))
        )}
      </div>
    </Container>
  );
};

export default Home;
