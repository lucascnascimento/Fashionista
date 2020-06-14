import React from "react";

import { AppFooter, SocialMedia } from "./styles";

import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <AppFooter>
      <span>Criado por Lucas Cordeiro Nascimento</span>
      <SocialMedia>
        <a
          href="https://github.com/lucascnascimento"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={24} color={"white"} />
        </a>
        <a
          href="https://www.linkedin.com/in/lucas-nascimento-36aaaa14b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} color={"white"} />
        </a>
      </SocialMedia>
      <span>2020</span>
    </AppFooter>
  );
}

export default Footer;
