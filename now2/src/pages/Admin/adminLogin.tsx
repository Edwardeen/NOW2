// pages/login.js
"use client";
import 'tailwindcss/tailwind.css';
import LogoIMG from "../public/logo.png"; // Ensure you have a logo image in the public directory
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const MyForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
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

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
        // Here you can handle the form submission, e.g., send data to an API
        // After successful login, redirect to the admin dashboard
        router.push('/admin/dashboard'); // Change to your admin dashboard route
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <label className="input input-bordered bg-Green text-Tertiary flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-5 w-5 opacity-70">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input
                    type="text"
                    name="username"
                    className="grow placeholder-Primary input-bordered"
                    value={username}
                    onChange={handleInputChange}
                    placeholder="Username"
                    required
                />
            </label>

            <label className="input input-bordered bg-Green text-Tertiary flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-5 w-5 opacity-70">
                    <path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" />
                </svg>
                <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    className="grow placeholder-Primary input-bordered"
                    value={password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                    required
                />
                <button type="button" onClick={togglePasswordVisibility} className="text-Tertiary">
                    {showPassword ? (
                        <img src="https://img.icons8.com/?size=100&id=60022&format=png&color=FFFFFF" className="w-5 h-5" />
                    ) : (
                        <img src="https://img.icons8.com/?size=100&id=59814&format=png &color=FFFFFF" className="w-5 h-5" />
                    )}
                </button>
            </label>

            <button type="submit" className="btn bg-Green text-Tertiary flex w-40 mx-auto">
                Login
            </button>
        </form>
    );
};

export default function LoginPage() {
    const router = useRouter();

    return (
        <div className="bg-Green w-screen h-screen flex items-center justify-center">
            <div id="cardBg" className="flex flex-col w-1/3 h-3/4 items-center gap-6 px-10 py-8 bg-Cream rounded-lg shadow-lg">
                <div className="flex flex-col items-center">
                    <img
                        className="w-32 h-32 object-cover mb-4"
                        alt="Logo"
                        src={LogoIMG.src}
                    />
                    <h1 className="text-3xl font-bold text-[#344e41]">Admin Login</h1>
                    <p className="text-lg text-[#344e41] mb-6">Access your admin dashboard</p>
                </div>
                <MyForm />
                <div className="text-center mt-4">
                    <span className="text-[#344e41]">Haven’t got an account? </span>
                    <button className="text-Green underline" onClick={() => router.push('/register')}>
                        Register
                    </button>
                </div>
            </div>
        </div>
    );
}