import React from "react";
import { Form, Input, Button, Card } from "antd";
import firebase from "../../../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
// import Courses from "./courses";
const firestore = firebase.firestore();
const auth = firebase.auth();
export default function Course() {
  const courseRef = firestore.collection("course");
  const query = courseRef.orderBy("dateCreated");
  const [courses] = useCollectionData(query, { idField: "id" });
  courses?.forEach((course) => {
    console.table(course);
  });

  const Upload = () => {
    const [Loading, setLoading] = React.useState(false);
    // const [upload, setUpload] = React.useState(false);

    const onFinish = async (values: any) => {
      const uid = auth.currentUser?.uid;
      await courseRef.add({
        title: values.title,
        description: values.description,
        dateCreated: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        image:
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdave4math.com%2Flearn-calculus-2%2F&psig=AOvVaw3CWc0a9mMQ3YJXSDfbuY_V&ust=1629963035014000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIiIq9nTy_ICFQAAAAAdAAAAABAD",
      });
      console.log(values, uid);
    };
    const onFinishFailed = (errorInfo: any) => {
      console.log("Failed:", errorInfo);
      setLoading(false);
    };
    return (
      <div className="course-upload">
        <Form
          name="upload_course"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <h3>upload course</h3>
          <Form.Item
            label="Course Title"
            name="title"
            rules={[
              { required: true, message: "Please input the course title!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[
              {
                required: true,
                message: "Please input your course description!",
              },
            ]}
          >
            <Input type="text" />
          </Form.Item>
          <Form.Item
            label="Cover Image"
            name="image"
            rules={[
              { required: true, message: "please add course cover image" },
            ]}
          >
            <Input type="file" />
          </Form.Item>

          <Form.Item>
            <Button loading={Loading} type="primary" htmlType="submit">
              Create Course
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  };

  return (
    <div>
      <Upload />
      {courses && (
        <div className="courses">
          {" "}
          <h1>Courses</h1>{" "}
          {courses.map((course) => {
            return (
              <Card bordered className="course">
                <h2>{course.title}</h2>
                <div className="image">
                  <img src={course.image} alt={course.title} />
                  <p>{course.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
