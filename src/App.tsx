import { Renderer, Writer } from "./components";
import { RendererContextProvider } from "./context";
import './styles/App.css'

function App() {
  return (
    <RendererContextProvider>
      <div class="parent">
        <Writer />
        <Renderer />
      </div>
    </RendererContextProvider>
  );
}

export default App;