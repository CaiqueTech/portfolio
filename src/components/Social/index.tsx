import { SocialS } from "./style";
import { FiLinkedin, FiGithub, FiInstagram } from "react-icons/fi";

export const Social = () => {
  return (
    <SocialS>
      <div>
        <a href="https://www.linkedin.com/in/caique-morales/">
          <FiLinkedin />
        </a>
        <a href="https://github.com/CaiqueTech">
          <FiGithub />
        </a>
        <a href="https://www.instagram.com/caique_brad/">
          <FiInstagram />
        </a>
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
