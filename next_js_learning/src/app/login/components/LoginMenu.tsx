"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function LoginMenu() {
    const pathName = usePathname();
    const conditionLayout = pathName !== "/login/login-teacher" ? <LoginNavBarItem /> : <Link href='/login'>go to main</Link>
    return (
        <div className="flex justify-center">

            {conditionLayout}

        </div>
    )
}


function LoginNavBarItem() {
    return (
        <ul className="flex gap-3">
            <li>
                <Link href='/login'>login navbar</Link>

            </li>
            <li>
                <Link href='/login'>login main</Link>
            </li>
            <li>
                <Link href='/login/login-teacher'>login teacher</Link>
            </li>
            <li>
                <Link href='/login/login-student'>login student</Link>
            </li>
        </ul>
    )
}