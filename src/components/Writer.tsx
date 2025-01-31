import { useContext } from 'solid-js'
import './../styles/writer.css'
import { RendererContext } from '../context'
const Writer = () => {
  
  const value = useContext(RendererContext)
  
  const handleChange = (
    event: InputEvent & {
      currentTarget: HTMLTextAreaElement;
      target: HTMLTextAreaElement;
    }
  ) => {
    value?.setBlockStore(event.target.value);
  };
  
  return (
    <div class="writer_container">
      <h1>Writer</h1>
      <textarea onInput={handleChange} rows={40} />
    </div>
  )
}

export default Writer;