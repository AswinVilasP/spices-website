import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import GreenButton from "../components/GreenButton";

const SharedLayout = () => {
    return (
        <Container>
            <header className="wrapper">
                <nav>
                    <ul>
                        <li>
                            <Link to="">home</Link>
                        </li>
                        <li>
                            <Link to="products">products</Link>
                        </li>
                        <li>
                            <Link to="contact">contact us</Link>
                        </li>
                    </ul>
                    <div className="right">
                        <div className="headerLogo">
                            <img src="high-range-logo.svg" alt="Header Logo" />
                        </div>
                        <span className="headerButton">
                            <GreenButton text="Contact Us" hover={false} />
                        </span>
                    </div>
                </nav>
            </header>
            <Outlet />
        </Container>
    );
};

export default SharedLayout;

const Container = styled.div`
    header {
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        z-index: 100;

        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 8px 0;

            ul {
                display: flex;
                gap: 48px;
                text-transform: capitalize;
                @media all and (max-width: 980px) {
                    gap: 30px;
                }
                @media all and (max-width: 768px) {
                    display: none;
                }
                li {
                    a {
                        font-family: "DMSansregular";
                        color: #d4d4d4;
                        @media all and (max-width: 980px) {
                            font-size: 15px;
                        }
                    }
                }
            }
            .right {
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 52%;
                font-family: "DMSansmedium";
                @media all and (max-width: 768px) {
                    width: 100%;
                }
                .headerButton {
                    @media all and (max-width: 768px) {
                    display: none;
                }   
                }
                .headerLogo {
                    width: 50px;
                    display: flex;
                    align-items: center;
                    img {
                        width: 100%;
                    }
                    @media all and (max-width: 640px) {
                        width: 40px;
                    }
                    @media all and (max-width: 480px) {
                        width: 35px;
                    }
                }
                .contactUs {
                    color: #d4d4d4;
                }
            }
        }
    }
`;
