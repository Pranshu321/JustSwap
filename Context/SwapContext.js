import React, { useState, useEffect } from "react";
import { ethers, BigNumber } from "ethers";
import Web3Modal from "web3modal";

//INTERNAL IMPORT
import {
    checkIfWalletConnected,
    connectWallet,
    connectingWithBooToken,
    connectingWithLIfeToken,
    connectingWithSingleSwapToken,
    connectingWithIWTHToken,
    connectingWithDAIToken,
} from "../Utils/appFeatures";

import { BooTokenAddress, IWETHABI, LifeTokenAddress } from "./constants";
import ERC20 from "./ERC20.json";

export const SwapTokenContext = React.createContext();

export const SwapTokenContextProvider = ({ children }) => {
    //USSTATE
    const [account, setAccount] = useState("");
    const [ether, setEther] = useState("");
    const [networkConnect, setNetworkConnect] = useState("");
    const [weth9, setWeth9] = useState("");
    const [dai, setDai] = useState("");

    const [tokenData, setTokenData] = useState([]);

    const addToken = [
        BooTokenAddress,
        LifeTokenAddress
    ];
    //FETCH DATA
    const fetchingData = async () => {
        try {
            //GET USER ACCOUNT
            const userAccount = await checkIfWalletConnected();
            setAccount(userAccount);
            //CREATE PROVIDER
            const web3modal = new Web3Modal();
            const connection = await web3modal.connect();
            const provider = new ethers.providers.Web3Provider(connection);
            //CHECK Balance
            const balance = await provider.getBalance(userAccount);
            const convertBal = BigNumber.from(balance).toString();
            const ethValue = ethers.utils.formatEther(convertBal);
            console.log(ethValue);
            setEther(ethValue);

            //GET NETWORK
            const newtork = await provider.getNetwork();
            setNetworkConnect(newtork.name);
            // console.log(newtork);

            //ALL TOKEN BALANCE AND DATA
            addToken.map(async (el, i) => {
                console.log(el);
                //GETTING CONTRACT
                const contract = new ethers.Contract(el, ERC20, provider);
                // console.log(contract);
                // GETTING BALANCE OF TOKEN
                const userBalance = await contract.balanceOf(userAccount);
                const tokenLeft = BigNumber.from(userBalance).toString();
                const convertTokenBal = ethers.utils.formatEther(tokenLeft);
                //GET NAME AND SYMBOL

                const symbol = await contract.symbol();
                const name = await contract.name();

                tokenData.push({
                    name: name,
                    symbol: symbol,
                    tokenBalance: convertTokenBal,
                });
            });

            //WETH Balance
            const wethContract = await connectingWithIWTHToken();
            const wethBal = await wethContract.balanceOf(userAccount);
            const wethToken = BigNumber.from(wethBal).toString();
            const convertwethTokenBal = ethers.utils.formatEther(wethToken);
            setWeth9(convertwethTokenBal);

            //DAI Balance
            const daiContract = await connectingWithDAIToken();
            const daiBal = await daiContract.balanceOf(userAccount);
            const daiToken = BigNumber.from(daiBal).toString();
            const convertdaiTokenBal = ethers.utils.formatEther(daiToken);
            setDai(convertdaiTokenBal);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchingData();
    }, []);
    //SINGL SWAP TOKEN
    const singleSwapToken = async () => {
        try {
            let singleSwapToken;
            let weth;
            let dai;

            singleSwapToken = await connectingWithSingleSwapToken();
            weth = await connectingWithIWTHToken();
            dai = await connectingWithDAIToken();

            const amountIn = 10n ** 18n;

            await weth.deposit({ value: amountIn });
            await weth.approve(singleSwapToken.address, amountIn);

            //SWAP
            await singleSwapToken.swapExactInputSingle(amountIn, {
                gasLimit: 300000,
            });

            const balance = await dai.balanceOf(account);
            const transferAmount = BigNumber.from(balance).toString();
            const ethValue = ethers.utils.formatEther(transferAmount);
            // window.location.reload();
            setDai(ethValue);
            console.log("DAI balance:", ethValue);
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <SwapTokenContext.Provider
            value={{
                singleSwapToken,
                connectWallet,
                account,
                weth9,
                dai,
                networkConnect,
                ether,
                tokenData,
            }}
        >
            {children}
        </SwapTokenContext.Provider>
    );
};