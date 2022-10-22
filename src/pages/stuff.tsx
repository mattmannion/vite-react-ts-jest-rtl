import { Link } from 'react-router-dom';
import data from 'src/data/data.json';

export function Stuff() {
  return (
    <>
      <div>stuff</div>
      <div
        style={{
          display: 'flex',
          flexFlow: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {data.map((slug) => (
          <Link key={slug.title} to={`/stuff/${slug.title}`}>
            {slug.title}
          </Link>
        ))}
      </div>
    </>
  );
}
