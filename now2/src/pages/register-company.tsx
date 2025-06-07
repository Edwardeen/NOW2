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
    const [companyName, setCompanyName] = useState('');
    const [companyNum, setCompanyNum] = useState('');
    const [companyEmail, setCompanyEmail] = useState('');
    const [username, setUsername] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [picPhoneNumber, setPicPhoneNumber] = useState('');
    const [companyPhoneNumber, setCompanyPhoneNumber] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

    const [address, setAddress] = useState({
        zipCode: '',
        addressLine1: '',
        addressLine2: '',
        province: '',
        city: '',
        country: ''
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
            case 'picPhoneNumber':
                {
                    if (picPhoneNumber.startsWith('+60') && !value.startsWith('+60') && value.length < picPhoneNumber.length) {
                        setPicPhoneNumber('');
                    } else if (!value.startsWith('+60')) {
                        const digits = value.replace(/\D/g, '');
                        setPicPhoneNumber(digits ? `+60${digits}` : '');
                    } else {
                        setPicPhoneNumber(value);
                    }
                }
                break;
            case 'companyPhoneNumber':
                {
                    if (companyPhoneNumber.startsWith('+60') && !value.startsWith('+60') && value.length < companyPhoneNumber.length) {
                        setCompanyPhoneNumber('');
                    } else if (!value.startsWith('+60')) {
                        const digits = value.replace(/\D/g, '');
                        setCompanyPhoneNumber(digits ? `+60${digits}` : '');
                    } else {
                        setCompanyPhoneNumber(value);
                    }
                }
                break;
            case 'password':
                setPassword(value);
                break;
            case 'username':
                setUsername(value);
                break;
            case 'companyEmail':
                setCompanyEmail(value);
                break;
            case 'companyName':
                setCompanyName(value);
                break;
            case 'companyNum':
                setCompanyNum(value);
                break;
            case 'zipCode':
                setAddress({ ...address, zipCode: value });
                break;
            case 'addressLine1':
                setAddress({ ...address, addressLine1: value });
                break;
            case 'addressLine2':
                setAddress({ ...address, addressLine2: value}) 
                break;
            case 'province':
                setAddress({ ...address, province: value });
                break;
            case 'city':
                setAddress({ ...address, city: value });
                break;
            case 'country':
                setAddress({ ...address, country: value });
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

        const data = {
            companyUsername: username,
            password,
            picFrontName: frontName,
            picFamilyName: familyName,
            picPhoneNumber: picPhoneNumber,
            dateofbirth: dob ? new Date(dob).toISOString() : null,
            companyName,
            companyAddress: `${address.addressLine1} ${address.addressLine2}`.trim(),
            companyPhoneNumber: companyPhoneNumber,
            companyZipCode: address.zipCode,
            companyProvince: address.province,
            companyCity: address.city,
            companyCountry: address.country,
            companyEmail,
            companyRegistrationNumber: companyNum,
        };

        try {
            const response = await fetch('/api/register-company', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || 'Registration failed. Please check your input and try again.');
            }

            setMessage({ type: 'success', text: result.message || 'Registration successful!' });
            console.log(result.message);

            setFrontName('');
            setFamilyName('');
            setDob('');
            setEmail('');
            setUsername('');
            setPicPhoneNumber('');
            setCompanyEmail('');
            setCompanyName('');
            setCompanyNum('');
            setCompanyPhoneNumber('');
            setPassword('');
            setAddress({
                zipCode: '',
                addressLine1: '',
                addressLine2: '',
                province: '',
                city: '',
                country: 'Malaysia'
            });

        } catch (error: any) {
            console.error('Error:', error);
            setMessage({ type: 'error', text: error.message || 'Registration Failed, please try again!' });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 placeholder-Primary w-full">
            {message && (
                <p className={`text-sm text-center p-2 rounded ${message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {message.text}
                </p>
            )}
            <span className="label-text text-Tertiary">Person in Charge Name </span>
            <div className='flex flex-col sm:flex-row gap-3'>
                <input
                    type="text"
                    name="frontName"
                    value={frontName}
                    onChange={handleInputChange}
                    placeholder="PIC Front Name"
                    className="input input-bordered bg-Green text-Tertiary placeholder-Primary w-full sm:w-1/2"
                    disabled={isLoading}
                    required
                />
                <input
                    type="text"
                    name="familyName"
                    value={familyName}
                    onChange={handleInputChange}
                    placeholder="PIC Family Name"
                    className="input input-bordered bg-Green text-Tertiary placeholder-Primary w-full sm:w-1/2"
                    disabled={isLoading}
                    required
                />
            </div>
            <input
                type="tel" 
                name="picPhoneNumber"
                value={picPhoneNumber} 
                onChange={handleInputChange}
                placeholder="PIC Phone Number (+60)"
                className="input input-bordered bg-Green text-Tertiary placeholder-Primary"
                disabled={isLoading}
                required
            />
            <span className="label-text text-Tertiary pt-2">Company Details</span>
            <input
                type="text"
                name="companyName"
                value={companyName}
                onChange={handleInputChange}
                placeholder="Company Name"
                className="input input-bordered bg-Green text-Tertiary placeholder-Primary"
                disabled={isLoading}
                required
            />
            <input
                type="text"
                name="companyNum"
                value={companyNum}
                onChange={handleInputChange}
                placeholder="Company Registration Number"
                className="input input-bordered bg-Green text-Tertiary placeholder-Primary"
                disabled={isLoading}
                required
            />
            <input
                type="text"
                name="companyEmail"
                value={companyEmail}
                onChange={handleInputChange}
                placeholder="Company Email"
                className="input input-bordered bg-Green text-Tertiary placeholder-Primary"
                disabled={isLoading}
                required
            />
            <input
                type="tel"
                name="companyPhoneNumber" 
                value={companyPhoneNumber} 
                onChange={handleInputChange}
                placeholder="Company Phone Number (+60)"
                className="input input-bordered bg-Green text-Tertiary placeholder-Primary"
                disabled={isLoading}
                required
            />
            <span className="label-text text-Tertiary pt-2">Login Credentials</span>
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
            <span className="label-text text-Tertiary pt-2">Company / Organization Address </span>
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
            <div className='flex flex-col sm:flex-row gap-2 justify-center'>
                <input
                    type="text"
                    name="province"
                    value={address.province}
                    onChange={handleInputChange}
                    placeholder="Province"
                    className="input input-bordered bg-Green text-Tertiary placeholder-Primary w-full sm:flex-1"
                    disabled={isLoading}
                    required
                />
                <input
                    type="text"
                    name="city"
                    value={address.city}
                    onChange={handleInputChange}
                    placeholder="City"
                    className="input input-bordered bg-Green text-Tertiary placeholder-Primary w-full sm:flex-1"
                    disabled={isLoading}
                    required
                />
                <input
                    type="text"
                    name="zipCode"
                    value={address.zipCode}
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
                value={address.country || 'Malaysia'}
                onChange={handleInputChange}
                placeholder="Country"
                className="input input-bordered bg-Green text-Tertiary placeholder-Primary"
                disabled={isLoading}
                required
            />
            <button type="submit" className="btn bg-Green text-Tertiary flex mx-auto px-6 py-2 min-w-[8rem] mt-4" disabled={isLoading}>
                {isLoading ? (
                    <span className="loading loading-spinner loading-sm"></span>
                ) : (
                    'Register Company'
                )}
            </button>
        </form>
    );
};

export default function Page() {
    const router = useRouter();
    return (
        <div className="bg-Green min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8">
            <div id="cardBg" className="flex flex-col items-center gap-2.5 p-4 sm:p-6 md:p-8 bg-Cream rounded-[20px] w-full sm:w-5/6 md:w-4/5 lg:w-3/4 xl:w-2/3 max-w-2xl">
                <div className="inline-flex flex-col items-center gap-6 sm:gap-8 w-full">
                    <div className="inline-flex flex-col items-center w-full">
                        <div className="inline-flex flex-col items-center gap-10 sm:gap-12 md:gap-16 w-full">
                            <div className="inline-flex flex-col items-center gap-2 relative w-full">
                                <img
                                    className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain mb-2"
                                    alt="Screenshot"
                                    src={LogoIMG.src}
                                />
                                <p className="w-full [font-family:'Noto_Sans-Medium',Helvetica] font-normal text-[#344e41] text-xl sm:text-2xl md:text-3xl text-center tracking-[0] leading-tight sm:leading-normal">
                                    <span className="font-medium">Welcome to </span>
                                    <span className="[font-family:'Noto_Sans-Bold',Helvetica] font-bold">Waste Based Charity</span>
                                    <span className="font-medium">!</span>
                                </p>
                                <div className="relative w-fit [font-family:'Noto_Sans-Medium',Helvetica] font-medium text-[#344e41] text-lg sm:text-xl md:text-2xl text-center tracking-[0] leading-tight sm:leading-normal mt-1">
                                    Be Wiser Be Greener
                                </div>
                                <div className="flex items-center justify-center gap-2.5 px-0 py-4 sm:py-6 relative w-full">
                                    <div className="btn btn-ghost relative [font-family:'Noto_Sans-Medium',Helvetica] font-medium text-[#344e41] text-base sm:text-lg text-center tracking-[0] leading-normal" onClick={() => router.push('/register')}>
                                        Registering as <span className="underline">Company / Organization</span>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-4 w-full px-2 sm:px-4'>
                                <MyForm />
                            </div>
                        </div>
                        <div id="registerText" className="btn btn-ghost relative w-fit h-max [font-family:'Noto_Sans-Medium',Helvetica] font-medium text-Green text-base sm:text-lg text-center tracking-[0] leading-normal whitespace-nowrap mt-8 sm:mt-12" onClick={() => router.push('/login')}>
                            <span className="[font-family:'Noto_Sans-Medium',Helvetica] font-medium text-black tracking-[0]">
                                Already got an account?{" "}
                            </span>
                            <span className="underline">Login</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}