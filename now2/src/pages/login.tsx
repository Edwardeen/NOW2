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
  const [isLoading, setIsLoading] = useState(false); // Add loading state
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
    setError(null); // Clear previous errors
    setIsLoading(true); // Set loading state to true

    try {
      const result = await signIn('credentials', {
        redirect: false,
        username,
        password,
      });

      if (result?.error) {
        // Use more specific error messages if possible based on result.error
        if (result.error === "CredentialsSignin") {
          throw new Error("Invalid username or password.");
        }
        throw new Error(result.error);
      }

      // No need to fetch session here if signIn handles redirection or session setup
      // Redirect logic might be handled by NextAuth callbacks or redirect:true option

      // Assuming successful sign-in, clear fields and redirect
      setUsername('');
      setPassword('');

      // Consider redirecting based on user role if available from session/signIn result
      router.push('/User/home');
    } catch (error: any) {
      setError(error.message || "An unexpected error occurred."); // Set specific or generic error
    } finally {
      setIsLoading(false); // Set loading state to false regardless of outcome
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {error && <p className="text-red-500 text-sm text-center">{error}</p>} {/* Display error message */}
      <label className="input input-bordered bg-Green text-Tertiary flex items-center gap-2">
        <input
          type="text"
          className="grow placeholder-Primary"
          value={username}
          onChange={handleUsernameChange}
          placeholder="Username"
          required
          disabled={isLoading} // Disable input when loading
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
          disabled={isLoading} // Disable input when loading
        />
        <button type="button" onClick={togglePasswordVisibility} className="text-Tertiary" disabled={isLoading}>
          {showPassword ? (
            <img src="https://img.icons8.com/?size=100&id=60022&format=png&color=FFFFFF" className="w-5 h-5" />
          ) : (
            <img src="https://img.icons8.com/?size=100&id=59814&format=png&color=FFFFFF" className="w-5 h-5" />
          )}
        </button>
      </label>
      <button type="submit" className="btn bg-Green text-Tertiary flex w-40 mx-auto" disabled={isLoading}>
        {isLoading ? (
           <span className="loading loading-spinner loading-xs"></span> // Show spinner when loading
        ) : (
          'Login' // Show text when not loading
        )}
      </button>
    </form>
  );
};

export default function Page() {
  const router = useRouter();
  return (
    <div className="bg-Green p-4 sm:p-8 md:p-12 flex items-center justify-center min-h-screen">
      <div id="cardBg" className="flex flex-col items-center gap-2.5 bg-Cream rounded-[20px] justify-between w-full sm:w-5/6 md:w-3/4 lg:w-2/3 xl:w-1/2 max-w-lg p-4 sm:p-6">
        <div className="inline-flex flex-col items-center gap-[20px] w-full">
            <div className="inline-flex flex-col items-center relative w-full">
              <div className="inline-flex flex-col items-center gap-10 sm:gap-12 md:gap-16 relative w-full">
                <div className="inline-flex flex-col items-center gap-2 relative w-full">
                  <img
                    className="w-16 sm:w-20 md:w-24 object-cover mb-2"
                    alt="Screenshot"
                    src={LogoIMG.src}
                  />
                  <p className="w-full sm:w-3/4 md:w-2/3 [font-family:'Noto_Sans-Medium',Helvetica] font-normal text-[#344e41] text-xl sm:text-2xl md:text-3xl text-center tracking-[0] leading-tight sm:leading-normal">
                    <span className="font-medium">Welcome to </span>
                    <span className="[font-family:'Noto_Sans-Bold',Helvetica] font-bold">NOW²</span>
                    <span className="font-medium">!</span>
                  </p>
                  <div className="w-fit [font-family:'Noto_Sans-Medium',Helvetica] font-medium text-[#344e41] text-lg sm:text-xl md:text-2xl text-center tracking-[0] leading-tight sm:leading-normal mt-1">
                    Be Wiser Be Greener
                  </div>
                  <div className="relative mt-6 mb-2 [font-family:'Noto_Sans-Medium',Helvetica] font-medium text-[#344e41] text-lg sm:text-xl text-center tracking-[0] leading-tight sm:leading-normal">
                      Sign-in
                  </div>
                </div>
                <MyForm />
              </div>
              <div id="registerText" className="btn btn-ghost relative w-fit [font-family:'Noto_Sans-Medium',Helvetica] font-medium text-Green text-base sm:text-lg text-center tracking-[0] leading-normal whitespace-nowrap mt-8 mb-4 sm:mt-12 sm:mb-6" onClick={() => router.push('/register')}>
                <span className="[font-family:'Noto_Sans-Medium',Helvetica] font-medium text-black tracking-[0]">
                  Haven't got an account?{" "}
                </span>
                <span className="underline">Register</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}