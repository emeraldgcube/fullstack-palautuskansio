const Course = (props) => {
    const { course } = props

    const Header = (props) => {
        return (
            <div>
                <h3>{props.course.name}</h3>
            </div>
        )
    }
    
    const Content = (props) => {

        const Part = (props) => {
        return (
            <p>{props.part.name}  {props.part.exercises}</p>
        )
    
    }

        const Total = (props) => {
            const total = props.course.parts.reduce( (sum, part) => {
            return sum + part.exercises
            }, 0)
        return (
            <div>
                <b>Number of exercises {total}</b>
            </div>
        )
    }
    return (
        <div>
            <ul>
            {props.course.parts.map(part =>
            <Part key={part.id}
                part={part}
                />
                )}
            <Total course = {props.course}/>
            
            </ul>
            
        </div>
        )
    }
    return (<>
    <Header course ={course}/>
    <Content course = {course}/>
    </>)
    }

export default Course
