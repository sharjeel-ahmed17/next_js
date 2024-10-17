

export default function UserDetails({ params }: { params: { userId: string } }) {
    return (
        <div>
            <h1>user name is {params.userId}</h1>
        </div>
    )
}
