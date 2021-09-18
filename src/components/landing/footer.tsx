import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { Button } from "antd";
import {
  FacebookOutlined,
  InstagramFilled,
  LinkedinFilled,
  TwitterCircleFilled,
} from "@ant-design/icons";
import footerLogo from "../../assets/bottomlogo.png";
import { actionCreators } from "../../state";
export default function Footer() {
  const dispatch = useDispatch();
  const { displaySigUp } = bindActionCreators(actionCreators, dispatch);

  return (
    <footer>
      <div className="image">
        <img src={footerLogo} alt="footer logo" />
      </div>
      <Button shape="round" className="start" onClick={displaySigUp}>
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
