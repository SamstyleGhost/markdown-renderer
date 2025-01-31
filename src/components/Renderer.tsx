import { createEffect, createSignal, Match, Switch, useContext } from 'solid-js';
import { RendererContext } from '../context';
import './../styles/renderer.css'

const Renderer = () => {
  
  const value = useContext(RendererContext)
  const [type, setType] = createSignal("p");
  const [content, setContent] = createSignal<string>("");
  
  createEffect(() => {
    if (value) {
      const currContent = value.blockStore()
      const currType = currContent.substring(0, currContent.indexOf(" "));
      
      setContent(currContent.substring(currContent.indexOf(" ") + 1))

      if (currType === "#") {
        setType("h1");
      } else if (currType === "##") {
        setType("h2");
      } else {
        setType("p");
      }
    }

  })
  
  /*
    Also, checking for the type on every change feels like a bit tedious, will need to see if there is any way to optimize that
    Block: {
      type: p | h1 | h2 | img
      content: renderContent: { will need to check for italics & bold characters, etc } // Basically building a Lexical analyser here
    }
  */

  return (
    <div class="renderer_container">
      <h1>Renderer</h1>
      <Switch
        fallback={
          <p>{content()}</p>
        }
      >
        <Match when={type() === "h1"}>
          <h1>{content()}</h1>
        </Match>
        <Match when={type() === "h2"}>
          <h2>{content()}</h2>
        </Match>
      </Switch>
    </div>
  )
}

export default Renderer;