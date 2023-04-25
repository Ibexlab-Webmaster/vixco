import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumb from '@/components/breadCrumb';
import Input from '@/components/input';
import searchIcon from '../../public/assets/images/search.svg';
import NoticeCardBackground from '../../public/assets/images/NotificationBackground.svg';
import { noticeDatas } from '@/constants/notice';
import NotificationBackgroundCardMobile from '../../public/assets/images/NotificationPageBackground-mobile.svg'

export default function Notice() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <main className='h-full grow'>
      <section className='pt-[116px] max-[450px]:pt-[88px] max-[450px]:px-6 max-[450px]:bg-[url("../public/assets/images/NoticepageBackground-mobile.svg")] bg-[url("../public/assets/images/NoticepageBackground.svg")] bg-cover bg-no-repeat'>
        <div className='max-w-xl w-full mx-auto max-[450px]:py-[80px]'>
          <h2 className='text-7xl-bold font-PoppinsBold linear-txt-2 max-[450px]:text-4xl-bold'>
            Notice
          </h2>
        </div>
      </section>
      <section className='pt-[30px] max-[450px]:px-6'>
        <div className='max-w-xl w-full mx-auto'>
          <div className='flex items-center justify-between mb-[90px] max-[450px]:flex-col max-[450px]:w-full max-[450px]:items-start max-[450px]:gap-[35px]'>
            <Breadcrumb
              search={searchValue?.length > 0 ? 'Search Results' : ''}
            />
            <div className='flex items-center border-b-2 max-w-[296px] border-tonal-900 w-full py-[7px]'>
              <Image src={searchIcon} alt='search' className='mr-[10px]' />
              <Input
                placeholder={'Search'}
                className={
                  'font-PoppinsRegular text-tonal-800 text-base-regular outline-none placeholder:text-tonal-300'
                }
                nameValue={'search'}
                onGetValue={(e) => setSearchValue(e.target.value)}
                type={'text'}
                value={searchValue}
              />
            </div>
          </div>
          <div className='w-full flex items-center justify-between max-[450px]:flex-col'>
            {noticeDatas
              ?.filter((n) =>
                n.title.toLowerCase().includes(searchValue.toLowerCase()) ||
                n.description.toLowerCase().includes(searchValue.toLowerCase())
              )
              .map((n) => {
                return (
                  <Link
                    href={'/notice/' + n.id}
                    key={n.id}
                    className='py-5 px-6 rounded-[18px] shadow-shadow-2 max-w-[610px] w-full'
                  >
                    <div className='relative mb-[25px]'>
                      <Image src={NoticeCardBackground} alt='NoticeCardBackground' className='max-[450px]:hidden' />
                      <Image src={NotificationBackgroundCardMobile} alt='NoticeCardBackground' className='max-[450px]:block hidden w-full' />
                      <h2 className='text-3lg-semibold font-PoppinsSemibold absolute left-[40px] max-[450px]:left-[20px] top-2/4 text-white max-[450px]:text-lg-bold'>
                        {n.title}
                      </h2>
                    </div>
                    <div className='px-5 max-[450px]:px-0'>
                      <h4 className='text-lg-semibold font-PoppinsSemibold text-primary-50 mb-2 max-[450px]:text-base-regular'>
                        {n.title}
                      </h4>
                      <span className='text-sm-medium font-PoppinsMedium text-tonal-300 mb-[15px] inline-block max-[450px]:text-sm-regular'>
                        /{n.date}/
                      </span>
                      <p className='text-sm-regular text-tonal-900 font-PoppinsRegular'>
                        {n.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
          </div>

        </div>
      </section>
    </main>
  );
}
