import Preview from "./components/Preview/Preview";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";

import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <main className="main">
        <Preview />
        <Form />
      </main>
    </div>
  );
}

export default App;
