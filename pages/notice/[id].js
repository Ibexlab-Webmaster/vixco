import React from 'react'
import Breadcrumb from "@/components/breadCrumb";
import { useRouter } from "next/router";
import { useTina } from "tinacms/dist/react";
import client from "@/tina/__generated__/client";

export const getStaticProps = async ({ locale }) => {
  const { data, query, variables } = await client.queries.home({
    relativePath: `${locale}/home.json`,
  });

  return {
    props: {
      data,
      query,
      variables,
    },
  };
};

export const getStaticPaths = async () => {
  const { data } = await client.queries.homeConnection();
  const paths = data.homeConnection.edges.map((x) => {
    return { params: { id: x.node._sys.filename } };
  });

  return {
    paths,
    fallback: 'blocking',
  };
};

export default function NoticePerPage(props) {
  const router = useRouter();

  const { id } = router.query

  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  let pageData = data.home;

  return (
    <main className="pb-[130px]">
      {
        pageData.noticeSection.items.map((n, index) => {
          if (n.id == id)
            return (
              <React.Fragment key={index}>
                <section className="pt-[150px] pb-[15px] max-[450px]:pt-[120px] max-[450px]:px-6">
                  <div className='max-w-xl pl-[44px] w-full mx-auto py-[100px] max-[450px]:pl-[15px] max-[450px]:py-[90px] max-[450px]:bg-center max-[450px]:bg-cover max-[450px]:bg-[url("/assets/images/NotificationPageBackground-mobile.svg")] bg-[url("/assets/images/NotificationPageBackground.svg")] bg-cover bg-no-repeat'>
                    <h2 className="text-6xl-bold text-white font-PoppinsBold max-[450px]:text-lg-bold">{n.title}</h2>
                  </div>
                </section>
                <section className="py-[15px] max-[450px]:px-6">
                  <div className="max-w-xl w-full mx-auto">
                    <div className="mb-[60px] max-[450px]:mb-[70px]">
                      <Breadcrumb title={n.title} />
                    </div>

                    <h2 className="text-3lg-semibold font-PoppinsSemibold text-tonal-800 mb-[10px] max-[450px]:text-2lg-bold">{n.title}</h2>
                    <p className="text-lg-medium font-PoppinsMedium text-tonal-400 mb-[30px] max-[450px]:mb-[35px] max-[450px]:text-base-regular max-[450px]:font-PoppinsRegular">/{n.date}/</p>
                    <div className='flex flex-col gap-y-4 w-full'>
                      {n.items?.map((el, index) => {
                        const sentences = el?.text?.split('. ');
                        const subtext = el?.subtext;
                        const image1 = el?.image1;
                        return (
                          <div key={index} className="text-tonal-800 text-md-regular font-PoppinsRegular w-fit max-[450px]:text-sm-regular">
                            {sentences.map((sentence, i) => (
                              <React.Fragment key={i}>
                                {<p
                                className='text-black text-2xl-bold font-PoppinsRegular w-fit max-[450px]:text-sm-regular'
                                >{sentence}</p>}
                                {subtext != null ? <p
                                  className='text-tonal-600 text-md-bold font-PoppinsRegular w-fit max-[450px]:text-sm-regular'
                                >{subtext}</p> : <div></div>}
                                 {image1 != null ? <img src={image1} alt="" className='w-full max-[450px]:w-[100%] max-[450px]:h-[auto] max-[450px]:object-cover max-[450px]:rounded-[10px] max-[450px]:mt-[20px]' /> : <div></div>}
                                {/* {i < sentences.length - 1 ? '.' : ''} */}
                                <br />
                              </React.Fragment>
                            ))}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </section>
              </React.Fragment>
            )
        })
      }

    </main>
  );
}

// {
//   el.items?.length > 0 && el?.items?.map((el, index) => {
//     console.log(el);
//     const splitText = el.text.split('. ');
//     const lastIndex = splitText.length - 1;
//     return (
//       <p key={index} className='text-sm-regular text-tonal-900 font-PoppinsRegular'>
//         {splitText.map((text, i) => (
//           <React.Fragment key={i}>
//             {text}.<br />
//           </React.Fragment>
//         ))}
//         {splitText[lastIndex]}…
//       </p>
//     );
//   })
// }