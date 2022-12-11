import { getSession } from 'next-auth/react';
import React from 'react';

export default function profile() {
  return <div>profile</div>;
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}
