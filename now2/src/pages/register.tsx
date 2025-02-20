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
        event.preventDefault(); // Prevent the default form submission
    
        // Combine addressLine1 and addressLine2 into a single address string
        const fullAddress = `${address.addressLine1} ${address.addressLine2}`.trim();
    
        // Prepare the data to send
        const registrationData = {
            username,
            password,
            email,
            frontName,
            familyName,
            dateofbirth: dob ? new Date(dob).toISOString() : null, // Convert date to ISO string
            icNumber: icNumber ? parseInt(icNumber) : null, // Convert to integer
            phoneNumber,
            address: fullAddress, // Use the combined address
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
    
            if (!response.ok) {
                const errorData = await response.json();
                console.error('Registration failed:', errorData.error);
                alert(errorData.error); // Display error message
                return;
            }
    
            const data = await response.json();
            console.log('Registration successful:', data);
            alert('Registration successful!');
    
            // Reset the form fields if needed
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
            setCountry(''); // Reset to default
            setAddress({ addressLine1: '', addressLine2: '' }); // Reset address fields
    
        } catch (error) {
            console.error('Error during registration:', error);
            alert('An error occurred during registration.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 placeholder-Primary">
            <span className="label-text text-Tertiary">Enter your Name</span>
            <div className='flex flex-row gap-3'>
                <input
                    type="text"
                    name="frontName"
                    value={frontName}
                    onChange={handleInputChange}
                    placeholder="Front Name"
                    className="input input-bordered bg-Green text-Tertiary placeholder-Primary w-1/2"
                />
                <input
                    type="text"
                    name="familyName"
                    value={familyName}
                    onChange={handleInputChange}
                    placeholder="Family Name"
                    className="input input-bordered bg-Green text-Tertiary placeholder-Primary w-1/2"
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
            />
            <input
                type="text"
                name="icNumber"
                value={icNumber}
                onChange={handleInputChange}
                placeholder="IC Number"
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

            <span className="label-text text-Tertiary">Address of Domicile</span>
            <input
                type="text"
                name="addressLine1"
                value={address.addressLine1}
                onChange={handleInputChange}
                placeholder="Address Line 1"
                className="input input-bordered bg-Green text-Tertiary placeholder-Primary"
            />
            <input
                type="text"
                name="addressLine2"
                value={address.addressLine2}
                onChange={handleInputChange}
                placeholder="Address Line 2"
                className="input input-bordered bg-Green text-Tertiary placeholder-Primary"
            />
            <div className='flex flex-row gap-2 mx-auto justify-center'>
                <input
                    type="text"
                    name="province"
                    value={province}
                    onChange={handleInputChange}
                    placeholder="Province"
                    className="input input-bordered bg-Green text-Tertiary placeholder-Primary w-1/3"
                />
                <input
                    type="text"
                    name="city"
                    value={city}
                    onChange={handleInputChange}
                    placeholder="City"
                    className="input input-bordered bg-Green text-Tertiary placeholder-Primary w-1/3"
                />
                <input
                    type="text"
                    name="zipCode"
                    value={zipCode}
                    onChange={handleInputChange}
                    placeholder="Zip Code"
                    className="input input-bordered bg-Green text-Tertiary placeholder-Primary w-1/3"
                />
            </div>

            <input
                type="text"
                name="country"
                value={country}
                onChange={handleInputChange}
                placeholder="Country"
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
                    {showPassword ? <img src="https://img.icons8.com/?size=100&id=60022&format=png&color=FFFFFF" className="w-5 h-5"/> : <img src="https://img.icons8.com/?size=100&id=59814&format=png& color=FFFFFF" className="w-5 h-5" />}
                </button>
            </label>
            <button type="submit" className="btn bg-Green text-Tertiary flex mx-auto w-40">
                Register
            </button>
        </form>
    );
};

export default function Page() {
    const router = useRouter();
    return (
        <div className="bg-Green w-screen flex items-center justify-center">
            <div id="cardBg" className="flex flex-col items-center gap-2.5 p-5 overflow-auto bg-Cream rounded-[20px] sm:w-3/4 md:w-3/4 lg:w-1/2 sm:p-10">
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
                                    <span className="[font-family:'Noto_Sans-Bold',Helvetica] font-bold">NOW²</span>
                                    <span className="font-medium">!</span>
                                </p>
                                <div className="relative w-fit [font-family:'Noto_Sans-Medium',Helvetica] font-medium text-[#344e41] text-[25px] text-center tracking-[0] leading-[normal]">
                                    Be Wiser Be Greener
                                </div>
                                <div className="flex items-center justify-center gap-2.5 px-0 py-[27px] relative flex-[0_0_auto] mb-[-65.00px]">
                                    <div className="btn btn-ghost relative flex-1 mt-8 [font-family:'Noto_Sans-Medium',Helvetica] font-medium text-[#344e41] text-xl text-center tracking-[0] leading-[normal]" onClick={() => router.push('/register-company')}>
                                        Registering as <span className="underline">User </span>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-6'>
                                <MyForm />
                            </div>
                        </div>
                        <div id="registerText" className="btn btn-ghost relative w-[346px] h-max [font-family:'Noto_Sans-Medium',Helvetica] font-medium text-Green text-xl text-center tracking-[0] leading-[normal] whitespace-nowrap mt-20" onClick={() => router.push('/login')}>
                            <span className="[font-family:'Noto_Sans-Medium',Helvetica] font-medium text-black text-xl tracking-[0]">Already got an account? </span>
                            <span className="underline">Login</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}