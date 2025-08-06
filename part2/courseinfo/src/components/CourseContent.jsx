const CourseContent = ({ parts }) => {
    const total = parts.reduce((total, part) => total += part.exercises, 0)
    return (
        <>
            {parts.map(part => 
                <p key={part.id}>{part.name} {part.exercises}</p>
            )}
            <p><strong>total of {total} exercises</strong></p>
        </>
    )    
}

export default CourseContent