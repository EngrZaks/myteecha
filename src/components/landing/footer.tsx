import { Button } from "antd";
import {
  FacebookOutlined,
  InstagramFilled,
  LinkedinFilled,
  TwitterCircleFilled,
} from "@ant-design/icons";
import footerLogo from "../../assets/bottomlogo.png";
export default function Footer() {
  return (
    <footer>
      <div className="image">
        <img src={footerLogo} alt="footer logo" />
      </div>
      <Button shape="round" className="start">
        Get Started
      </Button>
      <div className="links">
        <div className="link">ABOUT US</div>
        <div className="link">TERMS AND CONDITIONS</div>
        <div className="link">PRIVACY POLICY</div>
        <div className="link">REVIEWS</div>
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
