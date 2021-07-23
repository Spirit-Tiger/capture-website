import React from "react";

import { Faq } from "../styles";

import Toggle from "./Toggle";

import { AnimateSharedLayout } from "framer-motion";

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How Do I Start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              nesciunt!
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              nesciunt!
            </p>
          </div>
        </Toggle>
        <Toggle title="Different Payment Methods">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              nesciunt!
            </p>
          </div>
        </Toggle>
        <Toggle title="What Products do you offer.">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              nesciunt!
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

export default FaqSection;
