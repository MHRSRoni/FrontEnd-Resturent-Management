import Card from '../common/presentional/Card';
import LineGraph from '../common/presentional/LineGraph';
import Title from '../common/presentional/Title';

const Overview = () => {
   return (
      <div className="w-full">
         <Title title={'Customer Overview'} />
         <div className="flex gap-8 justify-center mt-4">
            <Card title={'Total Customer'} value={2000} total={2000}/>
            <Card title={'New Customer'} value={100} total={2000}/>
            <Card title={'Reported Customer'} value={50} total={2000}/>
            <Card title={'Baned Customer'} value={24} total={2000}/>
         </div>
         <div className='flex mt-8 justify-start items-center mx-8'>
            <div className='flex flex-col gap-8'>
               <Card title={'No Order'} value={700} total={2000}/>
               <Card title={'5+ Order'} value={50} total={2000}/>
            </div>
            <div className="w-[40rem] shadow p-4  ms-10 ">
            <LineGraph />
         </div>
         </div>
      </div>
   );
};

export default Overview;
