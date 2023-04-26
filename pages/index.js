/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/UI/button';
import about from '../public/assets/images/about.svg';
import bulb from '../public/assets/images/light-bulb.svg';
import proccess from '../public/assets/images/proccess.svg';
import proccessMobile from '../public/assets/images/proccess-mobile.svg'
import dgMarketingVixpay from '../public/assets/images/dg-marketing-vixco.svg';
import vixpayApp from '../public/assets/images/vixco-app.png';
import googlePlay from '../public/assets/images/play-market.svg';
import appStore from '../public/assets/images/app-store.svg';
import number from '../public/assets/images/number.svg';
import vixcoPos from '../public/assets/images/vixco-b-pos.svg';
import dgSystem from '../public/assets/images/dg-system.svg';
import vixpaySystem from '../public/assets/images/vixo-payment-system.png';
import erp from '../public/assets/images/ethereum.svg';
import bloackChainVixco from '../public/assets/images/vixco-token.svg';
import tokenDiagram from '../public/assets/images/vixco-token-diagram.svg';
import paymentReserve from '../public/assets/images/payment-reserve.svg';
import ecoRewards from '../public/assets/images/eco-rewards.svg';
import operation from '../public/assets/images/operation.svg';
import partnershipReverse from '../public/assets/images/partnershipreserve.svg';
import marketing from '../public/assets/images/marketing.svg';
import team from '../public/assets/images/team.svg';
import advisors from '../public/assets/images/advicers.svg';
import earlyInvestor from '../public/assets/images/earlyinvester.svg';
import tokenSale from '../public/assets/images/tokensale.svg';
import Completed from '../public/assets/images/completed.svg';
import Ongoing from '../public/assets/images/ongoing.svg';
import Future from '../public/assets/images/future.svg';
import NoticeLink from '../public/assets/images/Chevrone.svg';
import NoticeCardBackground from '../public/assets/images/NotificationBackground.svg';
import NotificationBackgroundCardMobile from '../public/assets/images/NotificationPageBackground-mobile.svg'

