import React, { useState, useEffect } from 'react'
import Head from 'next/head';
import NavBar from '../components/NavBar';
import CountdownTimer from '../components/CountdownTimer';
import { maxCounter } from '../lib/consts';

export const Home = (): JSX.Element => {

  const [countDown, setCountDown] = useState(maxCounter);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDown - 1000);
    }, 1000);

    return () => clearInterval(interval);
  })

  const handleMint = () => {
    console.log('clicked mint button');
  }



  return (
    <div className="">
      <Head>
        <title>WalletConnect</title>
      </Head>

      <header>
        <NavBar />
      </header>

      <main className="container mt-16 mx-auto w-full h-full flex flex-col justify-center items-center">
        <div className="countdown w-96 h-32 mb-10 px-20">
          <CountdownTimer targetDate={countDown} />
        </div>
        <button className={`btn-mint ${countDown <= 0 ? 'bg-green-500 cursor-pointer' : 'bg-gray-400 cursor-not-allowed'}  px-10 py-2 font-bold rounded-md text-white text-2xl`} disabled={countDown >= 0} onClick={handleMint}>Mint</button>
      </main>
    </div>
  )
}

export default Home
