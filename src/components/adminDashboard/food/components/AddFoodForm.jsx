import { useState } from 'react';


const InputField = ({type, label, name, value, onChange}) => {

    const [visable, setVisable] = useState(false)
    const [active, setActive] = useState(false)

    const BlurHandler = (e) =>{
        if(e.target.value === ""){
            setVisable(false);
        }
        setActive(false);
    }

    return (
        <div className='h-[66px] relative mt-[-10px]'>
            <label>
                {
                     <p className={`absolute z-10 top-0 left-0 ${visable ? 'translate-y-[10px] translate-x-3 text-sm  bg-white w-fit px-1 transition-all duration-400' :'translate-y-[28px] translate-x-7  duration-400 w-fit transition-all'} ${active ? 'text-secondary' : 'text-gray-400'}`}>{label}</p>
                }
                <input type={type} className={` block shadow border bg-white w-full rounded-md px-4 py-2 outline-0  text-base focus:border-primary border-gray-400 absolute top-5 z-0`}
                onFocus={()=>{setVisable(true);setActive(true)}} onBlur={(e)=>BlurHandler(e)} value={value} onChange={onChange} name={name}/>
            </label>
        </div>
    )
}

const TextField = ({label, name, value, onChange}) => {

    const [visable, setVisable] = useState(false)
    const [active, setActive] = useState(false)


    const BlurHandler = (e) =>{
        if(e.target.value === ""){
            setVisable(false);
        }
        setActive(false);
    }

    return (
        <div className='relative h-40 mt-[-10px]'>
            <label>
                {
                     <p className={`absolute  z-10 top-0 left-0 ${visable ? 'translate-y-[10px] translate-x-3 text-sm  bg-white w-fit px-1 transition-all duration-400' :'translate-y-[28px] translate-x-7  duration-400 w-fit transition-all'} ${active ? 'text-secondary' : 'text-gray-400'}`}>{label}</p>
                }
                <textarea rows='5' type='text' className={` block shadow border bg-white w-full rounded-md px-4 py-2 outline-0  text-base focus:border-primary border-gray-400 absolute top-5 z-0`}
                onFocus={()=>{setVisable(true);setActive(true)}} onBlur={(e)=>BlurHandler(e)} value={value} onChange={onChange} name={name}/>
            </label>
        </div>
    )
}

const DropDown = ({name, value, onChange}) => {


    return (
        <div className='form-control h-[66px] mt-4 mb-[-12px]'>
            <select className='select border-gray-400 shadow outline-none' value={value} onChange={onChange} name={name}>
                <option disabled selected className='text-primary'>Choose the category </option>
                <option value='meat'>Meat</option>
                <option value='vegetarian'>Vegetarian</option>
                <option value='beverage'>Beverage</option>
                <option value='daily-special'>Daily Special</option>
                <option value='deals'>Deals</option>
            </select>

        </div>
    )
}


const SubmitButton = ({active, text}) => {


    return (
        <div className={`w-full bg-primary mt-4 py-2 text-center rounded-md ${active ? 'text-black cursor-pointer' : 'text-gray-400 cursor-not-allowed'}`}>
            {text}
        </div>
    )
}








const AddFoodForm = () => {

    const [formData,setFormData] = useState({}) 


    const changeHandler = (e) => {

        setFormData({...formData,[e.target.name] : e.target.value});
    }


    return (
        <div>
            <div className='w-1/2 mx-auto mt-4 shadow-md card  px-4 pt-4 pb-8 border border-gray-100'>
                <div className='mx-auto'>
                    <h4 className='text-start text-primary border border-primary w-fit px-2 rounded-lg shadow-primary shadow-sm mb-1'>ADD FOOD FORM</h4>
                </div>
                <InputField type='text' label='Name' onChange={changeHandler} name='name'/>
                <InputField type='text' label='Image Url' onChange={changeHandler} name='img'/>
                <TextField label='Description' onChange={changeHandler} name='description' />
                <DropDown name='category' onChange={changeHandler} />
                <div className='flex'>
                    <div className='w-1/2 inline-block me-2'>
                        <InputField type='text' label='Price' onChange={changeHandler} name='price' />
                    </div>
                    <div className='w-1/2 inline-block ms-2'>
                        <InputField type='text' label='Calories' onChange={changeHandler} name='calories' />
                    </div>
                </div>
                <div className='flex'>
                    <div className='w-1/2 inline-block me-2'>
                        <InputField type='text' label='Discount' onChange={changeHandler} name='discount' />
                    </div>
                    <div className='w-1/2 inline-block ms-2'>
                        <InputField type='text' label='Percentage' onChange={changeHandler} name='percentage' />
                    </div>
                </div>
                <div className='flex'>
                    <div className='w-1/2 inline-block me-2'>
                        <SubmitButton text='Preview' active={true} />
                    </div>
                    <div className='w-1/2 inline-block ms-2'>
                        <SubmitButton text='Add Food' active={false} />
                    </div>
                </div>
                
                
            </div>
        </div>
    );
};

export default AddFoodForm;