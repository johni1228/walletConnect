import Head from 'next/head';
import NavBar from '../components/NavBar';

export const Home = (): JSX.Element => {

  return (
    <div className="">
      <Head>
        <title>WalletConnect</title>
      </Head>

      <header>
        <NavBar />
      </header>

      <main className="container mt-16 mx-auto px-3 md:px-4">
      </main>
    </div>
  )
}

export default Home
