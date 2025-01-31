import type { Component } from "solid-js"
import { Block } from "../types"

const BlockRenderer : Component<Block> = (props) => {
  
  if(props.type === 0) {
    return <p>{props.content}</p>
  }

  if(props.type === 1) {
    return <h1>{props.content.substring(props.content.indexOf(" ") + 1)}</h1>
  }

  if(props.type === 2) {
    return <h2>{props.content.substring(props.content.indexOf(" ") + 1)}</h2>
  }
}

export default BlockRenderer