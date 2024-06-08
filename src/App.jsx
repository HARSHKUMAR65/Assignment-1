import Header from "./Component/Header";
import Home from "./Component/Home";
import HeadersTab from "./Component/Tabs";
import About from "./Component/BelowCoursol/About";
import Footer from "./Component/Footer";

const App =() => {
  return (
      <>
        <Header />
        <Home />
        < HeadersTab/>
        <About />
        <Footer />
      </>
  );
}

export default App;
