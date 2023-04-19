const Account = () => null;

export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/gallery",
      permanent: false,
    },
  };
}

export default Account;
