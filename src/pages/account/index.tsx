const Account = () => null;

export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/gallery",
      permanent: true,
    },
  };
}

export default Account;
