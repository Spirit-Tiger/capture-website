import React from "react";
import home1 from "../img/home1.png";

import { About, Description, Hide, Image } from "../styles";

import { motion } from "framer-motion";

import { fade, photoAnim, titleAnim } from "../animation";

import Wave from "./Wave";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span> dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim} >true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          possimus corporis itaque quas, perspiciatis, distinctio odio minus
          repellendus qui nisi voluptatum est ad enim? Harum eius sapiente fugit
          quae excepturi. Nesciunt impedit earum doloremque quos libero illo
          assumenda repellat optio, ex voluptates consequuntur porro tempore
          repellendus inventore unde accusamus deleniti facilis atque soluta
          tenetur, dolore similique. Debitis totam alias temporibus.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img  variants={photoAnim}  src={home1} alt="home1" />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
