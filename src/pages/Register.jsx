import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';
import { useAuth } from '../contexts/AuthProvider';
import axios from 'axios';

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
    console.log(name, email, password)
    return (
        <section style={{ height: "calc(100vh - 80px)" }} className="text-center py-10 flex justify-center items-center">
            <div

                className='w-3/12 mx-auto py-10 shadow-2xl '>
                <h2 className='font-bold text-2xl text-black mb-6'>Register</h2>
                <div className='w-32 mx-auto h-0.5 mb-5 mt-0 bg-orange-500'></div>
                <form onSubmit={handleSubmit} className='mx-auto'>
                    <div className="form-control w-full max-w-xs mx-auto mb-3">
                        <h2 className='text-left text-gray-500 mb-4'>User Name</h2>


                        <input
                            type="text"
                            placeholder="Your Name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="input input-bordered w-full max-w-xs mx-auto" />

                    </div>
                    <div className="form-control w-full max-w-xs mx-auto mb-3">
                        <h2 className='text-left text-gray-500 mb-4'>Email </h2>

                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input input-bordered w-full max-w-xs mx-auto" />

                    </div>
                    <div className="form-control w-full max-w-xs mx-auto mb-3">
                        <h2 className='text-left text-gray-500 mb-4'>Password </h2>

                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="input input-bordered w-full max-w-xs mx-auto" />

                    </div>
                    <div className="form-control w-24 mx-auto mt-7">
                        <Button variant="basic" size="normal" type="button" text=" Register" />
                    </div>

                    <h3 className='mt-3'> Already have an account? <span className="text-orange-500"> <Link to='/sign-up'> Login</Link></span> </h3>

                </form>
            </div>
        </section>
    );
};

export default Register;