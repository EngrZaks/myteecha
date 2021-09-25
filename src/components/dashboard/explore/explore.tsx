import { Card, Col, Row, Skeleton } from "antd";
import React from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import firebase from "../../../firebase";
import Complete from "./search";

const firestore = firebase.firestore();

export default function Explore({ user }: { user: any }) {
  const courseRef = firestore.collection("course");
  const query = courseRef.orderBy("dateCreated");
  const [courses] = useCollectionData(query, { idField: "id" });
  courses?.forEach((course) => {
    console.table(course);
  });
  return (
    <div className="content explore">
      <h1>Explore all of MyTeecha</h1>
      <p>hello welcome </p>
      <Complete />
      {courses ? (
        <Row gutter={16}>
          {courses.map((course) => {
            return (
              <Col xs={24} sm={12} lg={6} style={{ marginBottom: 10 }}>
                <Card
                  size="small"
                  hoverable
                  title={course.title}
                  cover={<img src={course.image} alt={course.title} />}
                >
                  {course.description}
                </Card>
              </Col>
            );
          })}
        </Row>
      ) : (
        <Skeleton loading />
      )}
    </div>
  );
}
