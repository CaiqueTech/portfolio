import { SocialS } from "./style";
import { FiLinkedin, FiGithub, FiInstagram } from "react-icons/fi";

export const Social = () => {
  return (
    <SocialS>
      <div>
        <FiLinkedin />
        <FiGithub />
        <FiInstagram />
      </div>
      <div>
        <span
          onClick={() => {
            navigator.clipboard.writeText("dev.caiquemorales@gmail.com");
          }}
          title="Copy"
        >
          dev.caiquemorales@gmail.com
        </span>
      </div>
    </SocialS>
  );
};
