import Page from "./components/sections/page";
import Header from "./components/sections/Header";
import Navigation from "./components/sections/Navigation";

function App() {
  return <Page>
    <Header>
      <Navigation />
    </Header>
    <footer>Footer content</footer>
  </Page>;
}

export default App;
