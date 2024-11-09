import 'tailwindcss/tailwind.css';
import LogoIMG from "../../public/logo.png"
//import React, { useState } from 'react';
//import { useRouter } from 'next/navigation'

export default function Page() {

    //const router = useRouter()
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <img
            src={LogoIMG.src}>

            </img>
        </div>
    )
};