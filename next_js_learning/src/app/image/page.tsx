import React from 'react'
// import HeaderImg from './hello.jfif'
import HeaderImg from './arsalan.png';
import Image from 'next/image';
export default function ImagePage() {
    return (
        <div className=''>
            <div>

                <img src='https://tse3.mm.bing.net/th?id=OIP.j4KdqaXpnhbN94WzVyHUhAHaE8&pid=Api&P=0&h=220' alt='random pic' />
            </div>
            <div>
                <img src="/lion.jfif" alt="" />

            </div>
            <div>
                {/* <img src={HeaderImg} alt="" /> */}
                <Image
                    src={HeaderImg}
                    width={200}
                    height={300}
                    alt='hello world'
                />
                <Image
                    src='/main.png'
                    width={200}
                    height={300}
                    alt='hello world'
                />
                <Image
                    src='https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?size=626&ext=jpg&ga=GA1.1.2113030492.1729123200&semt=ais_hybrid'
                    width={200}
                    height={300}
                    alt='hello world'
                />
            </div>


        </div>
    )
}
