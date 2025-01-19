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
            case 'PicPhoneNumber':
                setPicPhoneNumber(value);
                break;
                case 'companyPhoneNumber': // Handle the company phone number input
                setCompanyPhoneNumber(value);
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
        event.preventDefault(); // Prevent the default form submission

        const data = {
            companyUsername: username,
            password,
            picFrontName: frontName,
            picFamilyName: familyName,
            picPhoneNumber: picPhoneNumber,
            dateofbirth: dob,
            companyName,
            companyAddress: address.addressLine1 + (address.addressLine2 ? `, ${address.addressLine2}` : ''),
            companyPhoneNumber: companyPhoneNumber,
            companyZipCode: address.zipCode,
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

            if (!response.ok) {
                const errorData = await response.json();
                
                throw new Error(errorData.error || 'Something went wrong');
            }

            const result = await response.json();
            console.log(result.message); // Handle success (e.g., show a success message or redirect)
            // Reset the form fields if needed
            setFrontName('');
            setFamilyName('');
            setDob('');
            setEmail('');
            setUsername('');
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
                country: ''
            });
            alert('Registration successful!');
        } catch (error) {
            console.error('Error:', error);
            alert('Registration Failed, please try again!');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 placeholder-Primary">
            <span className="label-text text-Tertiary">Person in Charge Name </span>
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
            <input
                type="text"
                name="companyName"
                value={companyName}
                onChange={handleInputChange}
                placeholder="Company Name"
                className="input input-bordered bg-Green text-Tertiary placeholder-Primary"
            />
            <input
                type="text"
                name="companyNum"
                value={companyNum}
                onChange={handleInputChange}
                placeholder="Company Registration Number"
                className="input input-bordered bg-Green text-Tertiary placeholder-Primary"
            />
            <span className="label-text text-Tertiary">Choose a Username for Login</span>
            <input
                type="text"
                name="username"
                value={username}
                onChange={handleInputChange}
                placeholder="Username"
                className="input input-bordered bg-Green text-Tertiary placeholder-Primary"
            />
            <span className="label-text text-Tertiary">When was your Company / Organization made?</span>
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
                type="text"
                name="companyEmail"
                value={companyEmail}
                onChange={handleInputChange}
                placeholder="Company Email"
                className="input input-bordered bg-Green text-Tertiary placeholder-Primary"
            />
                <input
                    type="text"
                    name="companyPhoneNumber" // This should match the state variable
                    value={companyPhoneNumber} // This remains as it is
                    onChange={handleInputChange}
                    placeholder="Company Phone Number"
                    className="input input-bordered bg-Green text-Tertiary placeholder-Primary"
                />
            <span className="label-text text-Tertiary">Company / Organization Address </span>
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
                    value={address.province}
                    onChange={handleInputChange}
                    placeholder="Province"
                    className="input input-bordered bg-Green text-Tertiary placeholder-Primary w-1/3"
                />
                <input
                    type="text"
                    name="city"
                    value={address.city}
                    onChange={handleInputChange}
                    placeholder="City"
                    className="input input-bordered bg-Green text-Tertiary placeholder-Primary w-1/3"
                />
                <input
                    type="text"
                    name="zipCode"
                    value={address.zipCode}
                    onChange={handleInputChange}
                    placeholder="Code"
                    className="input input-bordered bg-Green text-Tertiary placeholder-Primary w-1/3"
                />
            </div>
            <input
                type="text"
                name="country"
                value="Malaysia"
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
                    {showPassword ? <img src="https://img.icons8.com/?size=100&id=60022&format=png&color=FFFFFF" className="w-5 h-5"/> : <img src="https://img.icons8.com/?size=100&id=59814&format=png&color=FFFFFF" className="w-5 h-5" />}
                </button>
            </label>
            <button type="submit" className="btn bg-Green text-Tertiary flex w-40 mx-auto">
                Register
            </button>
        </form>
    );
};

export default function Page() {
    const router = useRouter();
    return (
        <div className="bg-Green w-screen flex items-center justify-center">
            <div id="cardBg" className="flex flex-col items-center gap-2.5 w-1/2 my-20 overflow-auto bg-Cream rounded-[20px]">
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
                                <div className="relative w-fit [font-family:'Noto_Sans-Medium',Helvetica] font -medium text-[#344e41] text-[25px] text-center tracking-[0] leading-[normal]">
                                    Be Wiser Be Greener
                                </div>
                                <div className="flex items-center justify-center gap-2.5 my-5 px-0 py-[27px] relative flex-[0_0_auto] mb-[-65.00px]">
                                    <div className="btn btn-ghost relative flex-1 mt-8 [font-family:'Noto_Sans-Medium',Helvetica] font-medium text-[#344e41] text-xl text-center tracking-[0] leading-[normal]" onClick={() => router.push('/register')}>
                                        Registering as <span className="underline">Company / Organization</span>
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
    );
}