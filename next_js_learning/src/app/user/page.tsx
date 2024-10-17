import Link from "next/link";


export default function UserList() {
    return (
        <div>
            <h1>all user list</h1>
            <div>
                <ul className="ml-5 mt-4">
                    <li><Link href='user/sharjeel'>sharjeel</Link></li>
                    <li><Link href='user/arsalan'>arsalan</Link></li>
                    <li><Link href='user/moin'>moin</Link></li>
                    <li><Link href='user/usman'>usman</Link></li>
                    <li><Link href='user/haris'>haris</Link></li>
                    <li><Link href='user/ahmed'>ahmed</Link></li>
                </ul>
            </div>
        </div>
    )
}
