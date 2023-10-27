const Card = ({title, value, total}) => {
   return (
      <div className="card h-36 w-60 shadow hover:bg-gray-50 cursor-pointer">
         <div className="text-sm font-bold text-center mt-2">
            {title}
         </div>
         <div className="flex justify-center items-center ">
            <div className="text-base text-center mt-6 me-4 text-primary ">
               <div
                  className="radial-progress"
                  style={{
                     '--value': (value/total*100)?.toFixed(0) ?? 0,
                     '--size': '64px',
                     '--thickness': '5px',
                  }}
               >
                 <div className="text-sm font-bold text-gray-400"> {(value/total*100)?.toFixed(1) ?? 0}%</div>
               </div>
            </div>
            <div className="text-4xl text-center mt-4">{value ?? 0}</div>
         </div>
      </div>
   );
};

export default Card;
