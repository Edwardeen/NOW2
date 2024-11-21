"use client";
import 'tailwindcss/tailwind.css';
import LogoIMG from "../public/logo.png";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react'; // Import signIn from next-auth

const MyForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null); // State for error messages
  const router = useRouter();

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    try {
      const result = await signIn('credentials', {
        redirect: false,
        username,
        password,
      });
  
      if (result?.error) {
        throw new Error(result.error);
      }
  
      // Redirect based on user type (stored in token)
      const response = await fetch('/api/auth/session');
      const session = await response.json();
  
      
      setUsername('');
      setPassword('');

      router.push('/User/home');
    } catch (error: any) {
      setError(error.message);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {error && <p className="text-red-500">{error}</p>} {/* Display error message */}
      <label className="input input-bordered bg-Green text-Tertiary flex items-center gap-2">
        <input
          type="text"
          className="grow placeholder-Primary"
          value={username}
          onChange={handleUsernameChange}
          placeholder="Username"
          required
        />
      </label>

      <label className="input input-bordered bg-Green text-Tertiary flex items-center gap-2">
        <input
          type={showPassword ? 'text' : 'password'}
          className="grow placeholder-Primary"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter your password"
          required
        />
        <button type="button" onClick={togglePasswordVisibility} className="text-Tertiary">
          {showPassword ? (
            <img src="https://img.icons8.com/?size=100&id=60022&format=png&color=FFFFFF" className="w-5 h-5" />
          ) : (
            <img src="https://img.icons8.com/?size=100&id=59814&format=png&color=FFFFFF" className="w-5 h-5" />
          )}
        </button>
      </label>
      <button type="submit" className="btn bg-Green text-Tertiary flex w-40 mx-auto">
        Login
      </button>
    </form>
  );
};

export default function Page() {
  const router = useRouter();
  return (
    <div className="bg-Green w-screen h-screen flex items-center justify-center">
      <div id="cardBg" className="flex flex-col w-1/2 h-3/4 items-center gap-2.5 px-[83px] py-[42px] relative bg-Cream rounded-[20px] justify-between">
        <div className="inline-flex flex-col items-center gap-[20px] px-0 py-5 relative flex-[0_0_auto] mb-[-180.00px]">
            <div className="inline-flex flex-col items-center relative flex-[0_0_auto]">
              <div className="inline-flex flex-col items-center gap-[70px] relative flex-[0_0_auto]">
                <div className="inline-flex flex-col h-[249px] items-center gap-px relative">
                  <img
                    className="relative w-[152px] h-[152px] object-cover"
                    alt="Screenshot"
                    src={LogoIMG.src}
                  />
                  <p className="relative w-[328px] [ font-family:'Noto_Sans-Medium',Helvetica] font-normal text-[#344e41] text-[32px] text-center tracking-[0] leading-[normal]">
                    <span className="font-medium">Welcome to </span>
                    <span className="[font-family:'Noto_Sans-Bold',Helvetica] font-bold">NOW²</span>
                    <span className="font-medium">!</span>
                  </p>
                  <div className="relative w-fit [font-family:'Noto_Sans-Medium',Helvetica] font-medium text-[#344e41] text-[25px] text-center tracking-[0] leading-[normal]">
                    Be Wiser Be Greener
                  </div>
                  <div className="flex w-[148px] items-center justify-center gap-2.5 px-0 py-[27px] relative flex-[0_0_auto] mb-[-65.00px]">
                    <div className="relative flex-1 mt-8 [font-family:'Noto_Sans-Medium',Helvetica] font-medium text-[#344e41] text-xl text-center tracking-[0] leading-[normal]">
                      Sign-in
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
  );
}