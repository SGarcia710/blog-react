import useSWR from 'swr';
import ReactMarkdown from 'react-markdown';
import { fetcher } from '../commons/utils';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import SIZES from '../commons/constants/sizes';
import COLORS from '../commons/constants/colors';
import moment from 'moment';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord as darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BodyContainer = styled(ReactMarkdown)`
  width: ${SIZES.containerWidth}px;
`;

const HeroContainer = styled.section`
  background-color: ${COLORS.lightBackground};
  width: 100%;
`;

const SubHeroContainer = styled.div`
  width: ${SIZES.containerWidth}px;
  display: flex;
  justify-content: space-between;
  h1 {
    font-size: 2.3rem;
    line-height: 1.1;
    font-family: 'DM Mono';
    margin-bottom: 16px;
    color: white;
    max-width: 90%;
  }
  img {
    width: 100px;
    height: 100px;
  }
  p {
    font-family: 'DM Mono';
    strong {
      transition: 0.3s;
      cursor: pointer;
      &:hover {
        color: white;
      }
    }
  }
`;

const Blog = () => {
  const params = useParams();

  const { data, error } = useSWR(
    `https://cdn.contentful.com/spaces/yh4w8kx19nfo/environments/master/entries/${params.id}?access_token=zfucnL-f_0rkRXzSSisgxtb7VMPkyXWTA_Qv5G5Rb-w`,
    fetcher
  );

  console.log(data);
  if (error) return <div>Fallo descargando tu super blog, perro</div>;
  if (!data) return <div>cargando tu super blog, perro</div>;

  // render data
  return (
    <Container>
      <HeroContainer className="flex py-12 px-0 justify-center mb-10">
        <SubHeroContainer>
          <div>
            <h1 className="font-bold">{data.fields.title}</h1>
            <p>
              By <strong>Jupiter Garcia</strong> on{' '}
              {moment(data.fields.creationDate).format('MMMM Do YYYY')}
            </p>
          </div>
          <img alt="Featured post" src={data.fields.featuredImage} />
        </SubHeroContainer>
      </HeroContainer>
      <BodyContainer
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, '')}
                style={darcula}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
        remarkPlugins={[remarkGfm]}
      >
        {data.fields.description}
      </BodyContainer>
    </Container>
  );
};

export default Blog;
