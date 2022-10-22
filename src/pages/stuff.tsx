import { Link } from 'react-router-dom';
import data from 'src/data/data.json';

export function Stuff() {
  return (
    <>
      <div>stuff</div>
      {data.map((slug) => (
        <Link to={`/stuff/${slug.title}`}>{slug.title}</Link>
      ))}
    </>
  );
}
