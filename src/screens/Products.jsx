import React from "react";
import styled from "styled-components";
import Heading from "../components/Heading";

const Products = () => {
    return <Container>
        <Head>
            <Heading/>
        </Head>

    </Container>;
};

export default Products;

const Container = styled.div`
   
`
const Head = styled.div`
    background-image: url("public/products-background.jpg");
    height: 100vh;
    width: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`