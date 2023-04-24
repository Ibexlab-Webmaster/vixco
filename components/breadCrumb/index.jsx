import Link from 'next/link';
import { useRouter } from 'next/router';

const Breadcrumb = ({ search, title }) => {
  const router = useRouter();
  const pathSegments = router.asPath.split('/').filter((segment) => segment);
  // console.log(search)

  return (
    <nav aria-label='breadcrumb'>
      <ol className='flex items-center'>
        <li className='text-sm-medium text-tonal-300 font-PoppinsMedium'>
          <Link href='/'>Home</Link> {" / "}
        </li>
        {pathSegments.map((segment, index) => {
          // Check if the segment is a number
          const isNumber = /^\d+$/.test(segment);

          // If the segment is a number, don't render the segment
          if (isNumber) return null;

          return (
            <li
              key={index}
              className={`text-sm-medium font-PoppinsMedium capitalize flex items-center ${index === pathSegments.length - 1 && search || title
                ? 'text-tonal-300'
                : 'text-tonal-800'
                }`}
            >
              <Link href={`/${pathSegments.slice(0, index + 1).join('/')}`}>
                {segment}
              </Link>
              {index !== pathSegments.length - 1 && ' / '}
              {search && (
                <p className='text-sm-medium font-PoppinsMedium capitalize text-tonal-800'>
                  /{search}
                </p>
              )}
            </li>
          );
        })}
        {title && (
          <li className='text-sm-medium text-tonal-800 font-PoppinsMedium'>
            {title}
          </li>
        )}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
