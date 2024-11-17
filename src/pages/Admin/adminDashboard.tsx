"use client";
import 'tailwindcss/tailwind.css';
import LogoIMG from "../../public/logo.png"; // Ensure you have a logo image in the public directory
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Dashboard = () => {
    const router = useRouter();

    // State for managing each entity
    const [users, setUsers] = useState<{ id: number; name: string }[]>([]);
    const [companies, setCompanies] = useState<{ id: number; name: string }[]>([]);
    const [waqfHouses, setWaqfHouses] = useState<{ id: number; name: string }[]>([]);
    const [landfills, setLandfills] = useState<{ id: number; name: string }[]>([]);

    // State for form inputs
    const [userName, setUserName] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [waqfHouseName, setWaqfHouseName] = useState('');
    const [landfillName, setLandfillName] = useState('');

    // State for editing
    const [editingUser , setEditingUser ] = useState<{ id: number; name: string } | null>(null);
    const [editingCompany, setEditingCompany] = useState<{ id: number; name: string } | null>(null);
    const [editingWaqfHouse, setEditingWaqfHouse] = useState<{ id: number; name: string } | null>(null);
    const [editingLandfill, setEditingLandfill] = useState<{ id: number; name: string } | null>(null);

    const handleAddUser  = () => {
        if (editingUser ) {
            setUsers(users.map(user => user.id === editingUser .id ? { ...editingUser , name: userName } : user));
            setEditingUser (null);
        } else {
            setUsers([...users, { id: users.length + 1, name: userName }]);
        }
        setUserName('');
    };

    const handleAddCompany = () => {
        if (editingCompany) {
            setCompanies(companies.map(company => company.id === editingCompany.id ? { ...editingCompany, name: companyName } : company));
            setEditingCompany(null);
        } else {
            setCompanies([...companies, { id: companies.length + 1, name: companyName }]);
        }
        setCompanyName('');
    };

    const handleAddWaqfHouse = () => {
        if (editingWaqfHouse) {
            setWaqfHouses(waqfHouses.map(waqfHouse => waqfHouse.id === editingWaqfHouse.id ? { ...editingWaqfHouse, name: waqfHouseName } : waqfHouse));
            setEditingWaqfHouse(null);
        } else {
            setWaqfHouses([...waqfHouses, { id: waqfHouses.length + 1, name: waqfHouseName }]);
        }
        setWaqfHouseName('');
    };

    const handleAddLandfill = () => {
        if (editingLandfill) {
            setLandfills(landfills.map(landfill => landfill.id === editingLandfill.id ? { ...editingLandfill, name: landfillName } : landfill));
            setEditingLandfill(null);
        } else {
            setLandfills([...landfills, { id: landfills.length + 1, name: landfillName }]);
        }
        setLandfillName('');
    };

    const handleEditUser  = (user: { id: number; name: string }) => {
        setEditingUser (user);
        setUserName(user.name);
    };

    const handleEditCompany = (company: { id: number; name: string }) => {
        setEditingCompany(company);
        setCompanyName(company.name);
    };

    const handleEditWaqfHouse = (waqfHouse: { id: number; name: string }) => {
        setEditingWaqfHouse(waqfHouse);
        setWaqfHouseName(waqfHouse.name);
    };

    const handleEditLandfill = (landfill: { id: number; name: string }) => {
        setEditingLandfill(landfill);
        setLandfillName(landfill.name);
    };

    const handleDeleteUser  = (id: number) => {
        setUsers(users.filter(user => user.id !== id));
    };

    const handleDeleteCompany = (id: number) => {
        setCompanies(companies.filter(company => company.id !== id));
    };

    const handleDeleteWaqfHouse = (id: number) => {
        setWaqfHouses(waqfHouses.filter(waqfHouse => waqfHouse.id !== id));
    };

    const handleDeleteLandfill = (id: number) => {
        setLandfills(landfills.filter(landfill => landfill.id !== id));
    };

    return (
        <div className="bg-Green w-screen h-screen flex flex-col items-center">
            <header className="flex items-center justify-between w-full p-6 bg-Cream shadow-md">
                <img className="w-16 h-16" alt="Logo" src={LogoIMG.src} />
                <h1 className="text-2xl font-bold text-[#344e41]">Admin Dashboard</h1>
                <button
                    onClick={() => router.push('/login')}
                    className="text-Tertiary underline"
                >
                    Logout
                </button>
            </header>
            <main className="flex flex-col items-center justify-center w-full p-10">
                <h2 className="text-xl font-semibold text-[#344e41] mb-4">Manage Your Entities</h2>

                {/* Users Section */}
                <section className="mb-10">
                    <h3 className="text-lg font-semibold text-[#344e41]">Users</h3>
                    <input
                        type="text"
                        placeholder="Enter user name"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        className="border rounded p-2 mr-2"
                    />
                    <button onClick={handleAddUser } className="bg-Green text-white px-4 py-2 rounded">Add User</button>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                        {users.map(user => (
                            <div key={user.id} className="border rounded p-4 bg-white shadow-md">
                                <h4 className="font-semibold">{user.name}</h4>
                                <div className="flex justify-between mt-2">
                                    <button onClick={() => handleEditUser (user)} className="bg-Yellow text-white px-2 py-1 rounded">Edit</button>
                                    <button onClick={() => handleDeleteUser (user.id)} className="bg-Red text-white px-2 py-1 rounded">Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Companies Section */}
                <section className="mb-10">
                    <h3 className="text-lg font-semibold text-[#344e41]">Companies</h3>
                    <input
                        type="text"
                        placeholder="Enter company name"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className="border rounded p-2 mr-2"
                    />
                    <button onClick={handleAddCompany} className="bg-Green text-white px-4 py-2 rounded">Add Company</button>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                        {companies.map(company => (
                            <div key={company.id} className="border rounded p-4 bg-white shadow-md">
                                <h4 className="font-semibold">{company.name}</h4>
                                <div className="flex justify-between mt-2">
                                    <button onClick={() => handleEditCompany(company)} className="bg-Yellow text-white px-2 py-1 rounded">Edit</button>
                                    <button onClick={() => handleDeleteCompany(company.id)} className="bg-Red text-white px-2 py-1 rounded">Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* WAQF Houses Section */}
                <section className="mb-10">
                    <h3 className="text-lg font-semibold text-[#344e41]">WAQF Houses</h3>
                    <input
                        type="text"
                        placeholder="Enter WAQF house name"
                        value={waqfHouseName}
                        onChange={(e) => setWaqfHouseName(e.target.value)}
                        className="border rounded p-2 mr-2"
                    />
                    <button onClick={handleAddWaqfHouse} className="bg-Green text-white px-4 py-2 rounded">Add WAQF House</button>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                        {waqfHouses.map(waqfHouse => (
                            <div key={waqfHouse.id} className="border rounded p-4 bg-white shadow-md">
                                <h4 className="font-semibold">{waqfHouse.name}</h4>
                                <div className="flex justify-between mt-2">
                                    <button onClick={() => handleEditWaqfHouse(waqfHouse)} className="bg-Yellow text-white px-2 py-1 rounded">Edit</button>
                                    <button onClick={() => handleDeleteWaqfHouse(waqfHouse.id)} className="bg-Red text-white px-2 py-1 rounded">Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Landfills Section */}
                <section className="mb-10">
                    <h3 className="text-lg font-semibold text-[#344e41]">Landfills</h3>
                    <input
                        type="text"
                        placeholder="Enter landfill name"
                        value={landfillName}
                        onChange={(e) => setLandfillName(e.target.value)}
                        className="border rounded p-2 mr-2"
                    />
                    <button onClick={handleAddLandfill} className="bg-Green text-white px-4 py-2 rounded">Add Landfill</button>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                        {landfills.map(landfill => (
                            <div key={landfill.id} className="border rounded p-4 bg-white shadow-md">
                                <h4 className="font-semibold">{landfill.name}</h4>
                                <div className="flex justify-between mt-2">
                                    <button onClick={() => handleEditLandfill(landfill)} className="bg-Yellow text-white px-2 py-1 rounded">Edit</button>
                                    <button onClick={() => handleDeleteLandfill(landfill.id)} className="bg-Red text-white px-2 py-1 rounded">Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Dashboard;