import React, { useState, useEffect } from "react";
import instagramLogo from "../assets/owner/instagram.png";
import twitterLogo from "../assets/owner/twitter.png";
import moreIcon from "../assets/owner/more.png";
import "./Main.css";

const Main = ({ selectedPunk, punkListData }) => {
  const [activePunk, setActivePunk] = useState(punkListData[0]);
  useEffect(() => {
    setActivePunk(punkListData[selectedPunk]);
  }, [punkListData, selectedPunk]);

  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkHighLight">
          <div className="punkContainer">
            <img className="selectedPunk" src={activePunk.image} alt="" />
          </div>
        </div>
        <div className="punkDetails" style={{ color: "white" }}>
          <div className="title">
            {activePunk.name}{" "}
            <span className="itemNumber">.#{activePunk.no}</span>
          </div>

          <div className="owner">
            <div className="ownerImageContainer">
              <img
                src="https://ttm.mypinata.cloud/ipfs/QmXXG5K3Lf8zSMqXpxfD59WoWjGJHbLeEXvyPQg4LRKKcR"
                alt=""
              />
            </div>
            <div className="ownerDetails">
              <div className="ownerNameAndHandle">
                <div>NYuAskreYpm4qE3uSbpqdmgkFNcfwmLktV</div>
                <div className="ownerHandle">@kunjongroup</div>
              </div>
              <div className="ownerLink">
                <img src={instagramLogo} alt="" />
              </div>
              <div className="ownerLink">
                <img src={twitterLogo} alt="" />
              </div>
              <div className="ownerLink">
                <img src={moreIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
