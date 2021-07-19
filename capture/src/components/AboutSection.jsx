import React from "react";
import home1 from "../img/home1.png";

import styled from "styled-components";

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

const About = styled.div`
    min-height:90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
`;

const Description = styled.div`
    flex: 1;
    padding-right: 5rem;
    h2{
        font-weight: lighter;
    }
`;

const Image = styled.div`
    flex: 1;
    overflow: hidden;
    img{
        width: 100%;
        height: 90vh;
        object-fit: cover;
    }
`;

const Hide = styled.div`
    overflow: hidden;
`;

export default AboutSection;