import {GoCopy} from 'react-icons/go'


const Copy = () => {

    const clickHandler = (e) => {
        const data = e.target?.previousSibling?.data
        navigator.clipboard.writeText(data)
    }

    return (
        <GoCopy onClick={clickHandler} className='inline-block cursor-pointer ms-1 hover:text-secondary mb-[6px]'/>
    );
};

export default Copy;