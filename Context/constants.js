// BOO deployed to 0x90b97E83e22AFa2e6A96b3549A0E495D5Bae61aF
// Life deployed to 0xdb54fa574a3e8c6aC784e1a5cdB575A737622CFf
// SingleSwapToken deployed to 0xDDa0648FA8c9cD593416EC37089C2a2E6060B45c
// swapMultiHop deployed to 0xccA9728291bC98ff4F97EF57Be3466227b0eb06C

import booToken from './BooToken.json';
import lifeToken from './LifeToken.json';
import singleSwapToken from './SingleSwapToken.json';
import swapMultiHop from './SwapMultiHop.json';
import IWETH from './IWETH.json';

export const BooTokenAddress = "0xc6B407503dE64956Ad3cF5Ab112cA4f56AA13517";
export const BooTokenABI = booToken.abi;

export const LifeTokenAddress = "0x3a622DB2db50f463dF562Dc5F341545A64C580fc";
export const LifeTokenABI = lifeToken.abi;

export const SingleSwapTokenAddress = "0x6A47346e722937B60Df7a1149168c0E76DD6520f";
export const SingleSwapTokenABI = singleSwapToken.abi;

export const SwapMultiHopAddress = "0x7A28cf37763279F774916b85b5ef8b64AB421f79";
export const SwapMultiHopABI = swapMultiHop.abi;

export const IWETHAddress = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
export const IWETHABI = IWETH.abi;