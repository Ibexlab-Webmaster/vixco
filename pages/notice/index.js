import Breadcrumb from '@/components/breadCrumb';
import Image from 'next/image';
import searchIcon from '../../public/assets/images/search.svg';
import Input from '@/components/input';
import { useState } from 'react';

export default function Notice() {
  const [searchValue, setSearchValue] = useState('');
//   console.log(searchValue)

  return (
    <main className='h-full grow'>
      <section className='pt-[116px] bg-[url("../public/assets/images/NoticepageBackground.svg")] bg-cover bg-no-repeat relative'>
        <div className='max-w-xl w-full mx-auto pt-[108px] pb-[126px]'>
          <h2 className='text-7xl-bold font-PoppinsBold linear-txt-2'>
            Notice
          </h2>
        </div>
      </section>
      <section className='pt-[30px]'>
        <div className='max-w-xl w-full mx-auto'>
          <div className='flex items-center justify-between mb-[90px]'>
            <Breadcrumb search={searchValue.length > 0 ? 'Search Results': ""} />
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
        </div>
      </section>
    </main>
  );
}
