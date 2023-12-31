import { useState } from "react";
import CustomLink from "../CustomLink";
import { Container, Content, Logo, MenuLinks } from "./styles";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <Content>
        <Logo>
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_2_27)">
              <path
                d="M16.3653 54.6348C8.21274 49.7506 1.26955 45.4403 0.936035 45.0565C0.160311 44.1637 0.166708 43.2807 0.955796 42.3206C1.30021 41.9016 4.53709 37.3747 8.14886 32.2608C18.6952 17.3283 29.7034 1.99233 30.3622 1.31467C30.7264 0.940041 31.4245 0.627345 32.0987 0.536917C33.1475 0.396242 33.2924 0.458789 34.1736 1.43295C34.6946 2.00894 38.7289 7.5739 43.1387 13.7995C47.5486 20.0252 53.4553 28.3049 56.2648 32.1989C64.1911 43.1847 63.738 42.4726 63.5753 43.6886C63.4941 44.2956 63.1697 44.9939 62.8081 45.3399C62.4635 45.6696 55.5675 49.8958 47.4837 54.7315C36.9387 61.0394 32.5601 63.5225 31.987 63.5195C31.4222 63.5164 26.8468 60.9143 16.3653 54.6348ZM28.8331 22.8753L28.7627 12.1825L18.1444 26.9986C12.3044 35.1475 7.51392 41.9809 7.49889 42.1839C7.4832 42.3966 11.9851 45.2266 18.1171 48.8587L28.7627 55.1644L28.8331 44.3663C28.8719 38.4273 28.8719 28.7564 28.8331 22.8753ZM46.9572 48.0649C52.2139 44.9424 56.2405 42.3848 56.225 42.1783C56.1997 41.8427 36.0518 13.4935 35.2009 12.5964C34.8814 12.2594 34.8266 15.3464 34.8266 33.7051V55.2085L36.2443 54.3974C37.024 53.9513 41.8448 51.1017 46.9572 48.0649Z"
                fill="#0C0C0C"
              />
            </g>
            <defs>
              <clipPath id="clip0_2_27">
                <rect width="64" height="64" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <h2>PRISMA</h2>
        </Logo>
        <MenuLinks isOpen={isOpen}>
          <AiOutlineClose size={24} onClick={() => setIsOpen(false)} />
          <AiOutlineMenu onClick={() => setIsOpen(true)} size={24} />
          <CustomLink url="/">Quadrinhos</CustomLink>
          <CustomLink url="/authors">Autores</CustomLink>
        </MenuLinks>
      </Content>
    </Container>
  );
};

export default Header;
