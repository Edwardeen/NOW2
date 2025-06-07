// pages/login.js
"use client";
import 'tailwindcss/tailwind.css';
import LogoIMG from "@/public/logo.png"; // Ensure you have a logo image in the public directory
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react'; // Import signIn
import Image from 'next/image'; // Import Next Image

const MyForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false); // Added loading state
    const [error, setError] = useState<string | null>(null); // Added error state
    const router = useRouter();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        if (name === 'username') {
            setUsername(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true); // Start loading
        setError(null); // Clear previous errors
        
        console.log('Logging in as Transformer with Username:', username);

        try {
            const result = await signIn('credentials', {
                redirect: false, // Handle redirect manually
                username: username,
                password: password,
                userType: 'transformer', // Explicitly pass userType
            });

            if (result?.error) {
                // Handle errors returned from the authorize function
                console.error("Transformer Login Error:", result.error);
                setError(result.error === "CredentialsSignin" ? "Invalid username or password." : "Login failed. Please try again.");
                setIsLoading(false);
            } else if (result?.ok) {
                // Login successful
                console.log('Transformer login successful, redirecting...');
                // Redirect to the transformer dashboard
                router.push('/transformer/home'); // Correct redirect
                // No need to setIsLoading(false) as we are navigating away
            } else {
                 // Handle unexpected cases
                 setError("An unexpected error occurred during login.");
                 setIsLoading(false);
            }
        } catch (err: any) {
            console.error('Login submit error:', err);
            setError(err.message || "An error occurred. Please try again.");
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
            {error && ( // Display error message
              <div className="text-red-500 text-sm text-center p-2 bg-red-100 rounded-md">
                  {error}
              </div>
            )}
             {/* Username Input */}
            <label className="input input-bordered bg-Green text-Tertiary flex items-center gap-2 w-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-5 w-5 opacity-70">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input
                    type="text"
                    name="username"
                    className="grow placeholder-Primary input-bordered bg-transparent focus:outline-none" // Made background transparent
                    value={username}
                    onChange={handleInputChange}
                    placeholder="Username"
                    required
                    disabled={isLoading} // Disable when loading
                />
            </label>

            {/* Password Input */}
            <label className="input input-bordered bg-Green text-Tertiary flex items-center gap-2 w-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-5 w-5 opacity-70">
                    <path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" />
                </svg>
                <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    className="grow placeholder-Primary input-bordered bg-transparent focus:outline-none" // Made background transparent
                    value={password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                    required
                    disabled={isLoading} // Disable when loading
                />
                 {/* Replaced icon images with text for simplicity/reliability */}
                <button type="button" onClick={togglePasswordVisibility} className="text-Tertiary text-xs px-1" disabled={isLoading}>
                    {showPassword ? "Hide" : "Show"}
                </button>
            </label>

             {/* Submit Button */}
            <button 
                type="submit" 
                className="btn bg-Primary hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded-lg w-full sm:w-auto sm:self-center sm:px-10 transition-colors disabled:opacity-50" // Responsive width
                disabled={isLoading} // Disable when loading
            >
                {isLoading ? (
                    <span className="loading loading-spinner loading-sm"></span>
                ) : (
                    'Login'
                )}
            </button>
        </form>
    );
};

export default function LoginPage() {
    const router = useRouter();

    return (
        // Use min-h-screen for flexible height
        <div className="bg-Green min-h-screen flex items-center justify-center p-4">
            {/* Responsive Card */}
            <div id="cardBg" className="flex flex-col w-full max-w-md h-auto items-center gap-4 sm:gap-6 px-6 py-8 sm:px-8 sm:py-10 bg-Cream rounded-lg shadow-lg">
                <div className="flex flex-col items-center text-center">
                    {/* Responsive Logo */}
                    <Image
                        className="w-24 h-24 sm:w-32 sm:h-32 object-contain mb-4"
                        alt="Logo"
                        src={LogoIMG} // Use imported Image object
                        priority // Prioritize loading logo
                    />
                    {/* Responsive Text - Updated */}
                    <h1 className="text-2xl sm:text-3xl font-bold text-Tertiary">Transformer Login</h1>
                    <p className="text-base sm:text-lg text-Tertiary mb-4 sm:mb-6">Access your Transformer dashboard</p>
                </div>
                <MyForm />
            </div>
        </div>
    );
}