import useSWR from 'swr';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { fetcher } from '../commons/utils';
import Hero from '../components/Hero';
import styled from 'styled-components';
import moment from 'moment';
import COLORS from '../commons/constants/colors';
import SIZES from '../commons/constants/sizes';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ItemList = styled.div`
  width: ${SIZES.containerWidth}px;
`;
const EntryItem = styled(Link)`
  padding: 12px 16px;
  &:hover {
    background-color: ${COLORS.lightBackground};
  }
`;
const EntryDate = styled.p`
  font-family: 'DM Mono';
  font-size: 16px;
  color: ${COLORS.lightFontColor};
`;
const EntryLink = styled.p`
  font-size: 1.4rem;
  letter-spacing: -0.02rem;
  color: ${COLORS.mediumFontColor};
  line-height: 1.2;
`;

const SectionTitle = styled.h1`
  font-family: 'DM Mono';
  width: ${SIZES.containerWidth}px;
  font-size: 2rem;
  margin: 0 0 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid ${COLORS.borderColor};
  line-height: 1.2;
  color: ${COLORS.headingColor};
`;

const Home = () => {
  const { data, error } = useSWR(
    'https://cdn.contentful.com/spaces/yh4w8kx19nfo/environments/master/entries?access_token=zfucnL-f_0rkRXzSSisgxtb7VMPkyXWTA_Qv5G5Rb-w',
    fetcher
  );

  if (error) return <div>Fallo descargando tu super blog, perro</div>;
  if (!data) return <div>cargando tu super blog, perro</div>;

  return (
    <Container>
      <Hero />

      <SectionTitle className="font-bold">Últimos articulos.</SectionTitle>
      <ItemList>
        {React.Children.toArray(
          data.items.map((item) => (
            <EntryItem
              className="flex items-center"
              to={`/blog/${item.sys.id}`}
            >
              <EntryDate className="mr-6">
                {moment(item.fields.creationDate).format('MMM DD')}
              </EntryDate>
              <EntryLink className="font-bold">{item.fields.title}</EntryLink>
            </EntryItem>
          ))
        )}
      </ItemList>
    </Container>
  );
};

export default Home;
