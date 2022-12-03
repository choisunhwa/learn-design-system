import React from 'react';
import { Header } from './stories/Header';
import { Badge } from './Badge';
import { Button } from './stories/Button';
// import ReactDOM from 'react-dom';


function App() {
  const onLogin = () => { 
    console.log('click login')
  }

  const onLogout = () => { 
    console.log('click logout')
  }

  const PrimaryButton = {
    primary: true,
    label: 'button'
  }
  return (
    <div className="App">
      <Header user={{ name: 'suny' }} onLogin={ onLogin } onLogout={ onLogout }></Header>
      hellow, react!
      
      <div style={{ padding: '5px', border: '1px solid black', margin: '20px'}}>
        <Button {...PrimaryButton} ></Button>
      </div>
      
      <Badge status="positive">Positive</Badge>
    </div>
  );
}


export default App;