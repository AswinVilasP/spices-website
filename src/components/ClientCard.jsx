import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function ClientCard({ image, name, message, location }) {
    // const carousel = useRef()
    return (
        <Container>
            <div className="clientImage">
                <img src={image} alt={name} />
            </div>
            <div className="details">
                <div className="message">
                    <p>{message}</p>
                </div>
                <div className="name">
                    <p>{name}</p>
                </div>
                <div className="location">
                    <div className="locationIcon">
                        <img src="/locationicon.svg" alt="Location icon" />
                    </div>
                    <p>{location}</p>
                </div>
            </div>
        </Container>
    );
}
const Container = styled.div`
    margin-right: 16px;
    @media all and (max-width: 640px) {
        margin: 0 8px 0 8px;
    }
    .clientImage {
        display: flex;
        align-items: center;

        img {
            width: 100%;
            border-radius: 2px 2px 0 0;
        }
    }
    .details {
        padding: 32px 18px 24px 18px;
        background: #fff;
        border-radius: 0 0 2px 2px;
        position: relative;
        @media all and (max-width: 1280px) {
            padding: 15px;
            line-height: normal;
        }
        @media all and (max-width:480px){
            padding-top: 25px;
}
        &::after {
            content: url("/quote.svg");
            position: absolute;
            top: 0;
            transform: translateY(-50%);
            @media all and (max-width: 1280px) {
                transform: translate(-10%, -50%) scale(0.7);
            }
        }
        .message {
            margin-bottom: 20px;
            @media all and (max-width: 1280px) {
                margin-bottom: 10px;
            }

            p {
                color: #786a83;
                font-size: 16px;
                @media all and (max-width: 1280px) {
                    font-size: 15px;
                }
                @media all and (max-width: 480px) {
                    font-size: 14px;
                }
            }
        }
        .name {
            margin-bottom: 6px;
            p {
                font-family: "DMSansmedium";
                @media all and (max-width:480px){
                font-size: 15px;
    }
            }
        }
        .location {
            display: flex;
            gap: 8px;
            align-items: center;
            @media all and (max-width:480px){
            gap: 5px;
}
            .locationIcon {
                display: flex;
                align-items: center;
                img {
                    width: 100%;
                }
                @media all and (max-width:480px){
            width: 15px;
}
            }
            p {
                color: #786a83;
                font-size: 18px;
                @media all and (max-width:480px){
            font-size: 14px;
}
            }
        }
    }
`;
