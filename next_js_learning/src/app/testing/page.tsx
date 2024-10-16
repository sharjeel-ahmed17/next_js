"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function EventFunction() {
    const [name, setName] = useState<string>('ahmed');

    const handleNameChange = () => {
        setName('arsalan ansari');
        console.log('name changed');
    }

    const router = useRouter();
    const navigate = (value: string) => {
        router.push(value);
    }

    const InnerComp = () => (
        <div>
            <h2>Inner component</h2>
            <p>This is an inner component</p>
        </div>
    )
    return (
        <div>
            {/* event and function */}




            <h1>event function {name}</h1>
            {/* <button className="bg-red-400 p-4 rounded-md ml-4" onClick={() => console.log('hello world')}> click me</button> */}

            {/* <button className="bg-red-400 p-4 rounded-md ml-4" onClick={() => setName('hello world')}> click me</button> */}

            {/* <button className="bg-red-400 p-4 rounded-md ml-4" onClick={handleNameChange}> click me</button> */}
            <button className="bg-red-400 p-4 rounded-md ml-4" onClick={() => handleNameChange()}> click me</button>

            {/* rounting */}




            {/* <button onClick={() => router.push('/about')} className="bg-red-400 p-4 rounded-md ml-4">go to about page</button>
            <button onClick={() => router.push('/contact')} className="bg-red-400 p-4 rounded-md ml-4">go to contact</button> */}
            <button onClick={() => navigate('/about')} className="bg-red-400 p-4 rounded-md ml-4">go to about page</button>
            <button onClick={() => navigate('/contact')} className="bg-red-400 p-4 rounded-md ml-4">go to contact</button>
            {InnerComp()}

            {<InnerComp />}
        </div >
    )
}
