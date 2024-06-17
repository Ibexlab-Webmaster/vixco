import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import logo from '../../public/assets/images/logo.svg';
import LanguageSwitcher from '../languageSwitcher';
import menu from '../../public/assets/images/menu.svg'
import MenuModal from '../menu';
import Button from '@/components/UI/button';
import arrowUpRidht from '../../public/assets/images/arrow-up-right.svg';

const options = [
  { value: 'en', label: 'ENG' },
  { value: 'kr', label: '한국어' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const router = useRouter();
  var { pathname, asPath, query } = router;

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const isHeaderWhite = scrollPosition > 80;
  const handleOptionChange = (option) => {
    router.push({ pathname, query }, asPath, { locale: option.value })
  };
  return (
    <>
      <header
        className={`${isHeaderWhite ? 'bg-white duration-200 z-10 shadow-shadow-1 py-6 max-[450px]:py-5' : 'bg-transparent duration-300 py-9'
          } fixed w-full left-0 top-0 z-10 max-[450px]:px-6 max-[450px]:py-[30px]`}
      >
        <div className='max-w-xl w-full mx-auto flex items-center justify-between'>
          <Link href='/#home' scroll={false}>
            <Image src={logo} alt='Picture of the author' />
          </Link>
          <nav className='max-w-[760px] w-full max-[450px]:hidden'>
            <ul className='flex items-center justify-between'>
              <li>
                <Link
                  href={'/#about'}
                  scroll={false}
                  className='p-2 font-PoppinsMedium text-base-medium text-tonal-600'
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href={'/#advantages'}
                  scroll={false}
                  className='p-2 font-PoppinsMedium text-base-medium text-tonal-600'
                >
                  Advantages
                </Link>
              </li>
              <li>
                <Link
                  href={'/#vixpay'}
                  scroll={false}
                  className='p-2 font-PoppinsMedium text-base-medium text-tonal-600'
                >
                  VIXPAY
                </Link>
              </li>
              <li>
                <Link
                  href={'/#solution'}
                  scroll={false}
                  className='p-2 font-PoppinsMedium text-base-medium text-tonal-600'
                >
                  Solution
                </Link>
              </li>
              <li>
                <Link
                  href={'/#token'}
                  scroll={false}
                  className='p-2 font-PoppinsMedium text-base-medium text-tonal-600'
                >
                  VIXCO Token
                </Link>
              </li>
              <li>
                <Link
                  href={'/#roadmap'}
                  scroll={false}
                  className='p-2 font-PoppinsMedium text-base-medium text-tonal-600'
                >
                  RoadMap
                </Link>
              </li>
              <li>
                <Link
                  href={'/notice'}
                  className='p-2 font-PoppinsMedium text-base-medium text-primary-50'
                >
                  Notice
                </Link>
              </li>
              {/* <li>
                <Link
                  href={'https://vixco-scan.finenex.net'} target='_blank'
                  className='p-2 font-PoppinsMedium text-base-medium text-primary-50'
                >
                  Block scan
                </Link>
              </li> */}
                            <li>
                <Button
              className={
                'font-PoppinsMedium text-lg-medium rounded-30 bg-primary-50 max-[450px]:max-w-[191px]'
              }
            >
              <a
                  href={'https://optimism-bridge.vixco.net'} target='_blank'
                  className='p-2 font-PoppinsMedium text-base-medium text-white'>
                Bridge
              <Image src={arrowUpRidht} className='mr-[10px]' />
              </a>
            </Button>
              </li>
            </ul>
          </nav>

          <div className='relative max-[450px]:hidden'>
            <LanguageSwitcher options={options} onChange={handleOptionChange} />
          </div>
          <Image src={menu} alt='menu' onClick={() => setIsOpen(true)} className='max-[450px]:block hidden' />
        </div>
      </header>
      <MenuModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default Header;
