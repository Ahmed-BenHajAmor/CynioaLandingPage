import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Button } from '../subComponents';

function NavBar() {
  return (
    <nav className='flex px-20 py-8 items-center justify-between'>
        <div id="logo"><img className='max-h-10' src="https://cynoia.com/img/logo-6@2x.png" alt="Cynoia" /></div>

        <div id="links" >
            <ul className='flex gap-x-6'>
                <li><OneLink hasSubLinks={false}>Home</OneLink></li>
                <li><OneLink hasSubLinks={true}>Home</OneLink></li>
                <li><OneLink hasSubLinks={false}>Home</OneLink></li>
                <li><OneLink hasSubLinks={true}>Home</OneLink></li>
                <li><OneLink hasSubLinks={true}>Home</OneLink></li>
            </ul>
            
        </div>

        <div id="buttons" className='flex gap-x-6'>
            <Button bgColor={"bg-white"} hasBorder={true} txtColor = {"text-primarypurple-5-main"} shadow={true}>Sign in</Button>
            <Button bgColor={"bg-primarypurple-5-main"} hasBorder={false} txtColor = {"text-white"} shadow={false}>Get started</Button>
        </div>
    </nav>
  )
}


const OneLink = ({children, hasSubLinks=false})=>{
    return (

        <a href='#'>
            {children}
            {hasSubLinks && <KeyboardArrowDownIcon />}
        </a>
    )
}

export default NavBar