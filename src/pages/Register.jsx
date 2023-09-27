import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <section className="text-center py-10" >
            <div>
                <h2 className='font-bold text-primary mb-6'>Register</h2>

                <form className='mx-auto'>
                    <div className="form-control w-full max-w-xs mx-auto mb-3">
                        <h2 className='text-left text-gray-500 mb-4'>User Name</h2>


                        <input type="text" placeholder="Enter Your User Name" className="input input-bordered w-full max-w-xs mx-auto" />

                    </div>
                    <div className="form-control w-full max-w-xs mx-auto mb-3">
                        <h2 className='text-left text-gray-500 mb-4'>Email </h2>

                        <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs mx-auto" />

                    </div>
                    <div className="form-control w-full max-w-xs mx-auto mb-3">
                        <h2 className='text-left text-gray-500 mb-4'>Password </h2>

                        <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs mx-auto" />

                    </div>
                    <div className="form-control w-24 mx-auto mt-7">

                        <input className="btn btn-primary btn-sm" type="submit" value="Register" />

                    </div>


                    <h2>Already have an account KACHCHI PALACE <Link to='/sign-up'>Log In</Link></h2>

                </form>
            </div>
        </section>
    );
};

export default Register;