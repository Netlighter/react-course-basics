import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { Main } from "./components/layout/Main";

function App() {
  return (

    // <React.Fragment>
    //  <Header />
    // </React.Fragment> analog
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
