import React from "react";
import { Button } from "antd";
import homeContents from "./homeContents";
interface section {
  heading: string;
  p: string;
  btnTxt: string;
  img_url: any;
}
const Section: React.FC<section> = ({ heading, p, btnTxt, img_url }) => {
  return (
    <section>
      {img_url && <img src={img_url} alt="illustration" width="100%" />}
      <h2>{heading}</h2>
      <p> {p} </p>
      {btnTxt && (
        <div>
          {" "}
          <button
            onClick={() => console.log("click")}
            style={{ borderRadius: 10 }}
          >
            {btnTxt}
          </button>
        </div>
      )}
    </section>
  );
};
export default function Sections() {
  // homeContents: [
  //   {
  //     heading: string;
  //     p: string;
  //     btnTxt: string;
  //     img_url: any;
  //   }
  // ]
  return (
    <>
      {homeContents.map((content, i) => (
        <Section
          key={i}
          heading={content.heading}
          p={content.p}
          btnTxt={content.btnTxt}
          img_url={content.img_url}
        />
      ))}
    </>
  );
}
