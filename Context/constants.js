// BOO deployed to 0xF66CfDf074D2FFD6A4037be3A669Ed04380Aef2B
// Life deployed to 0xFC4EE541377F3b6641c23CBE82F6f04388290421
// SingleSwapToken deployed to 0x20d7B364E8Ed1F4260b5B90C41c2deC3C1F6D367
// swapMultiHop deployed to 0xf5C3953Ae4639806fcbCC3196f71dd81B0da4348

import booToken from './BooToken.json';
import lifeToken from './LifeToken.json';
import singleSwapToken from './SingleSwapToken.json';
import swapMultiHop from './SwapMultiHop.json';
import IWETH from './IWETH.json';

export const BooTokenAddress = "0xF66CfDf074D2FFD6A4037be3A669Ed04380Aef2B";
export const BooTokenABI = booToken.abi;

export const LifeTokenAddress = "0xFC4EE541377F3b6641c23CBE82F6f04388290421";
export const LifeTokenABI = lifeToken.abi;

export const SingleSwapTokenTokenAddress = "0x20d7B364E8Ed1F4260b5B90C41c2deC3C1F6D367";
export const SingleSwapTokenABI = singleSwapToken.abi;

export const SwapMultiHopAddress = "0xf5C3953Ae4639806fcbCC3196f71dd81B0da4348";
export const SwapMultiHopABI = swapMultiHop.abi;

export const IWETHAddress = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
export const IWETHABI = IWETH.abi;