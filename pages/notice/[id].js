import Breadcrumb from "@/components/breadCrumb";
import { noticeDatas } from "@/constants/notice";

export default function NoticePerPage({ notice }) {
  return (
    <main className="h-full grow">
      <section className="pt-[150px] pb-[15px]">
        <div className='max-w-xl pl-[44px] w-full mx-auto py-[100px] bg-[url("/assets/images/NotificationPageBackground.svg")] bg-cover bg-no-repeat'>
          <h2 className="text-6xl-bold text-white font-PoppinsBold">VIXCO Migration</h2>
        </div>
      </section>
      <section className="py-[15px]">
        <div className="max-w-xl w-full mx-auto">
          <div className="mb-[60px]">
            <Breadcrumb title={notice.title} />
          </div>

          <h2 className="text-3lg-semibold font-PoppinsSemibold text-tonal-800 mb-[10px]">{notice.title}</h2>
          <p className="text-lg-medium font-PoppinsMedium text-tonal-400 mb-[30px]">/{notice.date}/</p>
          <p className="text-tonal-800 text-md-regular font-PoppinsRegular max-w-[600px] w-full">{notice.description}</p>
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
