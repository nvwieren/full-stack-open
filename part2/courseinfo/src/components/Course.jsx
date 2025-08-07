const CourseHeader = ({ name }) => {
    return <h2>{name}</h2>
}

const CourseContent = ({ parts }) => {
    const total = parts.reduce((total, part) => total += part.exercises, 0)
    return (
        <>
            {parts.map(part => 
                <Part key={part.id} part={part} />
            )}
            <p><strong>total of {total} exercises</strong></p>
        </>
    )    
}

const Part = ({ part }) => {
    return <p key={part.id}>{part.name} {part.exercises}</p>
}

const Course = ({ course }) => {
    return (
        <>
            <CourseHeader name={course.name} />
            <CourseContent parts={course.parts} />
        </>        
    )
}

export default Course