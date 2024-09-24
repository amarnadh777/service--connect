import { useState } from 'react'

import './App.css'
import Inputcomponent from './ReusableComponents/InputComponent/Inputcomponent'
import { MdOutlineEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import Buttoncomponent from './ReusableComponents/Button/Buttoncomponent';
import { FaClock } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
function App() {

  const gi = () =>
  {
    console.log("hii...");
    
  }
  return (
    <> 
        

    <Inputcomponent width={"60%"} height={"4em"} content={"Email"}   backgroundColor={'#736A68'} icon={<MdOutlineEmail className='size-10 text-white'></MdOutlineEmail>}></Inputcomponent>
    <Inputcomponent width={"60%"} height={"4em"} content={"password"}    backgroundColor={'#736A68'} ispassword={true} icon={ <CiLock className='size-10 text-white'></CiLock>}></Inputcomponent>

   <Buttoncomponent width={"60%"} height={"4em"} name={"Login"} backgroundColor={"green"} onclickfn={gi} icon={<FaArrowRight className='relative size-10 text-white left-3/4 top-2 '></FaArrowRight>} ></Buttoncomponent>
   </>
  )
}

export default App
