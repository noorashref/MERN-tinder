import "./App.css";
import Header from "./components/Header";
import Tindercards from "./components/TinderCards";
import SwipeButtons from "./components/SwipeButtons";

function App() {
  return (
    <div className="app">
      {/* header */}
      <Header />
      {/* Tindercards */}
      <Tindercards />
      {/* SwipButtons */}
      <SwipeButtons />
    </div>
  );
}

export default App;
