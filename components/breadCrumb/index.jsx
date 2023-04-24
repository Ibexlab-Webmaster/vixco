import Link from 'next/link';
import { useRouter } from 'next/router';

const Breadcrumb = ({search}) => {
  const router = useRouter();
  const pathSegments = router.asPath.split('/').filter((segment) => segment);
  console.log(search)

  return (
    <nav aria-label='breadcrumb'>
      <ol className='flex items-center'>
        <li className='text-sm-medium text-tonal-300 font-PoppinsMedium'>
          <Link href='/'>Home</Link> {" / "}
        </li>
        {pathSegments.map((segment, index) => (
          <li
            key={index}
            className={`text-sm-medium font-PoppinsMedium capitalize flex items-center ${
              index === pathSegments.length - 1 && search.length > 0
                ? 'text-tonal-300'
                : 'text-tonal-800'
            }`}
          >
            <Link href={`/${pathSegments.slice(0, index + 1).join('/')}`}>
              {segment}
            </Link>
            {index !== pathSegments.length - 1 && ' / '}
            <p className='text-sm-medium font-PoppinsMedium capitalize text-tonal-800'>{search? ` / ${search}` : ""}</p>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
