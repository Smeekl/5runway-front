import { useState } from 'react';
import { ReactComponent as Logo } from '@svgIcons/iconLogo.svg';
import './style.css';

export const Conditions = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="conditions">
      <div className="conditions__header">
        <span>
          <Logo />
        </span>
        <p className="condition__title">Terms and Conditions</p>
      </div>
      <div>
        <p className="condition__items">
          Generally, Terms & Conditions are not a legal requirement, though, in
          many instances its in your best interest to have one in place. This is
          because Terms & Conditions are necessary for governing the contractual
          relationship between you and your users. They are essential for
          protecting your content from a copyright perspective as well as
          protecting you from potential liabilities.
        </p>
        <p className="condition__items">
          Youll likely need a Terms & Conditions document if any of the
          following apply to you:
        </p>
        <p className="condition__items">
          1. You have different user levels (eg. registered vs non-registered);
        </p>
        <p className="condition__items">
          2. You want to set the rules for user behavior (including comments)
          and state grounds for termination of accounts;
        </p>
        <p className="condition__items">
          3. Your users are allowed to upload content;
        </p>

        <p className="condition__items">
          4. You participate in some kind of commerce, including affiliate
          programs;
        </p>
        <p className="condition__items">
          5. Youd like to protect your website/app and its content by stating
          how it can be used.
        </p>
      </div>
      <div className="condition__check">
        <label className="container">
          <input
            className="check-highload"
            type="checkbox"
            checked={isChecked}
            onChange={() => {
              setIsChecked(!isChecked);
            }}
          />
          <span className="highload2"></span>
        </label>

        <p
          className="condition__items check-cursor"
          onClick={() => {
            setIsChecked(!isChecked);
          }}
        >
          I have read this it and agree to the terms conditions
        </p>
      </div>
    </div>
  );
};
