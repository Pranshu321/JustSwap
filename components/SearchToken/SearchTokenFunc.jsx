import React, { useState } from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./SearchToken.module.css";
import images from "../../assets";

const SearchToken = ({ openToken, tokens, tokenData }) => {
  //USESTATE
  const [active, setActive] = useState(1);

  const coin = [
    {
      img: "https://cdn.coinranking.com/rk4RKHOuW/eth.svg",
      name: "ETH",
    },
    {
      img: "https://cdn.coinranking.com/mAZ_7LwOE/mutli-collateral-dai.svg",
      name: "DAI",
    },
    {
      img: "https://cdn.coinranking.com/H1arXIuOZ/doge.svg",
      name: "DOGE",
    },
    {
      img: "https://cdn.coinranking.com/4bpYKqV4X/AAVE.png",
      name: "AAVE",
    },
    {
      img: "https://cdn.coinranking.com/xcZdYtX6E/okx.png",
      name: "OKB",
    },
    {
      img: "https://cdn.coinranking.com/1heSvUgtl/uniswap-v2.svg?size=48x48",
      name: "UNI",
    },
    {
      img: "	https://cdn.coinranking.com/behejNqQs/trx.svg",
      name: "TRON",
    },
    {
      img: "	https://cdn.coinranking.com/B1oPuTyfX/xrp.svg",
      name: "XRP",
    },
    {
      img: "https://cdn.coinranking.com/HJzHboruM/atom.svg",
      name: "ATOM",
    },
    {
      img: "https://cdn.coinranking.com/xh8X8QBss/flow.png",
      name: "FLOW",
    },
  ];
  return (
    <div className={Style.SearchToken}>
      <div className={Style.SearchToken_box}>
        <div className={Style.SearchToken_box_heading}>
          <h4>Select a token</h4>
          <Image
            src={images.close}
            alt="close"
            width={50}
            height={50}
            onClick={() => openToken(false)}
          />
        </div>

        <div className={Style.SearchToken_box_search}>
          <div className={Style.SearchToken_box_search_img}>
            <Image src={images.search} alt="img" width={20} height={20} />
          </div>
          <input type="text" placeholder="Search name and past the address" />
        </div>

        <div className={Style.SearchToken_box_tokens}>
          {coin.map((el, i) => (
            <span
              key={i + 1}
              className={active == i + 1 ? `${Style.active}` : ""}
              onClick={() => (
                setActive(i + 1), tokens({ name: el.name, image: el.img })
              )}
            >
              <img
                src={el.img || images.ether}
                alt="image"
                width={25}
                height={25}
              />
              {el.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchToken;
