
import './App.css'

import { Header,Footer,Blog,Possibility,Features,WhatGPT } from './containers'
import {Brand,Cta,Navbar} from './components/index'

function App() {
  

  return (
   <div className='App'>
    <div className='gradient__bg'>
        <Navbar/>
        <Header/>
    </div>
    <Brand/>
    <WhatGPT/>
    <Features/>
    <Possibility/>
    <Cta/>
    <Blog/>
    <Footer/>
   </div>
  )
}

export default App
