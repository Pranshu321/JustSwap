import React, { useState, useEffect } from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./Model.module.css";
import images from "../../assets";

const Model = ({ setOpenModel, connectWallet }) => {
  //USESTATE
  const walletMenu = ["MetaMask", "Coinbase", "Wallet", "WalletConnet"];
  return (
    <div className={Style.Model}>
      <div className={Style.Model_box}>
        <div className={Style.Model_box_heading}>
          <p>Connect a wallet</p>
          <div className={Style.Model_box_heading_img}>
            <img
              src={"https://www.citypng.com/public/uploads/preview/png-close-x-logo-white-icon-31631914840uc9joqwssz.png"}
              alt="logo"
              width={50}
              style={{ cursor: "pointer" }}
              height={50}
              onClick={() => setOpenModel(false)}
            />
          </div>
        </div>

        <div className={Style.Model_box_wallet}>
          {walletMenu.map((el, i) => (
            <p key={i + 1} onClick={() => connectWallet()}>
              {el}
            </p>
          ))}
        </div>

        <p className={Style.Model_box_para}>
          By connecting a wallet, you agree to JustSwap
          <br /> Terms of Service and consent to its Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default Model;
