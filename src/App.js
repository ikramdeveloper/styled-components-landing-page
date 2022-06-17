import { ThemeProvider } from "styled-components";

import { Header, Card, Footer } from "./components";
import { Container } from "./components/styles/Container.styled";
import GlobalStyles from "./components/styles/Global.styled";
import content from "./content";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#033",
  },
  mobile: "768px",
};

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </Container>
        <Footer />
      </ThemeProvider>
    </>
  );
};
export default App;
