const Edit = () => null;

export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/gallery",
      permanent: true,
    },
  };
}

export default Edit;
