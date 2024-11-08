"use client";
import 'tailwindcss/tailwind.css';
import LogoIMG from "../public/logo.png"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'

const MyForm = () => {
    const [frontName, setFrontName] = useState('');
    const [familyName, setFamilyName] = useState('');
    const [dob, setDob] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        switch (name) {
            case 'frontName':
                setFrontName(value);
                break;
            case 'familyName':
                setFamilyName(value);
                break;
            case 'dob':
                setDob(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'phoneNumber':
                setPhoneNumber(value);
                break;
            case 'password':
                setPassword(value);
                break;
            case 'username':
                setUsername(value);
                break;
            default:
                break;
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevent the default form submission
        // Here you can handle the form submission, e.g., send data to an API
        console.log('Front Name:', frontName);
        console.log('Family Name:', familyName);
        console.log('Date of Birth:', dob);
        console.log('Email:', email);
        console.log('Phone Number:', phoneNumber);
        console.log('Password:', password);
        // Reset the form fields if needed
        setFrontName('');
        setFamilyName('');
        setDob('');
        setEmail('');
        setUsername('');
        setPhoneNumber('');
        setPassword('');
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 placeholder-Primary">
           <div className='flex flex-row gap-3'>
                <input
                type="text"
                name="frontName"
                value={frontName}
                onChange={handleInputChange}
                placeholder="Front Name"
                className="input input-bordered bg-Green text-Tertiary placeholder-Primary"
                 />
                <input
                type="text"
                name="familyName"
                value={familyName}
                onChange={handleInputChange}
                placeholder="Family Name"
                className="input input-bordered bg-Green text-Tertiary placeholder-Primary"
                />

           </div>
           <input
                type="text"
                name="username"
                value={username}
                onChange={handleInputChange}
                placeholder="Username"
                className="input input-bordered bg-Green text-Tertiary placeholder-Primary"
            />
           
            <input
                type="date"
                name="dob"
                value={dob}
                onChange={handleInputChange}
                className="input input-bordered bg-Green text-Tertiary placeholder-Primary"
            />
            <input
                type="email"
                name="email"
                value={email}
                onChange={handleInputChange}
                placeholder="Email"
                className="input input-bordered bg-Green text-Tertiary placeholder-Primary"
            />
            <input
                type="tel"
                name="phoneNumber"
                value={phoneNumber}
                onChange={handleInputChange}
                placeholder="Phone Number (+60)"
                className="input input-bordered bg-Green text-Tertiary placeholder-Primary"
            />
            <label className="input input-bordered bg-Green text-Tertiary flex items-center gap-2 placeholder-Primary">
                <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                    placeholder="Password"
                    className="grow placeholder-Primary"
                />
                <button type="button" onClick={togglePasswordVisibility} className="text-Tertiary">
                    {showPassword ? <img src="https://img.icons8.com/?size=100&id=60022&format=png&color=000000" alt="eye off" className="w-6 h-6"/> : <img alt="eye on" src="https://img.icons8.com/?size=100&id=59814&format=png&color=000000" className="w-6 h-6" />}
                </button>
            </label>
            <button type="submit" className="mx-auto btn bg-Green text-Tertiary flex w-40">
                Register
            </button>
        </form>
    );
};

export default function Page() {

    const router = useRouter()
    return (
        <div className="bg-Green w-screen h-dvh flex items-center justify-center">
<div id="cardBg" className="flex flex-col items-center gap-2.5 w-1/2 bg-Cream rounded-[20px]">
        <div className="inline-flex flex-col items-center gap-[20px] px-0 py-5 flex-[0_0_auto]">
          <div className="inline-flex flex-col items-center flex-[0_0_auto]">
            <div className="inline-flex flex-col items-center gap-[70px] flex-[0_0_auto]">
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
  
                <div className="flex items-center justify-center gap-2.5 my-5 px-0 py-[27px] relative flex-[0_0_auto] mb-[-65.00px]" >
                  <div className="btn btn-ghost relative flex-1 mt-8 [font-family:'Noto_Sans-Medium',Helvetica] font-medium text-[#344e41] text-xl text-center tracking-[0] leading-[normal]" onClick={() => router.push('/register')}>
                    {" "}
                    Registering as {" "}
                    <span className="underline">Company / Organization</span>
                    
                  </div>
                </div>
              </div>
                <div className='mt-12'>
                <MyForm />
                </div>
              

            </div>
  
            <div id="registerText" className="btn btn-ghost relative w-[346px] h-max [font-family:'Noto_Sans-Medium',Helvetica] font-medium text-Green text-xl text-center tracking-[0] leading-[normal] whitespace-nowrap mt-20" onClick={() => router.push('/login')}>
        <span className="[font-family:'Noto_Sans-Medium',Helvetica] font-medium text-black text-xl tracking-[0]">
            Already got an account?{" "}
        </span>
        <span className="underline">Login</span>
    </div>
          </div>
        </div>
      </div>
        </div>
    )
  };