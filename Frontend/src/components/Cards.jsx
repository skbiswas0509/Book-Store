import React from 'react'

function Cards({item}) {
    return (
        <>
            <div className='mt-20 my-3 p-3'>
                <div className="bg-base-100 w-92 h-200 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
                    <figure>
                        <img
                            src={item.image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge badge-secondary">{item.category}</div>
                        </h2>
                        <p>{item.title}</p>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions flex justify-between">
                            <div className="badge badge-outline">{item.price}$</div>
                            <div className="cursor-pointer rounded-full border-[2px] hover:bg-pink-500 hover:text-black px-2 py-1 duration-200">Buy Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards