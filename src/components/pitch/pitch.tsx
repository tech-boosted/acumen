import React, { useEffect, useMemo, useState } from "react";
import "./pitch.css";
import { Images } from "../../assets/images";

export const Pitch: React.FC<{
  open: boolean;
  onClose: () => void;
}> = ({ open, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const onSubmit = () => {
    setLoading(true);
    fetch("https://hm38q32x8d.execute-api.us-east-2.amazonaws.com/dev/save", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    })?.then((res) => {
      setLoading(false);
      console.log(res);
      setSubmitted(true);
    });
  };

  const disabled = useMemo(() => {
    return (
      validateEmail(email) === null ||
      name?.length === 0 ||
      email?.length === 0 ||
      loading
    );
  }, [name, email, loading]);

  return (
    <div className={`pitch-deck-root ${open ? "pitch-deck-show" : ""}`}>
      <div className="pitch-deck">
        <div
          className="pitch-close-box"
          onClick={() => {
            setSubmitted(false);
            setName("");
            setEmail("");
            onClose();
          }}
        >
          <div className="pitch-close">
            <span className="pitch-close-arc-1"></span>
            <span className="pitch-close-arc-2"></span>
          </div>
        </div>
        <div className="pitch-deck-body">
          <span className="pitch-heading app-text-dm-bold">
            Download Pitch Deck
          </span>
          <span className="pitch-subheading app-text-dm-regular">
            What's included
          </span>
          <div className="pitch-list">
            <ul className=" app-text-dm-regular">
              <li>Introduction</li>
              <li>What we do</li>
              <li>Founder Market Fit</li>
              <li>Company Statements</li>
              <li>Culture and values</li>
              <li>Key Insights</li>
              <li>Problem Statement</li>
              <li>Our Solution</li>
              <li>E commerce Landscape</li>
              <li>Industry trends</li>
              <li>Market Opportunity</li>
              <li>TAM Analysis 2025</li>
            </ul>
            <ul className=" app-text-dm-regular">
              <li>TAM Analysis 2030</li>
              <li>Opportunity Capturing</li>
              <li>Market Behaviour</li>
              <li>Consumer Behaviour</li>
              <li>Competitive Landscape</li>
              <li>Competitive Advantage</li>
              <li>Business Model</li>
              <li>Acumen's USP</li>
              <li>Our Portfolio</li>
              <li>Funding Requirement</li>
              <li>Why Invest</li>
              <li>Contact Information</li>
            </ul>
          </div>
          <div className="pitch-divider" />
          {submitted ? (
            <div className="pitch-submit">
              <img src={Images.Check} className="pitch-check" />
              <span className="pitch-check-text app-text-dm-semibold">
                We'll reach out to you in 24 hrs.
              </span>
            </div>
          ) : (
            <div className="pitch-form">
              <input
                className="pitch-input app-text-dm-regular"
                type="text"
                name="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e?.target?.value)}
              />
              <input
                className="pitch-input app-text-dm-regular"
                type="text"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e?.target?.value)}
              />
              <div
                className={`pitch-btn app-text-dm-regular ${
                  disabled ? "pitch-btn-disabled" : ""
                }`}
                onClick={disabled ? () => null : onSubmit}
              >
                {loading ? <div className="spinner"></div> : "Download"}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
