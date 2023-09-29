import React from 'react';

const Otp = () => {
    return (
        <section className="text-center py-10 " >
            <div
                style={{ height: "calc(100vh - 80px)" }}
                className='w-3/12 shadow-2xl mx-auto py-10 hover:outline outline-2  outline-offset-2 outline-blue-500 ...'>
                <h2 className='font-bold text-slate-950 mb-3'>OTP</h2>
                <div className='w-32 mx-auto h-0.5 mb-5 mt-0 bg-orange-300'></div>
                <form className='mx-auto'>
                    <div className="form-control w-full max-w-xs mx-auto mb-3">
                        <h2 className='mb-8 text-center text-slate-950 mb-4'>Enter OTP</h2>




                        <div className="flex space-x-2 mt-8">

                            <input type="text" className="w-12 h-12 bg-slate-200 text-center border rounded-md" maxlength="1" />
                            <input type="text" className="w-12 h-12 bg-slate-200 text-center border rounded-md" maxlength="1" />
                            <input type="text" className="w-12 h-12 bg-slate-200 text-center border rounded-md" maxlength="1" />
                            <input type="text" className="w-12 h-12 bg-slate-200 text-center border rounded-md" maxlength="1" />
                            <input type="text" className="w-12 h-12 bg-slate-200 text-center border rounded-md" maxlength="1" />
                            <input type="text" className="w-12 h-12 bg-slate-200 text-center border rounded-md" maxlength="1" />
                        </div>




                    </div>

                    <div className="form-control w-24 mx-auto mb-8">

                        <input className="btn btn-primary btn-sm  mt-8" type="submit" value="Verify" />

                    </div>


                </form>
            </div>
        </section>
    );
};

export default Otp;