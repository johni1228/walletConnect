import WalletConnectProvider from '@walletconnect/web3-provider';
import WalletLink from 'walletlink';
import { BigNumber } from 'ethers';


export const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: process.env.INFURA_ID, // required
    },
  },
  'custom-walletlink': {
    display: {
      logo: 'https://play-lh.googleusercontent.com/PjoJoG27miSglVBXoXrxBSLveV6e3EeBPpNY55aiUUBM9Q1RCETKCOqdOkX2ZydqVf0',
      name: 'Coinbase',
      description: 'Connect to Coinbase Wallet (not Coinbase App)',
    },
    options: {
      appName: 'Coinbase', // Your app name
      networkUrl: `https://mainnet.infura.io/v3/${process.env.INFURA_ID}`,
      chainId: 1,
    },
    package: WalletLink,
    connector: async (_, options) => {
      const { appName, networkUrl, chainId } = options;
      const walletLink = new WalletLink({
        appName,
      });
      const provider = walletLink.makeWeb3Provider(networkUrl, chainId);
      await provider.enable();
      return provider;
    },
  },
};

// export const NFT_CONTRACT_ADDRESS = '0xd8a984a2d4887721dedf0ffb59fd8432fa60243b'; // ETH mainnet
export const NFT_CONTRACT_ADDRESS = '0x0E6377E923CCEC60b778F59A6F99F0C0d6fA0459'; // BSC Testnet
export const MINT_COST = BigNumber.from('80000000000000000'); // 0.08 ether
export const MAX_PER_WALLET = 2000;

