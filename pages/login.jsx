import Head from 'next/head';
import React from 'react';

import LoginForm from '../components/LoginForm';
import Layout from '../layout/layout';

export default function login() {
  return (
    <Layout>
      <Head>
        <title>Login Page</title>
      </Head>
      <LoginForm />
    </Layout>
  );
}
