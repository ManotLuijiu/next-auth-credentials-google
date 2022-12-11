import { useFormik } from 'formik';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { HiAtSymbol, HiFingerPrint } from 'react-icons/hi';

// import * as Yup from 'yup';
import login_validate from '../lib/validate';
import styles from '../styles/Form.module.css';

export default function LoginForm() {
  const [show, setShow] = useState(false);

  // formik hook
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: login_validate,
    // validationSchema: Yup.object({
    //   email: Yup.string().email('Invalid email address').required('Required'),
    // }),
    onSubmit,
  });

  console.log(formik.errors);

  async function onSubmit(values) {
    console.log(values);
  }

  // Google Handler function
  const handleGoogleSignin = async () => {
    signIn('google', { callbackUrl: 'http://localhost:3000' });
  };

  // Github Handler function
  const handleGithubSignin = async () => {
    signIn('github', { callbackUrl: 'http://localhost:3000' });
  };

  return (
    <section className="w-3/4 mx-auto flex flex-col gap-10">
      <div className="title">
        <h1 className="text-gray-800 text-4xl font-bold py-4">Explore</h1>
        <p className="w-3/4 mx-auto text-gray-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab omnis
          expedita blanditiis
        </p>
      </div>
      {/* form */}
      <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
        <div className={styles.input_group}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className={styles.input_text}
            {...formik.getFieldProps('email')}
          />
          <span className="icon flex items-center px-4">
            <HiAtSymbol size={25} />
          </span>
        </div>
        {formik.errors.email && formik.touched.email ? (
          <span className="text-red-500 text-sm text-left pl-4">
            {formik.errors.email}
          </span>
        ) : (
          <></>
        )}
        <div className={styles.input_group}>
          <input
            type={`${show ? 'text' : 'password'}`}
            name="password"
            placeholder="password"
            className={styles.input_text}
            {...formik.getFieldProps('password')}
          />
          <span
            className="icon flex items-center px-4"
            onClick={() => setShow(!show)}
          >
            <HiFingerPrint size={25} />
          </span>
        </div>
        {formik.errors.password && formik.touched.password ? (
          <span className="text-red-500 text-sm text-left pl-4">
            {formik.errors.password}
          </span>
        ) : (
          <></>
        )}
        {/* login buttons */}
        <div className="input-button">
          <button type="submit" className={styles.button}>
            Login
          </button>
        </div>
        <div className="input-button">
          <button
            type="button"
            onClick={handleGoogleSignin}
            className={styles.button_custom}
          >
            Sign In with Google{' '}
            <Image
              src="/assets/google.svg"
              alt="google"
              width={20}
              height={20}
            />
          </button>
        </div>
        <div className="input-button">
          <button
            type="button"
            onClick={handleGithubSignin}
            className={styles.button_custom}
          >
            Sign In with Github{' '}
            <Image
              src="/assets/github.svg"
              alt="github"
              width={25}
              height={25}
            />
          </button>
        </div>
      </form>
      {/* bottom */}
      <p className="text-center text-gray-400">
        don&apos;t have an account yet?{' '}
        <Link href="/register" legacyBehavior>
          <a className="text-blue-700">Sign Up</a>
        </Link>
      </p>
    </section>
  );
}
