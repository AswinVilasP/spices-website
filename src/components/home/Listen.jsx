import styled from "styled-components";
import Heading from "../Heading";
import ClientCard from "../ClientCard";
import { Clients } from "../../utils/clients";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";
import GreenButton from "../GreenButton";
export default function Listen() {
    const testRef = useRef();
    var settings = {
        infinite: false,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <Container>
            <div className="listenContainer">
                <div className="heading" data-Aos="fade-right">
                    <Heading
                        minititle="”Listen to"
                        title="What  our clients says”"
                        minititlecolor="#59BC76"
                        titlecolor="#FBF9FC"
                    />
                </div>
                <div className="listenContent" data-Aos="fade-right">
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Orci tristique
                        tellus semper donec suscipit. Condimentum donec semper
                        aliquam semper hac commodo tincidunt amet. Hendrerit.
                    </p>
                </div>
                <div className="listenArrow" data-Aos="fade-right">
                    <img src="/listen-Arrow.svg" alt="Arrow" />
                </div>
                <div className="right" data-Aos="fade-left">
                    <div className="slickContainer">
                        <Slider {...settings} ref={testRef}>
                            {Clients.map(
                                ({ image, name, location, message }, i) => {
                                    return (
                                        <div className="cardContainer" key={i}>
                                            <ClientCard
                                                image={image}
                                                name={name}
                                                location={location}
                                                message={message}
                                            />
                                        </div>
                                    );
                                }
                            )}
                        </Slider>
                    </div>
                    <div className="greenButton">
                        <div
                            className="leftButton"
                            onClick={(e) => testRef.current.slickPrev()}
                        >
                            <GreenButton text="←" />
                        </div>
                        <div
                            className="rightButton"
                            onClick={(e) => testRef.current.slickNext()}
                        >
                            <GreenButton text="→" />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}
const Container = styled.section`
    display: flex;
    justify-content: space-between;
    background-color: #eeeeee;
    padding: 7.5% 0;
    .listenContainer {
        padding-left: 8%;
        padding-top: 157px;
        padding-bottom: 95px;
        width: 100%;
        background-repeat: no-repeat;
        position: relative;
        background-image: url("/Listen-background.svg");
        @media all and (max-width: 980px) {
            position: unset;
            background-size: cover;
            padding-right: 8%;
            padding-top: 7%;
        }
        .heading {
            width: 36%;
            @media all and (max-width: 980px) {
                width: 100%;
            }
        }
        .listenContent {
            margin-top: 80px;
            width: 36%;
            @media all and (max-width: 1280px) {
                margin-top: 50px;
            }
            @media all and (max-width: 980px) {
                width: 100%;
            }
            @media all and (max-width:480px){
            margin-top: 30px;
}
            
            p {
                color: #eaf5ef;
                font-size: 20px;
                @media all and (max-width: 1280px) {
                    font-size: 18px;
                }
                @media all and (max-width: 640px) {
            font-size: 15px;
        }
        @media all and (max-width:480px){
           font-size: 14px;
}
            }
        }
        .listenArrow {
            margin-top: 90px;
            width: 105px;
            @media all and (max-width: 1280px) {
                margin-top: 50px;
            }
            @media all and (max-width: 768px) {
                margin-top: 30px;
                width: 60px;
            }
            @media all and (max-width:480px){
            width: 40px;
            margin-top: 15px;
}
            img {
                width: 100%;
            }
        }
        .right {
            width: 55%;
            position: absolute;
            @media all and (max-width: 980px) {
                position: unset;
                width: 100%;
                margin-top: 30px;
            }
            right: 0;
            top: 15%;
            .slickContainer {
                width: 100%;
                .cardContainer {
                    width: 80%;
                }
                .slick-track {
                    display: flex;
                }
            }
            .greenButton {
                display: flex;
                margin-top: 24px;
                width: 100%;
                gap: 16px;
            }
        }
    }
`;
