"use client";

import LogoIMG from "../public/logo.png"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'

const MyForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevent the default form submission
        // Here you can handle the form submission, e.g., send data to an API
        console.log('Username:', username);
        console.log('Password:', password);
        // Reset the form fields if needed
        setUsername('');
        setPassword('');
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label className="input input-bordered bg-Green text-Tertiary flex items-center gap-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input
                    type="text"
                    className="grow placeholder-Primary"
                    value={username}
                    onChange={handleUsernameChange}
                    placeholder="Username"
                />
            </label>

            <label className="input input-bordered bg-Green text-Tertiary flex items-center gap-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70 ">
                    <path
                        fillRule="evenodd"
                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                        clipRule="evenodd" />
                </svg>
                <input
                    type={showPassword ? 'text' : 'password'}
                    className="grow placeholder-Primary"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Enter your password"
                />
                <button type="button" onClick={togglePasswordVisibility} className="text-Tertiary">
                    {showPassword ? <img src="https://img.icons8.com/?size=100&id=60022&format=png&color=000000" className="w-6 h-6"/> : <img src="https://img.icons8.com/?size=100&id=59814&format=png&color=000000" className="w-6 h-6" />}
                </button>
            </label>

            <button type="submit" className="btn bg-Green text-Tertiary flex">
                Login
            </button>
        </form>
    );
};

export default function Page() {

    const router = useRouter()
    return (
        <div className="bg-Green w-screen h-screen flex items-center justify-center">
<div id="cardBg" className="flex flex-col w- h-3/4 items-center gap-2.5 px-[83px] py-[42px] relative bg-Cream rounded-[20px] justify-between">
        <div className="inline-flex flex-col items-center gap-[20px] px-0 py-5 relative flex-[0_0_auto] mb-[-180.00px]">
          <div className="inline-flex flex-col items-center relative flex-[0_0_auto]">
            <div className="inline-flex flex-col items-center gap-[70px] relative flex-[0_0_auto]">
              <div className="inline-flex flex-col h-[249px] items-center gap-px relative">
                <img
                  className="relative w-[152px] h-[152px] object-cover"
                  alt="Screenshot"
                  src={LogoIMG.src}
                />
  
                <p className="relative w-[328px] [font-family:'Noto_Sans-Medium',Helvetica] font-normal text-[#344e41] text-[32px] text-center tracking-[0] leading-[normal]">
                  <span className="font-medium">Welcome to </span>
  
                  <span className="[font-family:'Noto_Sans-Bold',Helvetica] font-bold">
                    NOW²
                  </span>
  
                  <span className="font-medium">!</span>
                </p>
  
                <div className="relative w-fit [font-family:'Noto_Sans-Medium',Helvetica] font-medium text-[#344e41] text-[25px] text-center tracking-[0] leading-[normal]">
                  Be Wiser Be Greener
                </div>
  
                <div className="flex w-[148px] items-center justify-center gap-2.5 px-0 py-[27px] relative flex-[0_0_auto] mb-[-65.00px]">
                  <div className="relative flex-1 mt-8 [font-family:'Noto_Sans-Medium',Helvetica] font-medium text-[#344e41] text-xl text-center tracking-[0] leading-[normal]">
                    {" "}
                    Sign-in as User
                  </div>
                </div>
              </div>
  
            <MyForm />

            </div>
  
            <div id="registerText" className="btn btn-ghost relative w-[346px] h-[21px] [font-family:'Noto_Sans-Medium',Helvetica] font-medium text-Green text-xl text-center tracking-[0] leading-[normal] whitespace-nowrap m-20" onClick={() => router.push('/register')}>
        <span className="[font-family:'Noto_Sans-Medium',Helvetica] font-medium text-black text-xl tracking-[0]">
            Haven’t got an account?{" "}
        </span>
        <span className="underline">Register</span>
    </div>
          </div>
        </div>
      </div>
        </div>
    )
  };