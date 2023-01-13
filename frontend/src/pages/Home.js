import React from 'react'
import styled from 'styled-components'
import Dashboard from '../components/Dashboard'
import Navbar from '../components/Navbar'


/**Styled Components */
const Container = styled.div`
    background-color: #f0f2f9;
    height: 100vh;
    display: flex;
`

const Home = () => {
    return (
        <Container>
            <Navbar></Navbar>
            <Dashboard></Dashboard>
        </Container>
    )

}

export default Home