const Courses = (props: any) => {
  //   const { title, image, description, dateCreated } = props.course;
  return (
    <div className="courses">
      <h1>Courses</h1>
      {props.course.map((course: any) => (
        <div key={course.uid} className="course">
          {" "}
          <h2>{course.title}</h2>
          <div className="image">
            <img src={course.image} alt={course.title} />
          </div>
          <p>{course.description}</p>
          <small> {course.dateCreated} </small>
        </div>
      ))}
    </div>
  );
};
export default Courses;