export default function Home() {
  return (
    <main className='h-full grow'>
      <section className='pb-[160px] max-[450px]:pt-[90px] max-[450px]:px-6 max-[450px]:bg-[url("../public/assets/images/home-mobile.svg")] shadow-hero-shadow pt-[116px] bg-[url("../public/assets/images/hero-bg.svg")] bg-cover bg-no-repeat relative'>
        <div className='bg-[url("../public/assets/images/vixco-hero.svg")] bg-no-repeat bg-[top_30px_right_100px] bg-[length:676px_449px] max-[450px]:bg-[url("../public/assets/images/vixco-hero-mobile.svg")] max-[450px]:bg-[center_bottom_80px] max-[450px]:bg-contain'>
          <div className='max-w-xl w-full mx-auto pt-[63px] pb-[334px]'>
            <h1 className='text-7xl-bold font-PoppinsBold linear-txt-1'>
              VIXCO
            </h1>
            <p className='text-5xl-bold font-PoppinsBold linear-txt-2 max-w-[649px] w-full mb-[35px] max-[450px]:text-lg-bold max-[450px]:mb-5'>
              Bridging Stores, Customers, and Communities in Digital
            </p>
            <p className='text-base-regular text-tonal-800 font-PoppinsRegular max-w-[514px] w-full mb-[35px] max-[450px]:text-sm-regular max-[450px]:mb-[31px]'>
              VIXCO is a digital marketing platform that connects contactless
              ordering & payment with VIXCO token.
            </p>
            <Button
              className={
                'font-PoppinsMedium text-lg-medium rounded-30 bg-white hover:text-white hover:bg-transparent hover:border-white hover:shadow-shadow-button duration-150 max-[450px]:max-w-[191px]'
              }
            >
              <Link href={'/files/VIXCO_Whitepaper_Eng.pdf'} target='_blank' className='p-[16px_40px] inline-block'>
                WHITEPAPER
              </Link>
            </Button>
          </div>
        </div>
        <div className='max-w-[1000px] max-[450px]:w-[90%] hover:scale-105 duration-300 mx-auto w-full p-5 rounded-20 shadow-shadow-1 absolute bg-white -bottom-20 max-[450px]:-bottom-36 text-center left-1/2 transform -translate-x-1/2 cursor-pointer'>
          <h3 className='text-2lg-bold font-PoppinsBold linear-txt-3 mb-[15px] text-center'>
            VIXCO x VIXPAY
          </h3>
          <p className='text-lg-regular font-PoppinsRegular text-tonal-800 max-w-[900px] w-full text-center mx-auto max-[450px]:text-xxs-regular'>
            As an essential tool for the VIXCO token ecosystem, VIXPAY
            streamlines payments and ensures a seamless experience for both
            customers and kiosk owners. With VIXPAY, you can quickly and easily
            make purchases and payments.
          </p>
        </div>
      </section>
      <section className='pt-32 pb-[57px] max-[450px]:pb-0 max-[450px]:px-6 max-[450px]:pt-[230px]' id='about'>
        <div className='max-w-xl w-full mx-auto flex items-center justify-between max-[450px]:flex max-[450px]:flex-col-reverse max-[450px]:gap-[30px]'>
          <Image src={about} alt='about' />
          <div className='max-w-[581px] w-full'>
            <div className='w-fit mb-[34px] max-[450px]:mb-[50px]'>
              <h3 className='mb-1 text-tonal-800 text-4xl-bold font-PoppinsBold max-[450px]:text-3xl-bold'>
                About
              </h3>
              <hr className='inline-block bg-black p-[2px] w-[45%]' />
            </div>
            <p className='text-tonal-500 font-PoppinsRegular text-md-regular mb-[45px] max-[450px]:mb-8'>
              The VIXCO project was initiated to address the problems in the
              South Korean card payment market, such as the "tri-party system"
              which prevents merchants from choosing a card company during the
              transaction process and the difficulties in managing funds due to
              the delayed receipt of sales proceeds. To resolve these issues,
              the blockchain-based POS terminal and VIXPAY service were
              developed.
            </p>
            <div className='flex items-center mb-[17px]'>
              <Image src={bulb} alt='bulb' />
              <p className='ml-[10px] font-PoppinsBold text-2lg-bold text-primary-50'>
                The goal
              </p>
            </div>
            <p className='text-tonal-500 text-lg-medium font-PoppinsMedium max-[450px]:text-sm-medium'>
              The goal of the VIXCO project is to maintain and strengthen
              connections between stores and local communities while promoting
              efficient store operations.{' '}
            </p>
          </div>
        </div>
      </section>
      <section className='pt-[110px] pb-[150px] max-[450px]:px-6 max-[450px]:bg-[url("../public/assets/images/advantages-mobile.svg")] bg-[url("../public/assets/images/advantages-form.svg")] bg-no-repeat bg-cover bg-center' id='advantages'>
        <div className='max-w-xl w-full mx-auto mb-[52px]'>
          <div className='max-w-[772px] w-full mb-[51px]'>
            <hr className='inline-block linear-bg-3 p-[2px] w-[10%] max-[450px]:w-[24%]' />
            <h2 className='text-tonal-800 text-4xl-bold font-PoppinsBold max-[450px]:text-2lg-bold'>
              The advantages of VIXCO's global network configuration include:
            </h2>
          </div>

          <div className='flex items-center'>
            <Image src={proccess} alt='proccess' className='h-full max-[450px]:hidden' />
            <Image src={proccessMobile} alt='proccess' className='h-full hidden max-[450px]:block' />
            <ul className='h-full flex flex-col justify-between'>
              <li className='flex items-center max-[450px]:text-sm-regular max-[450px]:py-[15px] max-[450px]:text-tonal-500 max-[450px]:w-[90%] max-[450px]:pl-[15px] h-[112px] max-[450px]:h-full px-[25px] shadow-shadow-2 bg-white mb-[23px] rounded-[18px] max-w-[820px] w-full ml-[11px] text-base-regular hover:bg-primary-50 hover:shadow-shadow-2 hover:text-white cursor-pointer duration-300 hover:ml-[41px]'>
                Providing consistent services to users and merchants: By
                consistently providing services such as cross-border point
                payments, digital marketing, and membership services, both users
                and merchants experience convenience.
              </li>
              <li className='flex items-center max-[450px]:text-sm-regular max-[450px]:py-[15px] max-[450px]:text-tonal-500 max-[450px]:w-[90%] max-[450px]:pl-[15px] h-[112px] max-[450px]:h-full px-[25px] shadow-shadow-2 bg-white mb-[23px] rounded-[18px] max-w-[820px] w-full ml-[11px] text-base-regular hover:bg-primary-50 hover:shadow-shadow-2 hover:text-white cursor-pointer duration-300 hover:ml-[41px]'>
                Opportunities for cross-border cooperation and expansion: By
                linking Super Nodes and Working Nodes in each country, VIXCO
                fosters international cooperation and provides business
                expansion opportunities in the global market.
              </li>
              <li className='flex items-center max-[450px]:text-sm-regular max-[450px]:py-[15px] max-[450px]:text-tonal-500 max-[450px]:w-[90%] max-[450px]:pl-[15px] h-[112px] max-[450px]:h-full px-[25px] shadow-shadow-2 bg-white mb-[23px] rounded-[18px] max-w-[820px] w-full ml-[11px] text-base-regular hover:bg-primary-50 hover:shadow-shadow-2 hover:text-white cursor-pointer duration-300 hover:ml-[41px]'>
                Offering global reward point memberships: Users can enjoy global
                reward point memberships through the VIXCO platform, making
                cross-border transactions smoother.
              </li>
              <li className='flex items-center max-[450px]:text-sm-regular max-[450px]:py-[15px] max-[450px]:text-tonal-500 max-[450px]:w-[90%] max-[450px]:pl-[15px] h-[112px] max-[450px]:h-full px-[25px] shadow-shadow-2 bg-white rounded-[18px] max-w-[820px] w-full ml-[11px] text-base-regular hover:bg-primary-50 hover:shadow-shadow-2 hover:text-white cursor-pointer duration-300 hover:ml-[41px]'>
                Stable transaction environment: VIXCO Tokens staked in Super
                Nodes and Working Nodes ensure transaction stability and provide
                a high level of service quality.
              </li>
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
                  Digital marketing based on <span>VIXPAY</span> data{' '}
                </h2>
              </div>
              <Image src={dgMarketingVixpay} alt='dg-marketing-vixpay' className='max-[450px]:hidden' />
            </div>
            <div className='max-w-[506px] w-full max-[450px]:mb-[30px]'>
              <p className='mb-[52px] text-md-regular font-PoppinsRegular text-tonal-800 max-[450px]:mb-[22px]'>
                VIXCO provides various services on its platform using
                Ethereum-based tokens, creating value for merchants and
                customers through integrated solutions for payment, digital
                marketing, and CRM services. This forms the foundation for the
                continuous activation and growth of the VIXCO ecosystem,
                allowing it to develop as an innovative blockchain-based payment
                and marketing platform.{' '}
              </p>
              <p className='text-md-regular font-PoppinsRegular text-tonal-800'>
                Customer information and payment data obtained through the
                VIXPAY service become valuable digital marketing assets. Using
                this information, merchants can analyze customer purchase
                patterns, preferences, and behaviors to establish effective
                marketing strategies.
              </p>
            </div>
            <Image src={dgMarketingVixpay} alt='dg-marketing-vixpay' className='hidden max-[450px]:block' />
          </div>
        </div>
      </section>
      <section className='pt-[60px] pb-[150px] max-[450px]:pb-[70px]'>
        <div className='max-w-xl mx-auto max-[450px]:mx-0 max-[450px]:py-[75px] max-[450px]:h-full max-[450px]:bg-[url("../public/assets/images/vixpay-app-mobile.svg")] w-full bg-[url("../public/assets/images/vixpay-app.svg")] bg-cover max-[450px]:bg-center max-[450px]:rounded-20 bg-no-repeat h-[575px] pt-[70px] flex items-start justify-between px-[100px] max-[450px]:px-6 max-[450px]:flex max-[450px]:flex-col'>
          <div className='max-[450px]:mb-10'>
            <h5 className='font-PoppinsRegular text-white mb-1 hidden max-[450px]:block text-sm-regular'>
              FOR YOUR BUSINESS
            </h5>
            <h3 className='text-4xl-bold font-PoppinsBold text-white'>
              Vixpay app
            </h3>
            <hr className='inline-block bg-white p-[1px] w-[13%] mb-[70px] max-[450px]:mb-[30px]' />
            <Image
              src={vixpayApp}
              alt='vixpayApp'
              className='absolute ml-[50px] max-[450px]:static max-[450px]:ml-0'
            />
          </div>
          <div className='max-w-[522px] w-full max-[450px]:mb-[30px]'>
            <h5 className='text-lg-medium font-PoppinsMedium text-white text-right mb-[84px] max-[450px]:hidden'>
              FOR YOUR BUSINESS
            </h5>
            <p className='text-md-regular text-white mb-12 font-PoppinsRegular max-[450px]:text-sm-regular'>
              VIXPAY is a blockchain platform that connects merchants and
              consumers. It can be easily used at merchants nationwide without
              complicated sign-up or charging procedures, while supporting the
              rewards and payment functions of Vixpay. In particular, focusing
              on the convenience of consumers and merchants, you can use it
              simply by presenting a QR code and entering a password.
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
              <span className='linear-txt-1'>VIXCO</span> Solution
            </h3>
            <hr className='inline-block bg-black p-[2px] w-[3.2%] mb-5 max-[450px]:w-[20%]' />
          </div>
          <ul className='flex flex-col gap-[70px]'>
            <li className='flex items-center max-[450px]:flex-col max-[450px]:gap-[30px]'>
              <div className='flex items-start max-w-[522px] w-full mx-auto max-[450px]:flex-col'>
                <div className='relative flex items-center justify-center max-[450px]:mb-[10px]'>
                  <Image src={number} alt='numbers' width={30} height={30} />
                  <p className='text-base-regular absolute font-PoppinsMedium text-white'>
                    1
                  </p>
                </div>
                <div className='ml-[15px] max-w-[478px] w-full max-[450px]:ml-0'>
                  <p className='text-2lg-bold font-PoppinsBold text-tonal-800 max-w-[250px] w-full mb-[31px]'>
                    VIXCO Blockchain POS Terminal
                  </p>
                  <p className='text-tonal-500 text-md-regular font-PoppinsRegular max-[450px]:text-sm-regular'>
                    Blockchain POS and kiosk terminals connected to VIXCO
                    Working Node are the core infrastructure of the VIXCO
                    platform. These terminals come equipped with wallets,
                    allowing users to earn or pay with VIXCO Point tokens and
                    serving as a connection point between customers and stores.
                  </p>
                </div>
              </div>
              <Image src={vixcoPos} alt='vixco terminal' />
            </li>
            <li className='flex flex-row-reverse items-center max-[450px]:flex-col max-[450px]:gap-[30px]'>
              <div className='flex items-start max-w-[549px] w-full mx-auto max-[450px]:flex-col'>
                <div className='relative flex items-center justify-center max-[450px]:mb-[10px]'>
                  <Image src={number} alt='numbers' width={30} height={30} />
                  <p className='text-base-regular absolute font-PoppinsMedium text-white'>
                    2
                  </p>
                </div>
                <div className='ml-[15px] max-w-[505px] w-full max-[450px]:ml-0'>
                  <p className='text-2lg-bold font-PoppinsBold text-tonal-800 max-w-[250px] w-full mb-[31px]'>
                    Digital Marketing System
                  </p>
                  <p className='text-tonal-500 text-md-regular font-PoppinsRegular max-[450px]:text-sm-regular'>
                    The digital marketing system using blockchain POS and kiosk
                    terminals, and cloud-based POS systems is a powerful tool
                    for providing efficient and differentiated marketing
                    strategies to stores. Hyperlocal digital marketing system
                    can be used as an advertising platform for companies that
                    want to advertise in the area. Stores can receive fees from
                    companies and post advertisements on kiosk terminals.
                  </p>
                </div>
              </div>
              <Image src={dgSystem} alt='vixco terminal' />
            </li>
            <li className='flex items-center max-[450px]:flex-col max-[450px]:gap-[30px]'>
              <div className='flex items-start max-w-[522px] w-full mx-auto max-[450px]:flex-col'>
                <div className='relative flex items-center justify-center max-[450px]:mb-[10px]'>
                  <Image src={number} alt='numbers' width={30} height={30} />
                  <p className='text-base-regular absolute font-PoppinsMedium text-white'>
                    3
                  </p>
                </div>
                <div className='ml-[15px] max-w-[478px] w-full max-[450px]:ml-0'>
                  <p className='text-2lg-bold font-PoppinsBold text-tonal-800 max-w-[250px] w-full mb-[31px]'>
                    VIXPAY Payment System
                  </p>
                  <p className='text-tonal-500 text-md-regular font-PoppinsRegular max-[450px]:text-sm-regular'>
                    VIXPAY is a blockchain-based payment system that provides a
                    convenient solution for customers to accumulate and pay with
                    VIXCO Point tokens using a mobile app. Combined with
                    blockchain POS and kiosk terminals, it creates an
                    environment where customers can easily and quickly
                    accumulate and use points.
                  </p>
                </div>
              </div>
              <Image src={vixpaySystem} alt='vixco terminal' />
            </li>
          </ul>
        </div>
      </section>
      <section className='pt-[90px] pb-[47px] max-[450px]:px-6' id='token'>
        <div className='max-w-xl mx-auto w-full'>
          <div className='flex items-center justify-between mb-[50px]'>
            <div>
              <h3 className='text-4xl-bold font-PoppinsBold text-tonal-800 max-[450px]:text-3xl-bold'>
                <span className='linear-txt-1'>VIXCO</span> Token
              </h3>
              <hr className='inline-block bg-black p-[2px] w-[20%] mb-5 max-[450px]:w-[20%]' />
            </div>
            <div className='flex items-center max-[450px]:hidden' >
              <Image src={erp} alt='erp' />
              <p className='text-2lg-bold font-PoppinsBold text-primary-50 ml-[10px]'>
                ERC - 20
              </p>
            </div>
          </div>
          <p className='text-md-regular font-PoppinsRegular text-tonal-800 mb-5 max-[450px]:text-sm-regular max-[450px]:mb-[25px]'>
            VIXCO is an ERC20 token issued on the Ethereum blockchain network,
            and it is a utility token that can be exchanged with Point tokens
            used on the VIXCO platform. The VIXCO platform provides payment,
            digital marketing, CRM services, and additional services to
            merchants and customers based on a Staking-based token economy. To
            operate a Working Node, a certain amount of VIXCO tokens must be
            staked, which allows partners to recruit VIXCO merchants and
            customers.{' '}
          </p>
          <p className='text-md-regular font-PoppinsRegular text-tonal-800 mb-[41px] max-[450px]:text-sm-regular max-[450px]:hidden'>
            The commission revenue generated on the VIXCO platform is
            distributed according to the proportion of VIXCO staked in the
            Working Node, which increases the demand and value of the VIXCO
            token.
          </p>
          <div className='items-center hidden max-[450px]:flex max-[450px]:mb-6'>
            <Image src={erp} alt='erp' />
            <p className='text-2lg-bold font-PoppinsBold text-primary-50 ml-[10px] max-[450px]:text-sm-semibold'>
              ERC - 20
            </p>
          </div>
          <Image
            src={bloackChainVixco}
            className='mx-auto'
            alt='VIXCO Private Blockchain(Working Node)'
          />
        </div>
      </section>
      <section className='bg-[url("../public/assets/images/token-information-form.svg")] max-[450px]:bg-[url("../public/assets/images/TokeninformationBackground-mobile.svg")] max-[450px]:px-6 bg-no-repeat bg-[center_left_-200px] max-[450px]:bg-[top_left] pt-[47px] pb-[90px]'>
        <div className='max-w-xl mx-auto w-full flex items-center justify-between max-[450px]:flex-col'>
          <div className='max-[450px]:hidden mx-auto'>
            <h4 className='text-lg-medium font-PoppinsMedium text-tonal-800 text-center'> VIXCO Token Distribution</h4>
            <Image src={tokenDiagram} alt='diagram' />
          </div>
          <div className='mb-5 max-w-[573px] w-full'>
            <hr className='inline-block linear-bg-3 p-[2px] w-[15%] mb-5' />
            <h3 className='text-4xl-bold font-PoppinsBold text-tonal-800 mb-5 max-[450px]:text-2lg-bold max-[450px]:mb-[43px]'>
              VIXCO Token Information
            </h3>
            <div className='py-[15px] px-[25px] flex items-center justify-between shadow-shadow-1 rounded-[17px] mb-[50px] max-[450px]:bg-white max-[450px]:flex-wrap max-[450px]:gap-[20px]'>
              <div>
                <h4 className='mb-[4px] font-PoppinsBold text-base-bold text-primary-50'>
                  Token Name :
                </h4>
                <p className='text-base-medium text-secondary-10 font-PoppinsMedium'>
                  VIXCO (Ticker : VIX)
                </p>
              </div>
              <div>
                <h4 className='mb-[4px] font-PoppinsBold text-base-bold text-primary-50'>
                  Total Supply:
                </h4>
                <p className='text-base-medium text-secondary-10 font-PoppinsMedium'>
                  200,000,000 VIX
                </p>
              </div>
              <div>
                <h4 className='mb-[4px] font-PoppinsBold text-base-bold text-primary-50'>
                  Protocol:
                </h4>
                <p className='text-base-medium text-secondary-10 font-PoppinsMedium'>
                  ERC-20
                </p>
              </div>
            </div>
            <div className='max-[450px]:block hidden max-[450px]:mb-[23px]'>
              <h4 className='text-lg-medium font-PoppinsMedium text-tonal-800 text-center'> VIXCO Token Distribution</h4>
              <Image src={tokenDiagram} alt='diagram' className='mx-auto' />
            </div>
            <ul className='flex flex-col gap-[25px]'>
              <li className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <Image src={paymentReserve} alt='paymentReserve' />
                  <p className='text-sm-medium text-tonal-800 font-PoppinsMedium ml-[8px]'>
                    33% Payment Reserve
                  </p>
                </div>
                <p className='text-sm-medium text-tonal-800 font-PoppinsMedium w-1/2 max-[450px]:w-fit text-left'>
                  660,000,000 VIX
                </p>
              </li>
              <li className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <Image src={ecoRewards} alt='ecoRewards' />
                  <p className='text-sm-medium text-tonal-800 font-PoppinsMedium ml-[8px]'>
                    17% Eco-Rewards
                  </p>
                </div>
                <p className='text-sm-medium text-tonal-800 font-PoppinsMedium w-1/2 max-[450px]:w-fit text-left'>
                  340,000,000 VIX
                </p>
              </li>
              <li className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <Image src={operation} alt='operation' />
                  <p className='text-sm-medium text-tonal-800 font-PoppinsMedium ml-[8px]'>
                    15% Operation
                  </p>
                </div>
                <p className='text-sm-medium text-tonal-800 font-PoppinsMedium w-1/2 max-[450px]:w-fit text-left'>
                  300,000,000 VIX
                </p>
              </li>
              <li className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <Image src={partnershipReverse} alt='partnershipReverse' />
                  <p className='text-sm-medium text-tonal-800 font-PoppinsMedium ml-[8px]'>
                    13% Partnership Reserve
                  </p>
                </div>
                <p className='text-sm-medium text-tonal-800 font-PoppinsMedium w-1/2 max-[450px]:w-fit text-left'>
                  260,000,000 VIX
                </p>
              </li>
              <li className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <Image src={marketing} alt='marketing' />
                  <p className='text-sm-medium text-tonal-800 font-PoppinsMedium ml-[8px]'>
                    7% Marketing
                  </p>
                </div>
                <p className='text-sm-medium text-tonal-800 font-PoppinsMedium w-1/2 max-[450px]:w-fit text-left'>
                  140,000,000 VIX
                </p>
              </li>
              <li className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <Image src={team} alt='team' />
                  <p className='text-sm-medium text-tonal-800 font-PoppinsMedium ml-[8px]'>
                    5% Team
                  </p>
                </div>
                <p className='text-sm-medium text-tonal-800 font-PoppinsMedium w-1/2 max-[450px]:w-fit text-left'>
                  100,000,000 VIX
                </p>
              </li>
              <li className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <Image src={advisors} alt='advisors' />
                  <p className='text-sm-medium text-tonal-800 font-PoppinsMedium ml-[8px]'>
                    5% Advisors
                  </p>
                </div>
                <p className='text-sm-medium text-tonal-800 font-PoppinsMedium w-1/2 max-[450px]:w-fit text-left'>
                  100,000,000 VIX
                </p>
              </li>
              <li className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <Image src={earlyInvestor} alt='earlyInvestor' />
                  <p className='text-sm-medium text-tonal-800 font-PoppinsMedium ml-[8px]'>
                    4.9% Early Investor
                  </p>
                </div>
                <p className='text-sm-medium text-tonal-800 font-PoppinsMedium w-1/2 max-[450px]:w-fit text-left'>
                  98,000,000 VIX
                </p>
              </li>
              <li className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <Image src={tokenSale} alt='tokenSale' />
                  <p className='text-sm-medium text-tonal-800 font-PoppinsMedium ml-[8px]'>
                    0.1% Token Sale
                  </p>
                </div>
                <p className='text-sm-medium text-tonal-800 font-PoppinsMedium w-1/2 max-[450px]:w-fit text-left'>
                  2,000,000 VIX
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className='bg-[url("../public/assets/images/RoadMapBackground.svg")] max-[450px]:px-6 max-[450px]:bg-[url("../public/assets/images/RoadMapBackground-mobile.svg")] bg-cover bg-no-repeat bg-center py-[90px] max-[450px]:py-[77px]' id='roadmap'>
        <div className='max-w-xl mx-auto w-full'>
          <div className='w-fit mb-[80px] max-[450px]:mb-[60px]'>
            <h3 className='text-4xl-bold font-PoppinsBold'>RoadMap</h3>
            <hr className='inline-block bg-black p-[2px] w-[20%]' />
          </div>
          <ul className='flex items-start max-[450px]:flex-col'>
            <li className='relative'>
              <h3 className='text-2lg-bold font-PoppinsBold text-primary-50 absolute left-[38%] max-[450px]:left-[50%] transform -translate-x-1/2'>
                Completed
              </h3>
              <Image src={Completed} alt='Completed' />
              <div className='absolute left-[12%] top-1/4 overflow-y-scroll h-2/3 roadmap cursor-pointer w-[75%] max-[450px]:w-[90%] max-[450px]:left-[8%]'>
                <ul className='flex flex-col gap-[10px] w-[95%]'>
                  <li className='text-md-regular font-PoppinsRegular text-tonal-800'>
                    Q1 2020: VIXCO project planning
                  </li>
                  <li className='text-md-regular font-PoppinsRegular text-tonal-800'>
                    Q2 2020: VIXCO whitepaper release and business model
                    planning
                  </li>
                  <li className='text-md-regular font-PoppinsRegular text-tonal-800'>
                    Q3 2020: VIXCO project payment and blockchain solution
                    partner, Ibexlab Co., Ltd., joins VIXCO project
                  </li>
                  <li className='text-md-regular font-PoppinsRegular text-tonal-800'>
                    Q4 2020: Verification of blockchain payment system in
                    Kazakhstan (www.yoshop.kz), blockchain POS terminal design,
                    VIXPAY service planning, and system design
                  </li>
                  <li className='text-md-regular font-PoppinsRegular text-tonal-800'>
                    Q1 2021: Development of unmanned loan kiosk beta version,
                    blockchain POS terminal development, staking & loan service
                    development
                  </li>
                  <li className='text-md-regular font-PoppinsRegular text-tonal-800'>
                    Q2 2021: Wallet and token platform development completed,
                    blockchain POS terminal development completed, VIXPAY pilot
                    service opened, staking service development completed
                  </li>
                  <li className='text-md-regular font-PoppinsRegular text-tonal-800'>
                    Q3 2021: Blockchain POS terminal release completed, VIXPAY
                    service launch, PG registration and Rent Pay service launch,
                    unmanned loan kiosk development, loan service development
                  </li>
                  <li className='text-md-regular font-PoppinsRegular text-tonal-800'>
                    Q4 2021: Unmanned loan service launch, Kazakhstan blockchain
                    POS terminal supply, overseas branch establishment
                  </li>
                  <li className='text-md-regular font-PoppinsRegular text-tonal-800'>
                    Q1 2022: VIXPAY financial services (accounts receivable Buy
                    & Sell) and food supply service for franchisees
                  </li>
                  <li className='text-md-regular font-PoppinsRegular text-tonal-800'>
                    Q3 2022: Church donation kiosk pilot service, Kazakhstan
                    VIXPAY service testing
                  </li>
                  <li className='text-md-regular font-PoppinsRegular text-tonal-800'>
                    Q4 2022: Kazakhstan VIXPAY beta service opening
                  </li>
                  <li className='text-md-regular font-PoppinsRegular text-tonal-800'>
                    Q1 2023: Bithumb listing and follow-up measures after
                    listing, Kazakhstan VIXPAY service launch
                  </li>
                </ul>
              </div>
            </li>
            <li className='relative'>
              <h3 className='text-2lg-bold font-PoppinsBold text-primary-50 absolute left-[40%] max-[450px]:left-[50%] transform -translate-x-1/2'>
                Ongoing
              </h3>
              <Image src={Ongoing} alt='ongoing' />
              <div className='absolute left-[15%] top-[40%] overflow-y-scroll h-2/3 roadmap cursor-pointer w-[80%] max-[450px]:w-[90%] max-[450px]:left-[8%]'>
                <ul className='flex flex-col gap-[10px] w-[95%]'>
                  <li className='text-md-regular font-PoppinsRegular text-tonal-800'>
                    Q2 2023: Additional domestic and international listings,
                    VIXPAY blockchain kiosk mass production
                  </li>
                </ul>
              </div>
            </li>
            <li className='relative'>
              <h3 className='text-2lg-bold font-PoppinsBold text-primary-50 absolute left-[40%] max-[450px]:left-[50%] transform -translate-x-1/2'>
                Future
              </h3>
              <Image src={Future} alt='future' />
              <div className='absolute left-[15%] top-[32%] overflow-y-scroll h-2/3 roadmap cursor-pointer w-[80%] max-[450px]:w-[90%] max-[450px]:left-[8%]'>
                <ul className='flex flex-col gap-[10px] w-[95%]'>
                  <li className='text-md-regular font-PoppinsRegular text-tonal-800'>
                    Q3 2023: VIXPAY local advertising platform development,
                    VIXCO Defi service launch
                  </li>
                  <li className='text-md-regular font-PoppinsRegular text-tonal-800'>
                    Q4 2023: VIXPAY local advertising service launch, VIXPAY
                    additional overseas expansion
                  </li>
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
              <h3 className='text-4xl-bold font-PoppinsBold max-[450px]:text-3xl-bold'>Notice</h3>
              <hr className='inline-block bg-black p-[2px] w-[30%] max-[450px]:w-[45%]' />
            </div>
            <Link href={'/notice'} className='flex items-center max-[450px]:hidden'>
              <p className='mr-[10px] text-2lg-bold text-primary-50 font-PoppinsBold'>
                View all notice
              </p>
              <Image src={NoticeLink} alt='notice link' />
            </Link>
          </div>
          <div className='flex items-center justify-between max-[450px]:flex-col max-[450px]:gap-5 max-[450px]:mb-[40px]'>
            <Link
              href={'/notice'}
              className='py-5 px-6 rounded-[18px] shadow-shadow-2 max-w-[610px] w-full'
            >
              <div className='relative mb-[25px] h-full'>
                <Image src={NoticeCardBackground} alt='NoticeCardBackground' className='max-[450px]:hidden' />
                <Image src={NotificationBackgroundCardMobile} alt='NoticeCardBackground' className='max-[450px]:block hidden w-full' />
                <h2 className='text-3lg-semibold font-PoppinsSemibold absolute left-[40px] top-2/4 text-white max-[450px]:text-lg-bold'>
                  Listed on Bithumb
                </h2>
              </div>
              <div className='px-5'>
                <h4 className='text-lg-semibold font-PoppinsSemibold text-primary-50 mb-2'>
                  Listed on Bithumb
                </h4>
                <span className='text-sm-medium font-PoppinsMedium text-tonal-300 mb-[15px] inline-block'>
                  /2023.1.5/
                </span>
                <h5 className='text-sm-regular text-tonal-900 font-PoppinsRegular mb-5'>
                  Dear Vixco community
                </h5>
                <p className='text-sm-regular text-tonal-900 font-PoppinsRegular'>
                  We are announcing that VIXCO will be listed on the KRW/BTC
                  market today on Bithumb, the No. 1 virtual asset platform ...
                </p>
              </div>
            </Link>
            <Link
              href={'/notice'}
              className='py-5 px-6 rounded-[18px] shadow-shadow-2 max-w-[610px] w-full'
            >
              <div className='relative mb-[25px] h-full'>
                <Image src={NoticeCardBackground} alt='NoticeCardBackground' className='max-[450px]:hidden' />
                <Image src={NotificationBackgroundCardMobile} alt='NoticeCardBackground' className='max-[450px]:block hidden w-full ' />
                <h2 className='text-3lg-semibold font-PoppinsSemibold absolute left-[40px] top-2/4 text-white max-[450px]:text-lg-bold'>
                  VIXCO Migration
                </h2>
              </div>
              <div className='px-5'>
                <h4 className='text-lg-semibold font-PoppinsSemibold text-primary-50 mb-2'>
                  VIXCO Migration
                </h4>
                <span className='text-sm-medium font-PoppinsMedium text-tonal-300 mb-[15px] inline-block'>
                  /2022.2.13/
                </span>
                <h5 className='text-sm-regular text-tonal-900 font-PoppinsRegular mb-5'>
                  Hello VIXCO community.
                </h5>
                <p className='text-sm-regular text-tonal-900 font-PoppinsRegular'>
                  VIXCO has carefully moved VIX tokens to enhance transparency
                  and efficiency. Swaps will take place within the fly bit
                  exchange ...
                </p>
              </div>
            </Link>
          </div>
          <Link href={'/notice'} className='max-[450px]:flex max-[450px]:items-center hidden w-fit mx-auto'>
            <p className='mr-[10px] text-2lg-bold text-primary-50 font-PoppinsBold'>
              View all notice
            </p>
            <Image src={NoticeLink} alt='notice link' />
          </Link>
        </div>
      </section>
    </main>
  );
}
