import Link from 'next/link';
import Image from 'next/image';

export const HomePage = ({ data }) => (
  <div className="home_body">
    {data?.map((ev) => (
      <Link key={ev.id} href={`/events/${ev.id}`} passHref legacyBehavior>
        <Link className="card" href={`/events/${ev.id}`}>
          <a className="image">
            <Image width={600} height={400} alt={ev.title} src={ev.image} />
          </a>
          <a className="content">
            <h2> {ev.title} </h2>
            <p> {ev.description} </p>
          </a>
        </Link>
      </Link>
    ))}
  </div>
);
