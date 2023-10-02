import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';

const Login = () => {
    return (
        <section style={{ height: "calc(100vh - 80px)" }} className="text-center py-10 flex justify-center items-center" >
            <div

                className='w-3/12 shadow-2xl mx-auto py-10 hover:outline outline-2  outline-offset-2 outline-blue-500 ...'>
                <h2 className='font-bold text-slate-950 mb-3'>Log In</h2>
                <div className='w-32 mx-auto h-0.5 mb-5 mt-0 bg-orange-500'></div>
                <form className='mx-auto'>
                    <div className="form-control w-full max-w-xs mx-auto mb-3">
                        <h2 className='text-left text-slate-950 mb-4'>Email</h2>


                        <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs mx-auto" />

                    </div>
                    <div className="form-control w-full max-w-xs mx-auto mb-3">
                        <h2 className='text-left text-slate-950 mb-4'>Password </h2>

                        <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs mx-auto" />
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