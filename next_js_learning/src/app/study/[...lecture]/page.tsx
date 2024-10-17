

export default function StudySegment({ params }: { params: { lecture: string } }) {
    return (
        <div>

            <h1>Day of collage {params.lecture[0]}</h1>
            <p>lecture no {params.lecture[1]}</p>
            <p>class no {params.lecture[2]}</p>
            <p>subject no {params.lecture[3]}</p>
        </div>
    )
}
