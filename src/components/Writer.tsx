import { createSignal, JSX, useContext } from 'solid-js'
import './../styles/writer.css'
import { RendererContext } from '../context'
const Writer = () => {
  
  const value = useContext(RendererContext)
  
  return (
    <div class="parent">
      <h1>Writer</h1>
      <textarea onInput={(event) => value?.setBlockStore(event.target.value)} />
    </div>
  )
}

export default Writer;