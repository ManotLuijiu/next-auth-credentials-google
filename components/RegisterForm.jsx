import { useFormik } from 'formik';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from 'react-icons/hi';

import { register_validate } from '../lib/validate';
import styles from '../styles/Form.module.css';

export default function RegisterForm() {
  const [show, setShow] = useState({ password: false, cpassword: false });

  // const onSubmit = async (values) => {
  //   console.log(values);
  // };

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      cpassword: '',
    },
    validate: register_validate,
    onSubmit,
  });

  async function onSubmit(values) {
    console.log(values);
  }

  return (
    <section className="w-3/4 mx-auto flex flex-col gap-10">
      <div className="title">
        <h1 className="text-gray-800 text-4xl font-bold py-4">Register</h1>
        <p className="w-3/4 mx-auto text-gray-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab omnis
          expedita blanditiis
        </p>
      </div>
      {/* form */}
      <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
        <div className={styles.input_group}>
          <input
            type="text"
            name="username"
            placeholder="User Name"
            className={styles.input_text}
            {...formik.getFieldProps('username')}
          />
          <span className="icon flex items-center px-4">
            <HiOutlineUser size={25} />
          </span>
        </div>
        {formik.errors.username && formik.touched.username ? (
          <span className="text-red-500 text-sm text-left pl-4">
            {formik.errors.username}
          </span>
        ) : (
          <></>
        )}
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
            type={`${show.password ? 'text' : 'password'}`}
            name="password"
            placeholder="password"
            className={styles.input_text}
            autoComplete="on"
            {...formik.getFieldProps('password')}
          />
          <span
            className="icon flex items-center px-4"
            onClick={() => setShow({ ...show, password: !show.password })}
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
        <div className={styles.input_group}>
          <input
            type={`${show.cpassword ? 'text' : 'password'}`}
            name="cpassword"
            placeholder="Confirm password"
            className={styles.input_text}
            autoComplete="on"
            {...formik.getFieldProps('cpassword')}
          />
          <span
            className="icon flex items-center px-4"
            onClick={() => setShow({ ...show, cpassword: !show.cpassword })}
          >
            <HiFingerPrint size={25} />
          </span>
        </div>
        {formik.errors.cpassword && formik.touched.cpassword ? (
          <span className="text-red-500 text-sm text-left pl-4">
            {formik.errors.cpassword}
          </span>
        ) : (
          <></>
        )}
        {/* login buttons */}
        <div className="input-button">
          <button type="submit" className={styles.button}>
            Register
          </button>
        </div>
        <div className="input-button">
          <button type="button" className={styles.button_custom}>
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
          <button type="button" className={styles.button_custom}>
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
        Have an account?{' '}
        <Link href="/login" legacyBehavior>
          <a className="text-blue-700">Sign in</a>
        </Link>
      </p>
    </section>
  );
}
