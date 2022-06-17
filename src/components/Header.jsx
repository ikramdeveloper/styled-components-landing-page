import { StyledHeader, Nav, Logo, Image } from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";
import { Button } from "./styles/Button.styled";
import { Flex } from "./styles/Flex.styled";

import LogoImg from "../images/logo.svg";
import IllustrationMockups from "../images/illustration-mockups.svg";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src={LogoImg} alt="logo" />
          <Button>Try it free</Button>
        </Nav>
        <Flex>
          <div>
            <h1>Build the community your fans will love</h1>

            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>

            <Button bg="#ff0099" color="#fff">
              Get Started For Free
            </Button>
          </div>

          <Image src={IllustrationMockups} alt="illustration" />
        </Flex>
      </Container>
    </StyledHeader>
  );
};
export default Header;
