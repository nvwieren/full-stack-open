import CourseHeader from './CourseHeader'
import CourseContent from './CourseContent'

const Course = ({ course }) => {
    return (
        <>
            <CourseHeader name={course.name} />
            <CourseContent parts={course.parts} />
        </>        
    )
}

export default Course