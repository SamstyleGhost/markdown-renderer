import { Accessor, createContext, createSignal, Setter, useContext } from "solid-js";
import { createStore } from "solid-js/store"

interface ContextType {
  blockStore: Accessor<string>,
  setBlockStore: Setter<string>
}

export const RendererContext = createContext<ContextType>();

export const RendererContextProvider = (props) => {
  
  const [blockStore, setBlockStore] = createSignal<string>("")

  return (
    <RendererContext.Provider value={{
      blockStore,
      setBlockStore
    }}>
      {props.children}
    </RendererContext.Provider>
  )
}