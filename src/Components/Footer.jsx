import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer id="footer">
      <div>
        <img
          src="https://e0.pxfuel.com/wallpapers/581/334/desktop-wallpaper-cool-for-boys-cool-pics-thumbnail.jpg"
          alt="Founder"
        />
        <h2>Rigan Paul</h2>
        <p>Consistency and descipline are the keys to success</p>
      </div>
      <aside>
        <h2>Social Media</h2>
        <article>
          <a href="https://www.facebook.com/rigan.paul.5/">
            <BsFacebook />
          </a>
          <a href="https://l.messenger.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2F__rigan__%3Figsh%3DMXd4aGZmZDlxcnZzZQ%253D%253D&h=AT0XxwDidq3r__tqxKFnZB1TXIi5ZdwdZFmCUa3-FjYzUS8_Xck1jObWm_N6fTnuc_N2yZlVVLI8Aw70k8ebNebkzvlIeCITSAhHCmm8Xmv4XzOEmrXTTf9syX1_VzbgCRqSXQ">
            <BsInstagram />
          </a>
          <a href="https://l.messenger.com/l.php?u=https%3A%2F%2Fwww.linkedin.com%2Fin%2Frigan-paul-0a86271b4%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app&h=AT0XxwDidq3r__tqxKFnZB1TXIi5ZdwdZFmCUa3-FjYzUS8_Xck1jObWm_N6fTnuc_N2yZlVVLI8Aw70k8ebNebkzvlIeCITSAhHCmm8Xmv4XzOEmrXTTf9syX1_VzbgCRqSXQ">
            <BsLinkedin />
          </a>
          <a href="https://github.com/Rigan567">
            <BsGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
