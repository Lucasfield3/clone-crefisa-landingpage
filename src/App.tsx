import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MatchProvider } from './context/Match'
import { Home } from './pages/Home'
import './styles/global.scss'


function App() {

  return (
      <MatchProvider>
        <Router>
            <Routes>
              <Route path="/" element={<Home/>}></Route>
            </Routes>
        </Router>
      </MatchProvider>
  )
}

export default App
