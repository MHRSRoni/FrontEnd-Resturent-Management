import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <section className="text-center py-10 " >
            <div
                style={{ height: "calc(100vh - 80px)" }}
                className='w-3/12 shadow-2xl mx-auto py-10 hover:outline outline-2  outline-offset-2 outline-blue-500 ...'>
                <h2 className='font-bold text-slate-950 mb-3'>Sign Up</h2>
                <div className='w-32 mx-auto h-0.5 mb-5 mt-0 bg-orange-300'></div>
                <form className='mx-auto'>
                    <div className="form-control w-full max-w-xs mx-auto mb-3">
                        <h2 className='text-left text-slate-950 mb-4'>Email</h2>


                        <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs mx-auto" />

                    </div>
                    <div className="form-control w-full max-w-xs mx-auto mb-3">
                        <h2 className='text-left text-slate-950 mb-4'>Password </h2>

                        <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs mx-auto" />

                    </div>

                    <div className="form-control w-24 mx-auto mt-7">

                        <input className="btn btn-primary btn-sm mb-5" type="submit" value="Sign Up" />

                    </div>
                    <h2>New to KACHCHI PALACE <Link to='/register'> Create a New Account</Link></h2>

                </form>
            </div>
        </section>
    );
};

export default Login;