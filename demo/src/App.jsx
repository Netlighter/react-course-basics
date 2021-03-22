import "./styles.css";
import { Book } from "./Book";
import { Preloader } from "./Preloader";

// JSX
// can't use js instructions (for switch if while)
// can use htmlFor
// can use (? x : y)
// instead of class use className
// use camelCase

const App = (props) => {
  return props.isLoading ? (
    <Preloader />
  ) : (
    <div>
      <Book name="1984" year="1983" price="1000">
        Sample text! (children prop)
      </Book>
      <Book name="" year="1983" price="2000" />
      <Book name="JS for simps" year="2022" price="45000" />
    </div>
  );
};

export default App;
