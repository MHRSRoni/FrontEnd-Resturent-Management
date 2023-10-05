import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '../contexts/AuthProvider';
import axios from 'axios';

import Button from "../components/ui/Button";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [auth, setAuth] = useAuth();
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await axios.post("/register", { name, email, password });
            console.log(data);
            if (data?.error) {
                alert(data.error);
            } else {
                localStorage.setItem("auth", JSON.stringify(data));
                setAuth({ ...auth, token: data.token, user: data.user });
                alert("Registration Successful");
                navigate('/')
            }

        } catch (error) {
            console.log(error);
            alert("Registration Failed. Try Again")
        }

    }

    return (
        <section style={{ height: "calc(100vh - 80px)" }} className="text-center py-10 flex justify-center items-center">
            <div className="w-full md:w-3/4 lg:w-2/4 xl:w-1/3 mx-auto py-10 shadow-2xl">
                <h2 className="font-bold text-2xl text-black mb-4">Register</h2>
                <div className="w-32 mx-auto h-0.5 mb-4 mt-0 bg-orange-500"></div>
                <form onSubmit={handleSubmit} className="mx-auto max-w-xs">
                    <div className="form-control mb-3">
                        <h2 className="text-left text-gray-500 mb-2">User Name</h2>
                        <input
                            type="text"
                            placeholder="Your Name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div className="form-control mb-3">
                        <h2 className="text-left text-gray-500 mb-2">Email</h2>
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div className="form-control mb-3">
                        <h2 className="text-left text-gray-500 mb-2">Password</h2>
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div className="form-control mt-6 mb-4">
                        <Button variant="basic" size="normal" type="button" text="Register" />
                    </div>
                    <h3 className="mt-2">Already have an account? <span className="text-orange-500"><Link to="/login">Login</Link></span></h3>
                </form>
            </div>
        </section>



    );




};

export default Register;
