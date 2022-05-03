// import { getSession } from "next-auth/react";
import Head from "next/head";
import Header from "../components/Header";
import { useSession, signIn, signOut } from "next-auth/react";
import Login from "../components/Login";

export default function Home() {
  const { data: session } = useSession();

  if (!session) return <Login />;

  return (
    <div>
      <Head>
        <title>Facebook 2.0 (Clone)</title>
        <meta name="description" content="Facebook clone by Sherifdeen" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      <main>
        {/* Sidebar */}
        {/* Feed */}
        {/* Widgets */}
      </main>
    </div>
  );
}

// export async function getServerSideProps(context){
//   // Get the user
//   const session = await getSession(context);

//   return {
//     props: {
//       session
//     }
//   }
// }
