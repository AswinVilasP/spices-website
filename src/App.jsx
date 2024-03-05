import styled from "styled-components";
import MainRouter from "./routing/router/MainRouter";
import Home from "./screens/Home";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css"

function App() {
    useEffect(()=>{
        Aos.init()
    },[])

    
    return (
       <MainRouter/>
    );
}

export default App;

const Container = styled.div`
    background-color: aqua;
    margin: 0 auto;
    width: 90%;
`;
