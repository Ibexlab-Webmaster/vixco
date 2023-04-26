import Breadcrumb from "@/components/breadCrumb";
import { noticeDatas } from "@/constants/notice";
import NotificationBackgroundCardMobile from '../../public/assets/images/NotificationPageBackground-mobile.svg'

export default function NoticePerPage({ notice }) {
  return (
    <main className="pb-[130px]">
      <section className="pt-[150px] pb-[15px] max-[450px]:pt-[120px] max-[450px]:px-6">
        <div className='max-w-xl pl-[44px] w-full mx-auto py-[100px] max-[450px]:pl-[15px] max-[450px]:py-[90px] max-[450px]:bg-center max-[450px]:bg-cover max-[450px]:bg-[url("/assets/images/NotificationPageBackground-mobile.svg")] bg-[url("/assets/images/NotificationPageBackground.svg")] bg-cover bg-no-repeat'>
          <h2 className="text-6xl-bold text-white font-PoppinsBold max-[450px]:text-lg-bold">{notice.title}</h2>
        </div>
      </section>
      <section className="py-[15px] max-[450px]:px-6">
        <div className="max-w-xl w-full mx-auto">
          <div className="mb-[60px] max-[450px]:mb-[70px]">
            <Breadcrumb title={notice.title} />
          </div>

          <h2 className="text-3lg-semibold font-PoppinsSemibold text-tonal-800 mb-[10px] max-[450px]:text-2lg-bold">{notice.title}</h2>
          <p className="text-lg-medium font-PoppinsMedium text-tonal-400 mb-[30px] max-[450px]:mb-[35px] max-[450px]:text-base-regular max-[450px]:font-PoppinsRegular">/{notice.date}/</p>
          <p className="text-tonal-800 text-md-regular font-PoppinsRegular max-w-[600px] w-full max-[450px]:text-sm-regular">{notice.description}</p>
        </div>
      </section>
    </main>
  );
}

export async function getStaticPaths() {
  const data = noticeDatas

  const paths = data.map((notice) => ({
    params: { id: notice.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const data = noticeDatas

  const notice = data.find((n) => n.id.toString() === params.id);

  return { props: { notice } };
}
