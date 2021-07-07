import { Button } from "antd";
import {
  FacebookOutlined,
  InstagramFilled,
  LinkedinFilled,
  TwitterCircleFilled,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import footerLogo from "../../assets/botomLogo.png";
export default function Footer() {
  return (
    <footer>
      <div className="image">
        <img src={footerLogo} alt="footer logo" />
      </div>
      <Button>Get Started</Button>
      <div className="links">
        <Button>ABOUT US</Button>
        <Button>TERMS AND CONDITIONS</Button>
        <Button>PRIVACY POLICY</Button>
        <Button>REVIEWS</Button>
      </div>
      <div className="social">
        <FacebookOutlined />
        <LinkedinFilled />
        <InstagramFilled />
        <TwitterCircleFilled />
      </div>
    </footer>
  );
}
