import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/assets/images/logo.svg';
import LanguageSwitcher from '../languageSwitcher';
import menu from '../../public/assets/images/menu.svg'
import MenuModal from '../menu';

const options = [
  { value: 'en', label: 'ENG' },
  { value: 'kr', label: '한국인' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

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
    console.log('Selected option:', option);
  };
  return (
    <>
      <header
        className={`${isHeaderWhite ? 'bg-white duration-200 z-10 shadow-hero-shadow py-6 max-[450px]:py-5' : 'bg-transparent duration-300 py-9'
          } fixed w-full left-0 top-0 z-10 max-[450px]:px-6 max-[450px]:py-[30px]`}
      >
        <div className='max-w-xl w-full mx-auto flex items-center justify-between'>
          <Link href='/'>
            <Image src={logo} alt='Picture of the author' />
          </Link>
          <nav className='max-w-[760px] w-full max-[450px]:hidden'>
            <ul className='flex items-center justify-between'>
              <li>
                <Link
                  href={'/#about'}
                  className='p-2 font-PoppinsMedium text-base-medium text-tonal-600'
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href={'/#advantages'}
                  className='p-2 font-PoppinsMedium text-base-medium text-tonal-600'
                >
                  Advantages
                </Link>
              </li>
              <li>
                <Link
                  href={'/#vixpay'}
                  className='p-2 font-PoppinsMedium text-base-medium text-tonal-600'
                >
                  Vixpay
                </Link>
              </li>
              <li>
                <Link
                  href={'/#solution'}
                  className='p-2 font-PoppinsMedium text-base-medium text-tonal-600'
                >
                  Solution
                </Link>
              </li>
              <li>
                <Link
                  href={'/#token'}
                  className='p-2 font-PoppinsMedium text-base-medium text-tonal-600'
                >
                  VIXCO Token
                </Link>
              </li>
              <li>
                <Link
                  href={'/#roadmap'}
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
              <li>
                <Link
                  href={'https://scan.finenex.net/'} target='_blank'
                  className='p-2 font-PoppinsMedium text-base-medium text-primary-50'
                >
                  Block scan
                </Link>
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
