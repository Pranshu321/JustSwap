import React from "react";
import Image from "next/image";
import {IoMdWallet} from "react-icons/io"
//INTERNAL IMPORT
import Style from "./PoolConnect.module.css";
import images from "../../assets";

const PoolConnect = () => {
  return (
    <div className={Style.PoolConnect}>
      <div className={Style.PoolConnect_box}>
        <div className={Style.PoolConnect_box_header}>
          <h2>Pool</h2>
          <p>+ New Position</p>
        </div>

        <div className={Style.PoolConnect_box_Middle}>
          <IoMdWallet size={40} color="#6B6DFF" />
          <p>Your active V3 liquidity positions will appear here.</p>
          <button>Connect Wallet</button>
        </div>

        <div className={Style.PoolConnect_box_info}>
          <div className={Style.PoolConnect_box_info_left}>
            <h5>Learn about providing liquidity</h5>
            <p>Check out our v3 LP walkthrough and migrate guide</p>
          </div>
          <div className={Style.PoolConnect_box_info_right}>
            <h5>Top pools</h5>
            <p>Explore JustSwap Analytics</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoolConnect;
