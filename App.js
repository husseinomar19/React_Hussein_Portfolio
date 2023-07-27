import './App.css';
import React from 'react';
import Header from './compnenten/nav';
import Span from './compnenten/span';
import Intro from './compnenten/intro';
import About from './compnenten/about';
// import Skills from './compnenten/skills'
function App() {
  return (
    <main className='main'>
    <Header />
    <Intro />
    <Span />
    <About />
    {/* <Skills /> */}
    </main>
  );
}

export default App;
