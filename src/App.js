import "./App.css";
import { ThemeProvider } from "@material-ui/styles";
import HomePage from "./components/ui/HomePage";
import theme from "./components/Theme";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <HomePage />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
