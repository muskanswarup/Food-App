import React from 'react';

function HeadlineCards(){
    return (
       <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-10'>
        {/* Card */}
        <div className='relative rounded-xl' >
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 text-white rounded-xl'>
                <p className='font-bold text-3xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
                <p className='px-2'>Through 8/26</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 rounded-xl'>Order Now</button>
            </div>

            <img src="https://images.pexels.com/photos/11425938/pexels-photo-11425938.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Poached_eggs" className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' />
        </div>

        <div className='relative rounded-xl' >
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 text-white rounded-xl'>
                <p className='font-bold text-3xl px-2 pt-4'>New Restaurants</p>
                <p className='px-2'>Added Daily!</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 rounded-xl'>Order Now</button>
            </div>

            <img src="https://images.pexels.com/photos/103124/pexels-photo-103124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Poached_eggs" className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' />
        </div>

        <div className='relative rounded-xl' >
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 text-white rounded-xl'>
                <p className='font-bold text-3xl px-2 pt-4'>We Deliver Desserts</p>
                <p className='px-2'>Tasty Treats</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 rounded-xl'>Order Now</button>
            </div>

            <img src="https://images.pexels.com/photos/3026810/pexels-photo-3026810.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Delicious_eggs" className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' />
        </div>
       </div>
    )
}

export default HeadlineCards;