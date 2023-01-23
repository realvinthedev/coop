import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'


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

const Salaries = (props) => {
     /**render or return different container per different navigation */
     return (

          <Container>
               <Wrapper>
                    <Header title={props.title} user={props.user} />
               </Wrapper>
          </Container>

     )
}

export default Salaries