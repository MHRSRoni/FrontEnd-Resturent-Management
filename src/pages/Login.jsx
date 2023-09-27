import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <section className="text-center py-10 " >
            <div className='w-3/12 mx-auto py-10 border-gray-600 w-75 bg-violet-200 hover:bg-green-200 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...'>
                <h2 className='font-bold text-slate-950 mb-6'>Log In</h2>

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

                        <input className="btn btn-primary btn-sm mb-5" type="submit" value="Log In" />

                    </div>
                    <h2>New to KACHCHI PALACE <Link to='/register'> Create a New Account</Link></h2>

                </form>
            </div>
        </section>
    );
};

export default Login;