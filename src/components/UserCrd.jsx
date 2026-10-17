import React from 'react'

function UserCard({TeamData}) {

   let dataRender =  TeamData.map((dataObj)=>{
        return (
            <div key={dataObj.id} className=' border border-gray-100 shadow-xl w-full h-full rounded-2xl  relative '>
            <div className={`h-24 w-full bg-linear-to-r ${dataObj.gradient}  rounded-tr-2xl rounded-tl-2xl`}></div>
            <div className='h-25 w-25 rounded-full absolute top-1/8 left-5'>
                <img className='w-full h-full rounded-full object-cover' src={dataObj.img} alt="image" />
            </div>
            <div className='w-full mt-12 p-4 flex  '>
                <h2 className='text-xl font-bold'>{dataObj.name}</h2>
                <span className={`text-[10px] pt-1.5  px-4 ${dataObj.light} rounded-full relative left-10 ${dataObj.text}`}>{dataObj.role}</span>
            </div>

            <div className='w-full px-4 flex justify-baseline '>
                <span className='text-[12px]'>{dataObj.city}</span>
                <span className='text-[12px] relative left-10 '>{dataObj.year}</span>
            </div>

            <p className='p-4 text-[13px] xl:text-[14px]'  dangerouslySetInnerHTML={{ __html: dataObj.desc}} ></p>

            <div className='w-full px-4 flex gap-3 '>
                <span className={`text-[10px]  py-1 px-4 ${dataObj.light} rounded-full  ${dataObj.text}`}>{dataObj.skills[0]}</span>
                <span className={`text-[10px]  py-1 px-4 ${dataObj.light} rounded-full  ${dataObj.text}`}>{dataObj.skills[1]}</span>
                <span className={`text-[10px] py-1   px-4 ${dataObj.light} rounded-full  ${dataObj.text}`}>{dataObj.skills[2]}</span>
            </div>

            <div className='w-full px-4 my-5 grid grid-cols-2 gap-2 '>
                 <button className={`py-2 text-[14px]   ${dataObj.btn} rounded-xl text-white`}>View profile</button>
                 <button className={`py-2  text-[14px]   ${dataObj.text} border border-${dataObj.btn} rounded-xl`}>Contact Us</button>
            </div>

        </div>
        )
   })

  return (
    <div className='grid grid-cols-1 my-3 sm:my-6 sm:grid-cols-2 lg:grid-cols-3 gap-5 h-full w-[97%] md:w-[96%] lg:w-[90%] m-auto '>
        
            {dataRender}
    
        
    
    </div>
  )
}

export default UserCard