/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/UI/button';
import bulb from '../public/assets/images/light-bulb.svg';
import googlePlay from '../public/assets/images/play-market.svg';
import appStore from '../public/assets/images/app-store.svg';
import { useTina } from "tinacms/dist/react";
import client from '@/tina/__generated__/client';
import { useRouter } from 'next/router';

export async function getStaticProps({ locale }) {

  const { data, query, variables } = await client.queries.home({
    relativePath: `${locale}/home.json`
  });

  return {
    props: {
      data,
      query,
      variables
    },
  };
}

export default function Home(props) {
  const router = useRouter()

  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  let pageData = data.home;

  return (
    <main className='pb-[130px]' id='home'>
      <section className='pb-[160px] max-[450px]:pt-[40px] max-[450px]:px-6 max-[450px]:bg-[url("../public/assets/images/home-mobile.svg")] pt-[116px] bg-[url("../public/assets/images/hero-bg.svg")] bg-cover bg-no-repeat relative max-[450px]:pb-[120px]'>
        <div className='bg-[url("../public/assets/images/vixco-hero.svg")] bg-no-repeat bg-[top_30px_right_100px] bg-[length:676px_449px] max-[450px]:bg-[url("../public/assets/images/vixco-hero-mobile.svg")] max-[450px]:bg-[center_bottom_0px] max-[450px]:py-[100px] max-[450px]:pb-[200px] max-[450px]:bg-contain'>
          <div className='max-w-xl w-full mx-auto pt-[63px] pb-[80px]'>
            <h1 className='text-7xl-bold font-PoppinsBold linear-txt-1'>
              {pageData.hero.title}
            </h1>
            <p className='text-5xl-bold font-PoppinsBold linear-txt-2 max-w-[649px] w-full mb-[35px] max-[450px]:text-lg-bold max-[450px]:mb-5'>
              {pageData.hero.text}
            </p>
            <p className='text-base-regular text-tonal-800 font-PoppinsRegular max-w-[514px] w-full mb-[35px] max-[450px]:text-sm-regular max-[450px]:mb-[31px]'>
              {pageData.hero.subtext}
            </p>
            <Button
              className={
                'font-PoppinsMedium text-lg-medium rounded-30 bg-white hover:text-primary-50 hover:bg-transparent hover:border-primary-50 hover:shadow-shadow-button duration-150 max-[450px]:max-w-[191px]'
              }
            >
              <a
                href={router.locale === 'kr' ? '/files/VIXCO_Whitepaper_Kor.pdf' : "/files/VIXCO_Whitepaper_Eng.pdf"}
                target='_blank'
                className='p-[16px_40px] inline-block'
              >
                {pageData.hero.button}
              </a>
            </Button>
          </div>
        </div>
        <div className='max-w-[1000px] max-[450px]:w-[90%] hover:scale-105 duration-300 mx-auto w-full p-5 rounded-20 shadow-shadow-1 absolute bg-white -bottom-20 max-[450px]:-bottom-36 text-center left-1/2 transform -translate-x-1/2 cursor-pointer'>
          <h3 className='text-2lg-bold font-PoppinsBold linear-txt-3 mb-[15px] text-center'>
            {pageData.hero.heroCard.title}
          </h3>
          <p className='text-lg-regular font-PoppinsRegular text-tonal-800 max-w-[900px] w-full text-center mx-auto max-[450px]:text-xxs-regular'>
            {pageData.hero.heroCard.text}
          </p>
        </div>
      </section>
      <section className='pt-32 pb-[57px] max-[450px]:pb-0 max-[450px]:px-6 max-[450px]:pt-[230px]' id='about'>
        <div className='max-w-xl w-full mx-auto flex items-center justify-between max-[450px]:flex max-[450px]:flex-col-reverse max-[450px]:gap-[30px]'>
          <Image src={pageData.about.image} alt='about' width={512} height={526} />
          <div className='max-w-[581px] w-full'>
            <div className='w-fit mb-[34px] max-[450px]:mb-[50px]'>
              <h3 className='mb-1 text-tonal-800 text-4xl-bold font-PoppinsBold max-[450px]:text-3xl-bold'>
                {pageData.about.title}
              </h3>
              <hr className='inline-block bg-black p-[2px] w-[45%]' />
            </div>
            <p className='text-tonal-500 font-PoppinsRegular text-md-regular mb-[45px] max-[450px]:mb-8'>
              {pageData.about.text}
            </p>
            <div className='flex items-center mb-[17px]'>
              <Image src={bulb} alt='bulb' />
              <p className='ml-[10px] font-PoppinsBold text-2lg-bold text-primary-50'>
                {pageData.about.goal.title}
              </p>
            </div>
            <p className='text-tonal-500 text-lg-medium font-PoppinsMedium max-[450px]:text-sm-medium'>
              {pageData.about.goal.text}
            </p>
          </div>
        </div>
      </section>
      <section className='pt-[110px] pb-[150px] max-[450px]:px-6 max-[450px]:bg-[url("../public/assets/images/advantages-mobile.svg")] bg-[url("../public/assets/images/advantages-form.svg")] bg-no-repeat bg-cover bg-center' id='advantages'>
        <div className='max-w-xl w-full mx-auto mb-[52px]'>
          <div className='max-w-[772px] w-full mb-[51px]'>
            <hr className='inline-block linear-bg-3 p-[2px] w-[10%] max-[450px]:w-[24%] mb-5' />
            <h2 className='text-tonal-800 text-4xl-bold font-PoppinsBold max-[450px]:text-2lg-bold'>
              {pageData.globalNetworkAdvantages.title}
            </h2>
          </div>

          <div className='flex items-center'>
            <Image src={pageData.globalNetworkAdvantages.image} width={70} height={500} alt='proccess' className='max-[450px]:hidden' />
            <Image src={pageData.globalNetworkAdvantages.imageMobile} width={23} height={515} alt='proccess' className='h-full hidden max-[450px]:block' />
            <ul className='h-full flex flex-col justify-between gap-[23px]'>

              {pageData.globalNetworkAdvantages.items.length > 0 && pageData.globalNetworkAdvantages.items?.map((el, index) => {
                return (
                  <li key={index} className='flex items-center font-PoppinsRegular max-[450px]:text-sm-regular max-[450px]:py-[15px] max-[450px]:text-tonal-800 max-[450px]:w-[90%] max-[450px]:pl-[15px] h-[112px] max-[450px]:h-full px-[25px] shadow-shadow-1 bg-white rounded-[18px] max-w-[820px] w-full ml-[11px] text-base-regular hover:bg-primary-50 hover:shadow-shadow-2 hover:text-white cursor-pointer duration-300 hover:ml-[41px]'>
                    {el.text}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </section>
      <section className='pt-[110px] pb-[60px] max-[450px]:px-6 max-[450px]:pb-[80px]' id='vixpay'>
        <div className='max-w-xl w-full mx-auto'>
          <hr className='inline-block linear-bg-3 p-[2px] w-[6.2%] mb-5 max-[450px]:w-[23%]' />
          <div className='w-full flex justify-between max-[450px]:flex max-[450px]:flex-col'>
            <div>
              <div className='mb-[73px] max-[450px]:mb-[30px]'>
                <h2 className='text-tonal-800 text-4xl-bold font-PoppinsBold max-w-[510px] max-[450px]:text-2lg-bold'>
                  {pageData.dgMarketing.title} <span className='linear-txt-1'>{pageData.dgMarketing.vixpay}</span> {pageData.dgMarketing.data}
                </h2>
              </div>
              <Image src={pageData.dgMarketing.image} width={634} height={323} alt='dg-marketing-vixpay' className='max-[450px]:hidden' />
            </div>
            <div className='max-w-[506px] w-full max-[450px]:mb-[30px]'>
              <p className='mb-[52px] text-md-regular font-PoppinsRegular text-tonal-800 max-[450px]:mb-[22px]'>
                {pageData.dgMarketing.text}
              </p>
              <p className='text-md-regular font-PoppinsRegular text-tonal-800'>
                {pageData.dgMarketing.text2}
              </p>
            </div>
            <Image src={pageData.dgMarketing.image} width={634} height={323} alt='dg-marketing-vixpay' className='hidden max-[450px]:block' />
          </div>
        </div>
      </section>
      <section className='pt-[60px] pb-[150px] max-[450px]:pb-[70px]'>
        <div className='max-w-xl mx-auto max-[450px]:mx-0 max-[450px]:py-[75px] max-[450px]:h-full max-[450px]:bg-[url("../public/assets/images/vixpay-app-mobile.svg")] w-full bg-[url("../public/assets/images/vixpay-app.svg")] bg-cover max-[450px]:bg-center max-[450px]:rounded-20 bg-no-repeat h-[575px] pt-[70px] flex items-start justify-between px-[100px] max-[450px]:px-6 max-[450px]:flex max-[450px]:flex-col'>
          <div className='max-[450px]:mb-10'>
            <h5 className='font-PoppinsRegular text-white mb-1 hidden max-[450px]:block text-sm-regular'>
              {pageData.vixpayApp.text}
            </h5>
            <h3 className='text-4xl-bold font-PoppinsBold text-white'>
              {pageData.vixpayApp.title}
            </h3>
            <hr className='inline-block bg-white p-[1px] w-[13%] mb-[70px] max-[450px]:mb-[30px]' />
            <Image
              src={pageData.vixpayApp.image}
              width={434}
              height={500}
              alt='vixpayApp'
              className='absolute ml-[50px] max-[450px]:static max-[450px]:ml-0'
            />
          </div>
          <div className='max-w-[522px] w-full max-[450px]:mb-[30px]'>
            <h5 className='text-lg-medium font-PoppinsMedium text-white text-right mb-[84px] max-[450px]:hidden'>
              {pageData.vixpayApp.text}
            </h5>
            <p className='text-md-regular text-white mb-12 font-PoppinsRegular max-[450px]:text-sm-regular'>
              {pageData.vixpayApp.subtext}
            </p>
            <div className='flex items-center max-[450px]:flex-col max-[450px]:w-full max-[450px]:gap-[26px]'>
              <Button
                className={
                  'font-PoppinsMedium rounded-[46px] max-[450px]:w-full max-[450px]:justify-center max-[450px]:mx-0 border-[2px] border-white hover:scale-[1.05] duration-150 flex items-center text-lg-medium text-white'
                }
              >
                <Link href={"https://play.google.com/store/apps/details?id=com.yoshop.vixpay"} target='_blank' className='flex items-center px-[42px] py-[13px]'>
                  <Image
                    src={googlePlay}
                    alt='google play'
                    className='mr-[10px]'
                  />
                  Google play
                </Link>
              </Button>
              <Button
                className={
                  'font-PoppinsMedium rounded-[46px] max-[450px]:w-full max-[450px]:justify-center max-[450px]:mx-0 border-[2px] border-white hover:scale-[1.05] duration-150 flex items-center ml-[26px] text-lg-medium text-white'
                }
              >
                <Link href={"https://apps.apple.com/kr/app/apple-store/id1573554528"} target='_blank' className='flex items-center px-[42px] py-[13px]'>
                  <Image src={appStore} alt='google play' className='mr-[10px]' />
                  App Store
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className='pt-[110px] pb-[118px] max-[450px]:pb-[65px] bg-[url("../public/assets/images/VIXCO-solution-background.svg")] bg-no-repeat bg-cover bg-center' id='solution'>
        <div className='max-w-xl mx-auto w-full max-[450px]:px-6'>
          <div className='mb-[55px] max-[450px]:mb-[50px]'>
            <h3 className='text-4xl-bold font-PoppinsBold text-tonal-800 max-[450px]:text-3xl-bold'>
              <span className='linear-txt-1'>{pageData.solution.vixco}</span> {pageData.solution.title}
            </h3>
            <hr className='inline-block bg-black p-[2px] w-[3.2%] mb-5 max-[450px]:w-[20%]' />
          </div>
          <ul className='flex flex-col gap-[70px]'>
            {
              pageData.solution.items.length > 0 && pageData.solution.items.map((el, index) => {
                return (
                  <li key={index} className={`flex items-center max-[450px]:flex-col max-[450px]:gap-[30px] ${el.id % 2 === 0 && "flex-row-reverse"}`}>
                    <div className={`flex items-start w-full mx-auto max-[450px]:flex-col ${el.id % 2 === 0 ? "max-w-[549px]" : "max-w-[522px]"}`}>
                      <div className='relative flex items-center justify-center max-[450px]:mb-[10px]'>
                        <Image src={pageData.solution.numberImage} alt='numbers' width={30} height={30} />
                        <p className='text-base-regular absolute font-PoppinsMedium text-white'>
                          {el.id}
                        </p>
                      </div>
                      <div className={`ml-[15px] w-full max-[450px]:ml-0 ${el.id % 2 === 0 ? "max-w-[505px]" : "max-w-[478px]"}`}>
                        <p className='text-2lg-bold font-PoppinsBold text-tonal-800 max-w-[250px] w-full mb-[31px]'>
                          {el.title}
                        </p>
                        <p className='text-tonal-500 text-md-regular font-PoppinsRegular max-[450px]:text-sm-regular'>
                          {el.text}
                        </p>
                      </div>
                    </div>
                    <Image src={el.image} width={542} height={308} alt='vixco terminal' />
                  </li>
                )
              })
            }
          </ul>
        </div>
      </section>
      <section className='pt-[90px] pb-[47px] max-[450px]:px-6' id='token'>
        <div className='max-w-xl mx-auto w-full'>
          <div className='flex items-center justify-between mb-[50px] max-[450px]:mb-[10px]'>
            <div>
              <h3 className='text-4xl-bold font-PoppinsBold text-tonal-800 max-[450px]:text-3xl-bold'>
                <span className='linear-txt-1'>{pageData.token.vixco}</span> {pageData.token.title}
              </h3>
              <hr className='inline-block bg-black p-[2px] w-[20%] mb-5 max-[450px]:w-[20%]' />
            </div>
            <div className='flex items-center max-[450px]:hidden' >
              <Image src={pageData.token.tokenModel.image} width={33} height={33} alt='erp' />
              <p className='text-2lg-bold font-PoppinsBold text-primary-50 ml-[10px]'>
                {pageData.token.tokenModel.title}
              </p>
            </div>
          </div>
          <p className='text-md-regular font-PoppinsRegular text-tonal-500 mb-5 max-[450px]:text-sm-regular max-[450px]:mb-[25px]'>
            {pageData.token.text}
          </p>
          <p className='text-md-regular font-PoppinsRegular text-tonal-500 mb-[41px] max-[450px]:text-sm-regular max-[450px]:hidden'>
            {pageData.token.subtext}
          </p>
          <div className='items-center hidden max-[450px]:flex max-[450px]:mb-6'>
            <Image src={pageData.token.tokenModel.image} alt='erp' width={33} height={33} />
            <p className='text-2lg-bold font-PoppinsBold text-primary-50 ml-[10px] max-[450px]:text-sm-semibold'>
              {pageData.token.tokenModel.title}
            </p>
          </div>
          <Image
            src={pageData.token.image}
            width={802}
            height={402}
            className='mx-auto'
            alt='VIXCO Private Blockchain(Working Node)'
          />
        </div>
      </section>
      <section className='bg-[url("../public/assets/images/token-information-form.svg")] max-[450px]:bg-[url("../public/assets/images/TokeninformationBackground-mobile.svg")] max-[450px]:px-6 bg-no-repeat bg-[center_left_-200px] max-[450px]:bg-[top_left] pt-[47px] pb-[90px]'>
        <div className='max-w-xl mx-auto w-full flex items-center justify-between max-[450px]:flex-col'>
          <div className='max-[450px]:hidden mx-auto'>
            <h4 className='text-lg-medium font-PoppinsMedium text-tonal-800 text-center'>{pageData.tokenInfos.diagram.title}</h4>
            <Image src={pageData.tokenInfos.diagram.image} alt='diagram' width={389} height={389} />
          </div>
          <div className='mb-5 max-w-[573px] w-full'>
            <hr className='inline-block linear-bg-3 p-[2px] w-[15%] mb-5' />
            <h3 className='text-4xl-bold font-PoppinsBold text-tonal-800 mb-5 max-[450px]:text-2lg-bold max-[450px]:mb-[43px]'>
              {pageData.tokenInfos.title}
            </h3>
            <div className='py-[15px] px-[25px] flex items-center justify-between shadow-shadow-1 rounded-[17px] mb-[50px] max-[450px]:bg-white max-[450px]:flex-wrap max-[450px]:gap-[20px]'>
              {
                pageData.tokenInfos.infos.length > 0 && pageData.tokenInfos.infos.map((el, index) => {
                  return (
                    <div key={index}>
                      <h4 className='mb-[4px] font-PoppinsBold text-base-bold text-primary-50'>
                        {el.title}
                      </h4>
                      <p className='text-base-medium text-secondary-10 font-PoppinsMedium'>
                        {el.text}
                      </p>
                    </div>
                  )
                })
              }
            </div>
            <div className='max-[450px]:block hidden max-[450px]:mb-[23px]'>
              <h4 className='text-lg-medium font-PoppinsMedium text-tonal-800 text-center'>{pageData.tokenInfos.diagram.title}</h4>
              <Image src={pageData.tokenInfos.diagram.image} alt='diagram' className='mx-auto' width={389} height={389} />
            </div>
            <ul className='flex flex-col gap-[25px]'>
              {
                pageData.tokenInfos.items.length > 0 && pageData.tokenInfos.items.map((el, index) => {
                  return (
                    <li key={index} className='flex items-center justify-between'>
                      <div className='flex items-center'>
                        <Image src={el.image} alt='paymentReserve' width={29} height={29} />
                        <p className='text-sm-medium text-tonal-800 font-PoppinsMedium ml-[8px]'>
                          {el.title}
                        </p>
                      </div>
                      <p className='text-sm-medium text-tonal-800 font-PoppinsMedium w-1/2 max-[450px]:w-fit text-left'>
                        {el.price}
                      </p>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </section>
      <section className='bg-[url("../public/assets/images/RoadMapBackground.svg")] max-[450px]:px-6 max-[450px]:bg-[url("../public/assets/images/RoadMapBackground-mobile.svg")] bg-cover bg-no-repeat bg-center py-[90px] max-[450px]:py-[77px]' id='roadmap'>
        <div className='max-w-xl mx-auto w-full'>
          <div className='w-fit mb-[80px] max-[450px]:mb-[60px]'>
            <h3 className='text-4xl-bold font-PoppinsBold'>{pageData.roadmap.title}</h3>
            <hr className='inline-block bg-black p-[2px] w-[20%]' />
          </div>
          <ul className='flex items-start max-[450px]:flex-col'>
            <li className='relative'>
              <h3 className='text-2lg-bold font-PoppinsBold text-primary-50 absolute left-[38%] max-[450px]:left-[50%] transform -translate-x-1/2'>
                {pageData.roadmap.completed.title}
              </h3>
              <Image src={pageData.roadmap.completed.image} alt='Completed' width={474} height={428} />
              <div className='absolute left-[12%] top-1/4 overflow-y-scroll h-2/3 roadmap cursor-pointer w-[75%] max-[450px]:w-[90%] max-[450px]:left-[8%]'>
                <ul className='flex flex-col gap-[10px] w-[95%]'>
                  {pageData.roadmap.completed.items.length > 0 && pageData.roadmap.completed.items.map((el, index) => {
                    return (
                      <li key={index} className='text-md-regular font-PoppinsRegular text-tonal-800'>
                        {el.text}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </li>
            <li className='relative'>
              <h3 className='text-2lg-bold font-PoppinsBold text-primary-50 absolute left-[40%] max-[450px]:left-[50%] transform -translate-x-1/2'>
                {pageData.roadmap.ongoing.title}
              </h3>
              <Image src={pageData.roadmap.ongoing.image} alt='ongoing' width={392} height={272} />
              <div className='absolute left-[15%] top-[40%] overflow-y-scroll h-2/3 roadmap cursor-pointer w-[80%] max-[450px]:w-[90%] max-[450px]:left-[8%]'>
                <ul className='flex flex-col gap-[10px] w-[95%]'>
                  {pageData.roadmap.ongoing.items.length > 0 && pageData.roadmap.ongoing.items.map((el, index) => {
                    return (
                      <li key={index} className='text-md-regular font-PoppinsRegular text-tonal-800'>
                        {el.text}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </li>
            <li className='relative'>
              <h3 className='text-2lg-bold font-PoppinsBold text-primary-50 absolute left-[40%] max-[450px]:left-[50%] transform -translate-x-1/2'>
                {pageData.roadmap.future.title}
              </h3>
              <Image src={pageData.roadmap.future.image} alt='future' width={373} height={336} />
              <div className='absolute left-[15%] top-[32%] overflow-y-scroll h-2/3 roadmap cursor-pointer w-[80%] max-[450px]:w-[90%] max-[450px]:left-[8%]'>
                <ul className='flex flex-col gap-[10px] w-[95%]'>
                  {pageData.roadmap.future.items.length > 0 && pageData.roadmap.future.items.map((el, index) => {
                    return (
                      <li key={index} className='text-md-regular font-PoppinsRegular text-tonal-800'>
                        {el.text}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className='pt-[90px] pb-[120px] max-[450px]:px-6 max-[450px]:pb-0'>
        <div className='max-w-xl mx-auto w-full'>
          <div className='flex items-center justify-between mb-[86px]'>
            <div className='w-fit'>
              <h3 className='text-4xl-bold font-PoppinsBold max-[450px]:text-3xl-bold'>{pageData.noticeSection.title}</h3>
              <hr className='inline-block bg-black p-[2px] w-[30%] max-[450px]:w-[45%]' />
            </div>
            <Link href={'/notice'} className='flex items-center max-[450px]:hidden'>
              <p className='mr-[10px] text-2lg-bold text-primary-50 font-PoppinsBold'>
                {pageData.noticeSection.link.title}
              </p>
              <Image src={pageData.noticeSection.link.image} width={32} height={32} alt='notice link' />
            </Link>
          </div>
          <div className='flex items-center justify-between max-[450px]:flex-col max-[450px]:gap-5 max-[450px]:mb-[40px]'>
            {
              pageData.noticeSection.items.length > 0 && pageData.noticeSection.items.map((el) => {
                return (
                  <Link
                    key={el.id}
                    href={'/notice'}
                    className='py-5 px-6 rounded-[18px] shadow-shadow-2 max-w-[610px] w-full'
                  >
                    <div className='relative mb-[25px] h-full'>
                      <Image src={pageData.noticeSection.imageItems} width={560} height={194} alt='NoticeCardBackground' className='max-[450px]:hidden' />
                      <Image src={pageData.noticeSection.imageItemsMobile} width={325} height={202} alt='NoticeCardBackground' className='max-[450px]:block hidden w-full' />
                      <h2 className='text-3lg-semibold font-PoppinsSemibold absolute left-[40px] top-2/4 text-white max-[450px]:text-lg-bold'>
                        {el.title}
                      </h2>
                    </div>
                    <div className='px-5'>
                      <h4 className='text-lg-semibold font-PoppinsSemibold text-primary-50 mb-2'>
                        {el.title}
                      </h4>
                      <span className='text-sm-medium font-PoppinsMedium text-tonal-300 mb-[15px] inline-block'>
                        /{el.date}/
                      </span>
                      <h5 className='text-sm-regular text-tonal-900 font-PoppinsRegular mb-5'>
                        {el.text}
                      </h5>
                      <p className='text-sm-regular text-tonal-900 font-PoppinsRegular'>
                        {el.items[0].text}..
                      </p>
                    </div>
                  </Link>
                )
              })
            }
          </div>
          <Link href={'/notice'} className='max-[450px]:flex max-[450px]:items-center hidden w-fit mx-auto'>
            <p className='mr-[10px] text-2lg-bold text-primary-50 font-PoppinsBold'>
              {pageData.noticeSection.link.title}
            </p>
            <Image src={pageData.noticeSection.link.image} width={32} height={32} alt='notice link' />
          </Link>
        </div>
      </section>
    </main>
  );
}
