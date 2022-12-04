import React, { useState, useEffect } from "react";
import Image from "next/image";

//IMPORT INTERNAL
import Style from "./Token.module.css";
import images from "../../assets";
import { Toggle } from "../index";

const Token = ({ setOpenSetting }) => {
  return (
    <div className={Style.Token}>
      <div className={Style.Token_box}>
        <div className={Style.Token_box_heading}>
          <h4 style={{ fontSize: "19px" }}>Settings</h4>
          <img
            src={"https://www.citypng.com/public/uploads/preview/png-close-x-logo-white-icon-31631914840uc9joqwssz.png"}
            alt="close"
            width={50}
            style={{ cursor: "pointer" }}
            height={50}
            onClick={() => setOpenSetting(false)}
          />
        </div>
        <p className={Style.Token_box_para}>
          Slippage Tolerance{""}
          <Image src={images.lock} alt="img" width={20} height={20} />
        </p>

        <div className={Style.Token_box_input}>
          <button>Auto</button>
          <input type="text" placeholder="0.10%" />
        </div>

        <p className={Style.Token_box_para}>
          Slippage tolerance{""}
          <Image src={images.lock} alt="img" width={20} height={20} />
        </p>

        <div className={Style.Token_box_input}>
          <input type="text" placeholder="30" />
          <button>Minutes</button>
        </div>

        <h2 style={{ marginTop: "40px" }}>Interface Settings</h2>

        <div className={Style.Token_box_toggle}>
          <p className={Style.Token_box_para}>Transaction deadline</p>
          <Toggle label="No" />
        </div>
      </div>
    </div>
  );
};

export default Token;
