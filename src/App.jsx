import Page from "./components/sections/page";
import Header from "./components/sections/Header";
import Navigation from "./components/sections/Navigation";
import Hero from "./components/sections/Hero";
import Reviews from "./components/sections/Reviews";
import Main from "./components/sections/Main";
import Logos from "./components/sections/Logos";
import Features from "./components/sections/Features";
import FAQs from "./components/sections/FAQs/FAQs";
import Testimonials from "./components/sections/Tesimonials/Testimonials";

function App() {
  return (
    <Page>
      <Header>
        <Navigation />
        <Hero />
        <Reviews />
      </Header>
      <Main>
        <Logos />
        <Features />
        <FAQs />
        <Testimonials />
      </Main>
    </Page>
  )
}

export default App;
