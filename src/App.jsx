import Page from "./components/sections/page";
import Header from "./components/sections/Header";
import Navigation from "./components/sections/Navigation";
import Hero from "./components/sections/Hero";
import Reviews from "./components/sections/Reviews";

function App() {
  return <Page>
    <Header>
      <Navigation />
      <Hero />
      <Reviews />
    </Header>
  </Page>;
}

export default App;
