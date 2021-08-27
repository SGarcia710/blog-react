import useSWR from 'swr';
import ReactMarkdown from 'react-markdown';
import { fetcher } from '../commons/utils';
import { useParams } from 'react-router-dom';

const Blog = () => {
  const params = useParams();
  console.log(params);
  const { data, error } = useSWR(
    `https://cdn.contentful.com/spaces/yh4w8kx19nfo/environments/master/entries/${params.id}?access_token=zfucnL-f_0rkRXzSSisgxtb7VMPkyXWTA_Qv5G5Rb-w`,
    fetcher
  );

  if (error) return <div>Fallo descargando tu super blog, perro</div>;
  if (!data) return <div>cargando tu super blog, perro</div>;

  // render data
  return (
    <div>
      <h1>{data.fields.title}</h1>

      <ReactMarkdown>{data.fields.description}</ReactMarkdown>
    </div>
  );
};

export default Blog;
