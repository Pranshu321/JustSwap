import React, { useState, useContext } from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./Hero.module.css";
import images from "../../assets";
import { Token, SearchToken } from "../index";

//CONTEXT
// import { SwapTokenContext } from "../../Context/SwapContext";

const HeroSection = ({ tokenData }) => {
    //USESTATE
    const [openSetting, setOpenSetting] = useState(false);
    const [openToken, setOpenToken] = useState(false);
    const [openTokensTwo, setOpenTokensTwo] = useState(false);

    //   const { singleSwapToken, connectWallet, account, ether, dai } =
    //     useContext(SwapTokenContext);

    //TOKEN 1
    const [tokenOne, setTokenOne] = useState({
        name: "",
        image: "",
    });
    //TOKEN 2
    const [tokenTwo, setTokenTwo] = useState({
        name: "",
        image: "",
    });
    //JSX
    return (
        <div className={Style.HeroSection}>
            <div className={Style.HeroSection_box}>
                <div className={Style.HeroSection_box_heading}>
                    <p style={{ fontSize: "20px", fontWeight: "700" }}>Swap</p>
                    <div className={Style.HeroSection_box_heading_img}>
                        <Image
                            src={images.close}
                            alt="image"
                            width={50}
                            height={50}
                            style={{ cursor: "pointer" }}
                            onClick={() => setOpenSetting(true)}
                        />
                    </div>
                </div>

                <div className={Style.HeroSection_box_input}>
                    <input type="text" placeholder="0" />
                    <button onClick={() => setOpenToken(true)}>
                        <Image
                            src={images.image || images.etherlogo}
                            width={20}
                            height={20}
                            alt="ether"
                        />
                        {tokenOne.name || "ETH"}
                        <small>{"Ether"}</small>
                    </button>
                </div>

                <div className={Style.HeroSection_box_input}>
                    <input type="text" placeholder="0" />
                    <button onClick={() => setOpenTokensTwo(true)}>
                        <Image
                            src={tokenTwo.image || images.etherlogo}
                            width={20}
                            height={20}
                            alt="ether"
                        />
                        {tokenTwo.name || "ETH"}
                        <small>{"Dai"}</small>
                    </button>
                </div>

                {true ? (
                    <button
                        className={Style.HeroSection_box_btn}
                        onClick={() => singleSwapToken()}
                    >
                        Swap
                    </button>
                ) : (
                    <button
                        onClick={() => connectWallet()}
                        className={Style.HeroSection_box_btn}
                    >
                        Connect Wallet
                    </button>
                )}
            </div>

            {openSetting && <Token setOpenSetting={setOpenSetting} />}

            {openToken && (
                <SearchToken
                    openToken={setOpenToken}
                    tokens={setTokenOne}
                    tokenData={tokenData}
                />
            )}
            {openTokensTwo && (
                <SearchToken
                    openToken={setOpenTokensTwo}
                    tokens={setTokenTwo}
                    tokenData={tokenData}
                />
            )}
        </div>
    );
};

export default HeroSection;