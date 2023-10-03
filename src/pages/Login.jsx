import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';
import { useAuth } from '../contexts/AuthProvider';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [auth, setAuth] = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("/login", { email, password });
            console.log(data);
            if (data?.error) {
                alert(data.error);
            } else {
                localStorage.setItem("auth", JSON.stringify(data));
                setAuth({ ...auth, token: data.token, user: data.user });
                navigate('/');
                // navigate(location.state || `/dashboard/${data?.user.role == 1 ? "admin" : "user"}`);
            }

        } catch (error) {
            console.log(error);
            alert("Login Failed Please Try Again!")
        }

    }
    return (
        <section style={{ height: "calc(100vh - 80px)" }} className="text-center py-10 flex justify-center items-center" >
            <div

                className='w-3/12 mx-auto py-10 shadow-2xl '>
                <h2 className='font-bold text-2xl text-slate-950 mb-3'>Log In</h2>
                <div className='w-32 mx-auto h-0.5 mb-5 mt-0 bg-orange-500'></div>
                <form onSubmit={handleSubmit} className='mx-auto'>
                    <div className="form-control w-full max-w-xs mx-auto mb-3">
                        <h2 className='text-left text-slate-950 mb-4'>Email</h2>


                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input input-bordered w-full max-w-xs mx-auto" />

                    </div>
                    <div className="form-control w-full max-w-xs mx-auto mb-3">
                        <h2 className='text-left text-slate-950 mb-4'>Password </h2>

                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="input input-bordered w-full max-w-xs mx-auto" />
                        <p className='text-left mt-3 text-orange-500'>Forgot Password</p>

                    </div>

                    <div className="form-control w-24 mx-auto mt-7">


                        <Button className="btn btn-outline btn-warning" variant="basic" size="normal" type="button" text=" Log In" />

                    </div>
                    <h3 className='mt-3'> Don't have an account? <span className="text-orange-500"> <Link to='/register'> Create Account</Link></span> </h3>

                </form>
            </div>
        </section>
    );
};

export default Login;