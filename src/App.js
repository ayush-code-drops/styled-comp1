import { useState } from 'react';
import styled, { css } from 'styled-components'
import './App.css';

function App() {

  const Button = styled.button`
  color:${props=>props.color==='white'?'white':props.color=='blue'?'blue':'black'};
  background:${props=>props.primary?'#2591FF':'transparent'};
  padding:10px 19px;
  border-radius:7px;
  
  
  margin:0px 5px;
  font-size:15px;
  border:${props=>props.border=='dashed'?'2px dashed black':'solid'?'1px solid black':'none'};
  `


  
return (
    <div className="App">
      <h3>Styled Components</h3>
<Button primary color='white'>Primary Button</Button>
<Button border='solid'>Default Button</Button>
<Button border='dashed'>Text Button</Button>
<Button border='solid'>Text Button</Button>
<Button color='blue'>Link Button</Button>
    </div>
  );
}

export default App;
