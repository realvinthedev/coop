import React from 'react'
import styled from 'styled-components'
import Dashboard from './Dashboard'
import Navbar from '../components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Department from './Departments'
import Employees from './Employees'
import Salaries from './Salaries'
import Leaves from './Leaves'
import Credentials from './Credentials'


/**Styled Components */
const Container = styled.div`
    background-color: #f0f2f9;
    height: 100vh;
    display: flex;
`

const Home = () => {
    return (
        <BrowserRouter>
            <Container>
                <Navbar></Navbar>
                <Routes>
                    <Route
                        path="/"
                        element={<Dashboard title="Dashboard" user="Kevin" />}
                    />
                    <Route
                        path="/departments"
                        element={<Department title="Department" user="Kevin" />}
                    />
                    <Route
                        path="/employees"
                        element={<Employees title="Employees" user="Kevin" />}
                    />
                    <Route
                        path="/salaries"
                        element={<Salaries title="Salaries" user="Kevin" />}
                    />
                    <Route
                        path="/leaves"
                        element={<Leaves title="Leaves" user="Kevin" />}
                    />
                    <Route
                        path="/credentials"
                        element={<Credentials title="Credentials" user="Kevin" />}
                    />
                </Routes>
            </Container>
        </BrowserRouter>
    )
}

export default Home