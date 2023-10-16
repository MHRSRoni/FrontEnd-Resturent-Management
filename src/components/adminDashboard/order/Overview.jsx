import Card from '../common/presentional/Card';
import LineGraph from '../common/presentional/LineGraph';
import Title from '../common/presentional/Title';

const Overview = () => {
    return (
        <div>
            <Title title={'Order Overview'} />
            <div className='flex gap-8 mt-4 mx-8 justify-start flex-wrap'>
                <Card title={'Total Order'} value={200} total={200} />
                <Card title={'Delevired Order'} value={150} total={200}/>
                <Card title={'Canceled Order'} value={10} total={200}/>
                <Card title={'Refunded Order'} value={5} total={200}/>
                <Card title={'Pending Order'} value={30} total={35}/>
                <Card title={'Shiping Order'} value={5} total={35}/>
            </div>
            <div className='flex gap-8 mt-8 mx-8 justify-start flex-wrap'> 
                <Card title={'Cash On Delevery'} value={140} total={200}/>
                <Card title={'Card'} value={10} total={200}/>
                <Card title={'Mobile Banking'} value={45} total={200}/>
                <Card title={'Net Banking'} value={5} total={200}/>
            </div>
        </div>
    );
};

export default Overview;