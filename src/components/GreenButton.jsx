import styled, { css } from "styled-components";

export default function GreenButton({ text, arrow, hover= true }) {
    return (
        <Container arrow={arrow} hover={hover}>
            <button>
                <p>{text}</p>
                <div className="arrow">
                    <img src="Arrow.svg" alt="Arrow image" />
                </div>
            </button>
        </Container>
    );
}

const Container = styled.div`
    button {
        padding: 10px 32px;
        background-color: #59bc76;
        display: flex;
        align-items: center;
        border-radius: 2px;
        border: 1px solid #59bc76;
        gap: 8px;
        cursor: pointer;
        transition: 0.25s;
        @media all and (max-width: 768px) {
                padding: 8px 18px;
            }
            @media all and (max-width:480px){
                padding: 6px 15px;
}
        p {
            color: #eeeeee;
            font-family: 'DMSansmedium';
        }
        .arrow {
            display: ${(props) => (props.arrow ? props.arrow : "none")};
            align-items: center;
            width: 20px;
            @media all and (max-width:480px){
                width: 15px;
}
            img {
                width: 100%;
            }
        }
        ${(props) =>
            props.hover ? 
            css`
                &:hover {
                    background-color: #47ac65;
                    border: 1px solid #47ac65;
                    box-shadow: 3px 3px #e3a65d;
                } 
            `: css`
                &:hover {
                    background-color: #47ac65;
                    border: 1px solid #47ac65;
                } 
            ` }
    }
`;
