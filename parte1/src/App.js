import logo from "./logo.svg";
import "./App.css";

const Mensaje = ({ msg, color }) => {
  return <h1 style={{ color: color }}>{msg}</h1>;
};
function App() {
  return (
    <div className="App">
      <Mensaje color="blue" msg="Iniciando un Proyecto" />
      <Mensaje color="green" msg="De React" />
      <Mensaje color="red" msg="Aún muy básico" />
    </div>
  );
}

export default App;
