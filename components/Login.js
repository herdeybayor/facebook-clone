import Head from "next/head";
import Image from "next/image";
import React from "react";
import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <div className="grid place-items-center">
      <Head>
        <title>Facebook 2.0 (Clone)</title>
        <meta name="description" content="Facebook clone by Sherifdeen" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Image
        src="https://links.papareact.com/t4i"
        width={400}
        height={400}
        objectFit="contain"
        alt="facebook-logo"
      />
      <h1
        onClick={() => signIn()}
        className="p-5 bg-blue-600 rounded-full font-medium text-white hover:bg-blue-500 cursor-pointer text-center"
      >
        Login with Facebook
      </h1>
    </div>
  );
};

export default Login;
