import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Button from '../components/Button';
import { useRouter } from 'next/dist/client/router';
import { useSession, signIn } from 'next-auth/client';

export default function Home() {
  const [session, loading] = useSession();
  const router = useRouter();
  
  return (
    <>
      <Head>
        <title>Github Search</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!loading ? (
        <div className="flex flex-col items-center justify-center h-screen">
          {!session ? (
            <div onClick={signIn}>
              <Button text="Login to Github" />
            </div>
          ) : (
            router.push('/search')
          )}
        </div>
      ) : null}

      {/* <div className="flex flex-col items-center justify-center h-screen">
        <Button text="Login to Github" />
      </div> */}

      {/* <LoginGithub
        clientId="4f262cc9e20d3043da02"
        onSuccess={onSuccess}
        onFailure={onFailure}
        // redirectUri='/search'
      /> */}
    </>
  );
}
