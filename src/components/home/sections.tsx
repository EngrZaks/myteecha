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
  //custom class names

  const customClass: string = heading
    .toLocaleLowerCase()
    .includes("course interactive")
    ? "interactive"
    : heading.toLocaleLowerCase().includes("engage")
    ? "engage"
    : heading.toLocaleLowerCase().includes("varieties")
    ? "varieties"
    : heading.toLocaleLowerCase().includes("learning")
    ? "student"
    : "";

  return (
    <section className={`${customClass}`}>
      {img_url && (
        <div className="image">
          {" "}
          <img src={img_url} alt="illustration" width="100%" />
        </div>
      )}
      <article className={`${customClass}`}>
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
      </article>
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
