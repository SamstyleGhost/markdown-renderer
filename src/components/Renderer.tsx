import { createEffect, createSignal, Match, Show, Switch, useContext } from 'solid-js';
import { RendererContext } from '../context';
import './../styles/renderer.css'

const Renderer = () => {
  
  const value = useContext(RendererContext)
  const [type, setType] = createSignal("p")
  
  createEffect(() => {
    const currType = value?.blockStore().substring(0, value?.blockStore().indexOf(" "))

    if(currType === "#") {
      setType("h1")
    } else if(currType === "##") {
      setType("h2")
    } else {
      setType("p")
    }

  })

  return (
    <div class="parent">
      <Switch
        fallback={
          <p>{value?.blockStore()}</p>
        }
      >
        <Match when={type() === "h1"}>
          <h1>{value?.blockStore()}</h1>
        </Match>
        <Match when={type() === "h2"}>
          <h2>{value?.blockStore()}</h2>
        </Match>
      </Switch>
    </div>
  )
}

export default Renderer;