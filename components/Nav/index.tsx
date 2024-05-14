"use client"
import Link from 'next/link';
import React from 'react'
import { usePathname } from 'next/navigation';
import {motion} from "framer-motion"

const links = [
    {path:'/', name:"home"},
    {path:'/projects', name:"my projects"},
    {path:'/contact', name:"contact"},
]
interface linkType {
    path:string,
    name:string
}
type Props ={
    containerStyles?:string|string[], 
    linkStyles?:string|string[],
    undrlineStyles?:string|string[]
}
const Nav = ({containerStyles, linkStyles, undrlineStyles}:Props) => {
    const containerStylesClass = Array.isArray(containerStyles)?containerStyles?.join(" "):containerStyles;
    const path = usePathname()
    return (
        <nav className={`${containerStyles}`}>
            {links.map((mylink:linkType, index)=>(
                <Link href={mylink.path} key={index} className={`capitalize ${linkStyles}`}>
                    {mylink.path === path &&(
                        <motion.span 
                            initial={{y:"-100%"}}
                            animate={{y:0}} 
                            transition={{type:"tween"}}
                            layoutId='underline'
                            className={`${undrlineStyles}`}
                        />
                    )}
                    {mylink.name}
                </Link>
            ))}
        </nav>
    )
}

export default Nav