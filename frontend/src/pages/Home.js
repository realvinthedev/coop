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

           { /**MAKE A CONDITIONAL FUNCTION HERE WHAT TO RENDER. FOR EXAMPLE I RENDER HERE THE DASHBOARD */}
            <Dashboard></Dashboard>
        </Container>
    )

}

export default Home