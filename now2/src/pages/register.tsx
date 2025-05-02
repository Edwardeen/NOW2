"use client";
import 'tailwindcss/tailwind.css';
import LogoIMG from "../public/logo.png";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const MyForm = () => {
    const [frontName, setFrontName] = useState('');
    const [familyName, setFamilyName] = useState('');
    const [dob, setDob] = useState('');
    const [email, setEmail] = useState('');
    const [icNumber, setIC] = useState('');
    const [username, setUsername] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [zipCode, setZipCode] = useState('');
    const [province, setProvince] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('Malaysia'); // Default to Malaysia
    const [isLoading, setIsLoading] = useState(false); // Loading state
    const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null); // Message state

    // Define address state
    const [address, setAddress] = useState({
        addressLine1: '',
        addressLine2: ''
    });

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
            case 'icNumber':
                setIC(value);
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
            case 'zipCode':
                setZipCode(value);
                break;
            case 'province':
                setProvince(value);
                break;
            case 'city':
                setCity(value);
                break;
            case 'country':
                setCountry(value);
                break;
            case 'addressLine1':
                setAddress({ ...address, addressLine1: value });
                break;
            case 'addressLine2':
                setAddress({ ...address, addressLine2: value });
                break;
            default:
                break;
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        setMessage(null);

        const fullAddress = `${address.addressLine1} ${address.addressLine2}`.trim();
        const registrationData = {
            username,
            password,
            email,
            frontName,
            familyName,
            dateofbirth: dob ? new Date(dob).toISOString() : null, // Convert date to ISO string
            icNumber: icNumber ? parseInt(icNumber) : null, // Convert to integer
            phoneNumber,
            address: fullAddress,
            zipCode: zipCode ? parseInt(zipCode) : null,
            province,
            city,
            country,
        };

        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(registrationData),
            });

            const data = await response.json();

            if (!response.ok) {
                // Use error message from API response if available, otherwise a generic one
                throw new Error(data.error || 'Registration failed due to an unknown error.');
            }

            setMessage({ type: 'success', text: 'Registration successful!' });
            console.log('Registration successful:', data);

            // Reset form fields on success
            setFrontName('');
            setFamilyName('');
            setDob('');
            setEmail('');
            setUsername('');
            setPhoneNumber('+60');
            setPassword('');
            setIC('');
            setZipCode('');
            setProvince('');
            setCity('');
            setCountry('Malaysia'); 
            setAddress({ addressLine1: '', addressLine2: '' });

        } catch (error: any) {
            console.error('Error during registration:', error);
            setMessage({ type: 'error', text: error.message || 'An error occurred during registration.' });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        // Added w-full for better control within flex parent
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 placeholder-Primary w-full">
            {/* Display Success/Error Message */}
            {message && (
                <p className={`text-sm text-center p-2 rounded ${message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {message.text}
                </p>
            )}
            <span className="label-text text-Tertiary">Enter your Name</span>
            {/* Responsive Name Inputs */}
            <div className='flex flex-col sm:flex-row gap-3'>
                <input
                    type="text"
                    name="frontName"
                    value={frontName}
                    onChange={handleInputChange}
                    placeholder="Front Name"
                    className="input input-bordered bg-Green text-Tertiary placeholder-Primary w-full sm:w-1/2"
                    disabled={isLoading}
                    required
                />
                <input
                    type="text"
                    name="familyName"
                    value={familyName}
                    onChange={handleInputChange}
                    placeholder="Family Name"
                    className="input input-bordered bg-Green text-Tertiary placeholder-Primary w-full sm:w-1/2"
                    disabled={isLoading}
                    required
                />
            </div>

            <span className="label-text text-Tertiary">Choose a Username for Login</span>
            <input
                type="text"
                name="username"
                value={username}
                onChange={handleInputChange}
                placeholder="Username"
                className="input input-bordered bg-Green text-Tertiary placeholder-Primary"
                disabled={isLoading}
                required
            />
            <input
                type="text"
                name="icNumber"
                value={icNumber}
                onChange={handleInputChange}
                placeholder="IC Number (Optional)" // Added Optional
                className="input input-bordered bg-Green text-Tertiary placeholder-Primary"
                disabled={isLoading}
            />
            <input
                type="date"
                name="dob"
                value={dob}
                onChange={handleInputChange}
                className="input input-bordered bg-Green text-Tertiary placeholder-Primary"
                disabled={isLoading}
                required
            />
            <input
                type="email"
                name="email"
                value={email}
                onChange={handleInputChange}
                placeholder="Email"
                className="input input-bordered bg-Green text-Tertiary placeholder-Primary"
                disabled={isLoading}
                required
            />
            <input
                type="tel"
                name="phoneNumber"
                value={phoneNumber}
                onChange={handleInputChange}
                placeholder="Phone Number (+60)"
                className="input input-bordered bg-Green text-Tertiary placeholder-Primary"
                disabled={isLoading}
                required
            />

            <span className="label-text text-Tertiary">Address of Domicile</span>
            <input
                type="text"
                name="addressLine1"
                value={address.addressLine1}
                onChange={handleInputChange}
                placeholder="Address Line 1"
                className="input input-bordered bg-Green text-Tertiary placeholder-Primary"
                disabled={isLoading}
                required
            />
            <input
                type="text"
                name="addressLine2"
                value={address.addressLine2}
                onChange={handleInputChange}
                placeholder="Address Line 2 (Optional)"
                className="input input-bordered bg-Green text-Tertiary placeholder-Primary"
                disabled={isLoading}
            />
            {/* Responsive Address Inputs */}
            <div className='flex flex-col sm:flex-row gap-2 justify-center'>
                <input
                    type="text"
                    name="province"
                    value={province}
                    onChange={handleInputChange}
                    placeholder="Province"
                    className="input input-bordered bg-Green text-Tertiary placeholder-Primary w-full sm:flex-1"
                    disabled={isLoading}
                    required
                />
                <input
                    type="text"
                    name="city"
                    value={city}
                    onChange={handleInputChange}
                    placeholder="City"
                    className="input input-bordered bg-Green text-Tertiary placeholder-Primary w-full sm:flex-1"
                    disabled={isLoading}
                    required
                />
                <input
                    type="text"
                    name="zipCode"
                    value={zipCode}
                    onChange={handleInputChange}
                    placeholder="Zip Code"
                    className="input input-bordered bg-Green text-Tertiary placeholder-Primary w-full sm:flex-1"
                    disabled={isLoading}
                    required
                />
            </div>

            <input
                type="text"
                name="country"
                value={country}
                onChange={handleInputChange}
                placeholder="Country"
                className="input input-bordered bg-Green text-Tertiary placeholder-Primary"
                disabled={isLoading}
                required
            />

            <label className="input input-bordered bg-Green text-Tertiary flex items-center gap-2 placeholder-Primary">
                <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                    placeholder="Password"
                    className="grow placeholder-Primary"
                    disabled={isLoading}
                    required
                />
                <button type="button" onClick={togglePasswordVisibility} className="text-Tertiary" disabled={isLoading}>
                    {showPassword ? <img src="https://img.icons8.com/?size=100&id=60022&format=png&color=FFFFFF" className="w-5 h-5"/> : <img src="https://img.icons8.com/?size=100&id=59814&format=png&color=FFFFFF" className="w-5 h-5" />}
                </button>
            </label>
             {/* Submit Button with Loading State and Padding */}
            <button type="submit" className="btn bg-Green text-Tertiary flex mx-auto px-6 py-2 min-w-[8rem]" disabled={isLoading}>
                {isLoading ? (
                    <span className="loading loading-spinner loading-sm"></span>
                ) : (
                    'Register'
                )}
            </button>
        </form>
    );
};

export default function Page() {
    const router = useRouter();
    return (
        // Added min-h-screen, adjusted padding
        <div className="bg-Green min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8">
            {/* Adjusted width, max-width, padding */}
            <div id="cardBg" className="flex flex-col items-center gap-2.5 p-4 sm:p-6 md:p-8 bg-Cream rounded-[20px] w-full sm:w-5/6 md:w-4/5 lg:w-3/4 xl:w-2/3 max-w-2xl">
                 {/* Adjusted gaps, added w-full */}
                <div className="inline-flex flex-col items-center gap-6 sm:gap-8 w-full">
                    <div className="inline-flex flex-col items-center w-full">
                        <div className="inline-flex flex-col items-center gap-10 sm:gap-12 md:gap-16 w-full">
                            <div className="inline-flex flex-col items-center gap-2 relative w-full">
                                {/* Responsive Logo */}
                                <img
                                    className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover mb-2"
                                    alt="Screenshot"
                                    src={LogoIMG.src}
                                />
                                {/* Responsive Welcome Text */}
                                <p className="w-full [font-family:'Noto_Sans-Medium',Helvetica] font-normal text-[#344e41] text-xl sm:text-2xl md:text-3xl text-center tracking-[0] leading-tight sm:leading-normal">
                                    <span className="font-medium">Welcome to </span>
                                    <span className="[font-family:'Noto_Sans-Bold',Helvetica] font-bold">NOW²</span>
                                    <span className="font-medium">!</span>
                                </p>
                                 {/* Responsive Slogan Text */}
                                <div className="relative w-fit [font-family:'Noto_Sans-Medium',Helvetica] font-medium text-[#344e41] text-lg sm:text-xl md:text-2xl text-center tracking-[0] leading-tight sm:leading-normal mt-1">
                                    Be Wiser Be Greener
                                </div>
                                {/* Responsive Registering As Text */}
                                <div className="flex items-center justify-center gap-2.5 px-0 py-4 sm:py-6 relative w-full">
                                    <div className="btn btn-ghost relative [font-family:'Noto_Sans-Medium',Helvetica] font-medium text-[#344e41] text-base sm:text-lg text-center tracking-[0] leading-normal" onClick={() => router.push('/register-company')}>
                                        Registering as <span className="underline">User</span>
                                    </div>
                                </div>
                            </div>
                            {/* Ensure MyForm takes full width */}
                            <div className='mt-4 w-full px-2 sm:px-4'>
                                <MyForm />
                            </div>
                        </div>
                        {/* Responsive Login Link */}
                        <div id="registerText" className="btn btn-ghost relative w-fit h-max [font-family:'Noto_Sans-Medium',Helvetica] font-medium text-Green text-base sm:text-lg text-center tracking-[0] leading-normal whitespace-nowrap mt-8 sm:mt-12" onClick={() => router.push('/login')}>
                            <span className="[font-family:'Noto_Sans-Medium',Helvetica] font-medium text-black tracking-[0]">Already got an account? </span>
                            <span className="underline">Login</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}