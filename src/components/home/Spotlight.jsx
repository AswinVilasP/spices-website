import React from "react";
import styled from "styled-components";
import Heading from "../Heading";
import LeafText from "../LeafText";
import GreenButton from "../GreenButton";
import "aos/dist/aos.css"

const Spotlight = () => {
    return (
        <Background>
            <Wrapper className="wrapper">
                <div className="left" data-Aos="fade-right">
                    <div className="headingContainer">
                        <Heading
                            minititle="Choose quality choose us..."
                            title="Highrange Valley Tea & Spices"
                            titlefontfamily="DMSanslight"
                            titlefontsize="68px"
                            titlecolor="#EEE"
                            minititlecolor="#59BC76"
                            // gap="48px"
                        />
                    </div>
                    <div className="spoonContainer">
                        <span className="spoonLine"></span>
                        <span className="spoonFrame">
                            <img src="spoon.png" alt="" />
                        </span>
                    </div>
                    <div className="spolightContent">
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Et aliquet
                            semper at elementum vitae sollicitudin ut ut. Donec
                            amet metus luctus neque viverra risus praesent. Nibh
                            nec adipiscing sit quis risus faucibus. At sed
                            scelerisque at justo urnam.
                        </p>
                    </div>
                    <div className="leafContainer">
                        <LeafText text="Whole Sale" textcolor="#EEE" />
                        <LeafText text="Retail" textcolor="#EEE" />
                    </div>
                    <GreenButton text="Explore" arrow="flex" />
                </div>
                <div className="right" data-Aos="fade-left">
                    <div className="spotlightImage">
                        <img src="spotlight-image.svg" alt="Spotlight Image" />
                    </div>
                </div>
            </Wrapper>
        </Background>
    );
};

export default Spotlight;

const Background = styled.section`
    background-image: url("spotlight-background.png");
    background-size: cover;
    background-position: center;
    position: relative;
    /* height: 100vh; */
    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        right: 0;
        height: 150px;
        width: 200px;
        background-image: url("Whole-Cardamom.svg");
        background-size: 100%;
        background-repeat: no-repeat;
        transform: translateY(40%);
        z-index: 2;
        @media all and (max-width: 980px) {
            height: 113px;
            width: 150px;
        }
        @media all and (max-width: 640px) {
            height: 71px;
            width: 92px;
        }
        @media all and (max-width:480px){
            height: 50px;
            width: 65px;
}
    }
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-bottom: 9%;
    padding-top: 9%;
    @media all and (max-width: 768px) {
        justify-content: center;
        padding-top: 15%;
    }
    @media all and (max-width:480px){
        padding-top: 20%;
}
    .left {
        width: 50%;
        @media all and (max-width: 768px) {
            width: 100%;
        }
        .headingContainer {
            width: 90%;
            @media all and (max-width: 980px) {
                width: 100%;
            }
        }
        .spoonContainer {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-top: 18px;
            margin-bottom: 32px;
            @media all and (max-width:480px){
                margin-top: 14px;
                margin-bottom: 18px;
}

            .spoonLine {
                display: flex;
                justify-content: center;
                width: 37px;
                height: 1px;
                background-color: #fff;
                @media all and (max-width: 980px) {
                    display: none;
                }
            }
            .spoonFrame {
                display: flex;
                align-items: center;
                @media all and (max-width: 768px) {
                    width: 60px;
                }
                img {
                    width: 100%;
                }
            }
        }
        .spolightContent {
            margin-bottom: 32px;
            @media all and (max-width: 640px) {
                margin-bottom: 24px;
            }
            @media all and (max-width:480px){
                margin-bottom: 20px;
}
            p {
                font-size: 20px;
                color: #d4d4d4;
                font-family: "DMSansregular";
                line-height: 32px;
                @media all and (max-width: 1280px) {
                    line-height: 27px;
                    font-size: 18px;
                }
                @media all and (max-width: 980px) {
                    line-height: normal;
                    font-size: 17px;
                }
                @media all and (max-width: 640px) {
                    font-size: 15px;
                }
                @media all and (max-width:480px){
                    font-size: 14px;
                }
            }
        }
        .leafContainer {
            display: flex;
            gap: 32px;
            margin-bottom: 80px;
            @media all and (max-width: 1280px) {
                gap: 25px;
                @media all and (max-width: 980px) {
                    margin-bottom: 50px;
                }
            }
            @media all and (max-width: 768px) {
                margin-bottom: 35px;
            }
            @media all and (max-width: 640px) {
                margin-bottom: 25px;
            }
        }
    }
    .right {
        width: 35%;
        display: flex;
        align-items: center;
        @media all and (max-width: 980px) {
            width: 40%;
        }
        @media all and (max-width: 768px) {
            width: 50%;
            margin-top: 30px;
        }
        .spotlightImage {
            display: flex;
            align-items: center;
            img {
                width: 100%;
            }
        }
    }
`;
