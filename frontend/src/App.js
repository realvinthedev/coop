import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
function App() {
     return (
          <div className="App">
               <BrowserRouter>
               <div className='flex  h-screen border-4 border-black'>
               <div className=''>
                    <Routes>
                         <Route
                              path='/'
                              element={<Home/>}
                         />
                    </Routes>
               </div>
               </div>
               </BrowserRouter>
          </div>
     );
}

export default App;
