import Head from 'next/head';
import React from 'react';

import RegisterForm from '../components/RegisterForm';
import Layout from '../layout/layout';

export default function register() {
  return (
    <Layout>
      <Head>
        <title>Register Page</title>
      </Head>
      <RegisterForm />
    </Layout>
  );
}
