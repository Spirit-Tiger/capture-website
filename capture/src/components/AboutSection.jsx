import React from "react";
import home1 from "../img/home1.png";

const AboutSection = () => {
        return(
            <div>
                <div className="description">
                    <div className="title">
                        <div className="hide">
                            <h2>We work to make</h2>
                        </div>
                        <div className="hide">
                            <h2>your <span> dreams</span> come </h2>
                        </div>
                        <div className="hide">
                            <h2>true.</h2>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam possimus corporis itaque quas, perspiciatis, distinctio odio minus repellendus qui nisi voluptatum est ad enim? Harum eius sapiente fugit quae excepturi.
                    Nesciunt impedit earum doloremque quos libero illo assumenda repellat optio, ex voluptates consequuntur porro tempore repellendus inventore unde accusamus deleniti facilis atque soluta tenetur, dolore similique. Debitis totam alias temporibus.</p>
                    <button>Contact Us</button>
                </div>
                <img src={home1} alt="home1" />
            </div>
        )
}

export default AboutSection;