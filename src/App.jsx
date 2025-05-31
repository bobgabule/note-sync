import Page from "./components/sections/page";
import Header from "./components/sections/Header";
import Navigation from "./components/sections/Navigation";
import Hero from "./components/sections/Hero";

function App() {
  return <Page>
    <Header>
      <Navigation />
      <Hero />
    </Header>
  </Page>;
}

export default App;
