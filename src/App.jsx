import Navbar from './components/Navbar'
import Main from './components/Main';
import styled from 'styled-components';
import './App.css'

function App() {

  return (
    <Outer>
      <Navbar/>
      <Main/>
    </Outer>
  )
}

export default App;

const Outer = styled.div`

  display: flex;
  height: 100vh;
  overflow: hidden;
  background-color: rgba(17,24,39,1);

`