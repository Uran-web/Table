import "./App.css";
import Table from "./components/Table";

function App() {
  return (
    <div className="App">
      <div
        style={{
          paddingBottom: 20,
          fontWeight: "bold",
          fontSize: 24,
          textAlign: "start",
        }}
      >
        Referrals - 345
      </div>
      <Table />
    </div>
  );
}

export default App;
