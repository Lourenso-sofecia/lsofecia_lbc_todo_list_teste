import TodoApp from "./components/TodoApp";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ToasterProvider } from "./components/Toaster";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <Header />
      <main className="container flex-grow-1 ">
        <TodoApp />
      </main>
      <Footer />
      <ToasterProvider />
    </div>
  );
}

export default App;
