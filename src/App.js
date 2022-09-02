import "./App.css";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="d-flex container">
        <Sidebar />
        <Container />
      </div>
    </div>
  );
}

export default App;
