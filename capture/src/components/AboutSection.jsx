import React from "react";
import home1 from "../img/home1.png";

import { About, Description, Hide, Image } from "../styles";

const AboutSection = () => {
        return(
            <About>
                <Description>
                    <div className="title">
                        <Hide>
                            <h2>We work to make</h2>
                        </Hide>
                        <Hide className="hide">
                            <h2>your <span> dreams</span> come </h2>
                        </Hide>
                        <Hide className="hide">
                            <h2>true.</h2>
                        </Hide>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam possimus corporis itaque quas, perspiciatis, distinctio odio minus repellendus qui nisi voluptatum est ad enim? Harum eius sapiente fugit quae excepturi.
                    Nesciunt impedit earum doloremque quos libero illo assumenda repellat optio, ex voluptates consequuntur porro tempore repellendus inventore unde accusamus deleniti facilis atque soluta tenetur, dolore similique. Debitis totam alias temporibus.</p>
                    <button>Contact Us</button>
                </Description>
                <Image>
                 <img src={home1} alt="home1" />
                 </Image>
            </About>
        );
};



export default AboutSection;