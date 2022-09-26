import { ethers } from 'ethers';
import React, { useState, useEffect, useCallback } from 'react'
import Head from 'next/head';
import NavBar from '../components/NavBar';
import CountdownTimer from '../components/CountdownTimer';
import useGlobalState from '../hooks/useGlobalState';
import { maxCounter, passNFT_address } from '../lib/consts';
import abi from '../abi/passNFT.json';

export const Home = () => {

  const [countDown, setCountDown] = useState(maxCounter);
  const { provider, web3Provider, chainId } = useGlobalState();

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDown - 1000);
    }, 1000);

    return () => clearInterval(interval);
  })

  const handleMint = useCallback(async () => {
    const signer = web3Provider.getSigner();
    const address = await signer.getAddress();
    const contract = new ethers.Contract(passNFT_address, abi, signer);

    if (chainId != 4) {
      alert("Please switch Ethereum Network");
      return;
    }
    else {
      const tx = await contract.mint(address, {
        value: 0
      });
      await tx.wait();
    };

  }, [provider, web3Provider, chainId]);



  return (
    <div>
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
