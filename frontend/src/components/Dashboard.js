import React from 'react'
import styled from 'styled-components'
import Cards from './Cards'
import Leaves from './Leaves'
import green from '../images/radial-green.png'
import purple from '../images/radial-purple.png'
import violet from '../images/radial-violet.png'
import orange from '../images/radial-orange.png'
import yellow from '../images/radial-yellow.png'
import Header from './Header'


const Container = styled.div`
    background-color: #f0f2f9;
    height: 100vh;
    width: 1500px;
    padding: 50px 100px 100px 100px;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Dashboard = () => {
      /**render or return different container per different navigation */
    return (
      
        <Container>
            <Wrapper>
            <Header title="Dashboard" user="Admin"/>
            <CardContainer>
                <Cards title="Total Employees" data="10,000" color={violet}/>
                <Cards title="Total Departments" data="15" color={yellow}/>
                <Cards title="New Password Reset" data="4" color={green}/>
            </CardContainer>
            <CardContainer>
                <Leaves title="New Leave Application" data="5" color={orange}/>
            </CardContainer>
            </Wrapper>
        </Container>
        
    )
}

export default Dashboard