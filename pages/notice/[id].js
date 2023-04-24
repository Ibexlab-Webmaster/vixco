export default function NoticePerPage({ notice }) {
  return (
    <div>
      <h1>{notice.title}</h1>
      <p>Date: {notice.date}</p>
      <p>{notice.description}</p>
    </div>
  );
}

export async function getStaticPaths() {
  const data = [
    {
      id: 1,
      title: 'Listed on Bithumb',
      date: '2023.1.5',
      description:
        'Hello VIXCO community.VIXCO has carefully moved VIX tokens to enhance transparency and efficiency. Swaps will take place within the fly bit exchange.Swap progress time February 16th 17:00~18:00 Deposit and withdrawal stop time February 16th 12:00~19:00 Migration is a process to includes lock-up and incineration functions.We will notify you when the deposit and withdrawal resume.We are very sorry for the inconvenience in using it.Please continue to show a lot of love and support/encourage VIXCO.Migration contract address: 0xc021E11ef66710fE2c9E0FbbbD8b4F7C3016738b Existing contract address: 0x49615a649b698bf55df9e1d2147e0602ac842b0b Migration ratio: It remains the same at 1:1 Deposit address: 0x6756636a92ce0c82c5c6fd4068d695f0700be7d0',
    },
    {
      id: 2,
      title: 'VIXCO Migration',
      date: '2022.2.13',
      description:
        'Hello VIXCO community.VIXCO has carefully moved VIX tokens to enhance transparency and efficiency. Swaps will take place within the fly bit exchange ...',
    },
  ];

  const paths = data.map((notice) => ({
    params: { id: notice.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const data = [
    {
      id: 1,
      title: 'Listed on Bithumb',
      date: '2023.1.5',
      description:
        'Hello VIXCO community.VIXCO has carefully moved VIX tokens to enhance transparency and efficiency. Swaps will take place within the fly bit exchange.Swap progress time February 16th 17:00~18:00 Deposit and withdrawal stop time February 16th 12:00~19:00 Migration is a process to includes lock-up and incineration functions.We will notify you when the deposit and withdrawal resume.We are very sorry for the inconvenience in using it.Please continue to show a lot of love and support/encourage VIXCO.Migration contract address: 0xc021E11ef66710fE2c9E0FbbbD8b4F7C3016738b Existing contract address: 0x49615a649b698bf55df9e1d2147e0602ac842b0b Migration ratio: It remains the same at 1:1 Deposit address: 0x6756636a92ce0c82c5c6fd4068d695f0700be7d0',
    },
    {
      id: 2,
      title: 'VIXCO Migration',
      date: '2022.2.13',
      description:
        'Hello VIXCO community.VIXCO has carefully moved VIX tokens to enhance transparency and efficiency. Swaps will take place within the fly bit exchange ...',
    },
  ];

  const notice = data.find((n) => n.id.toString() === params.id);

  return { props: { notice } };
}
