import { createEffect, type Component } from "solid-js"
import { Block, BlockTypes } from "../types"

const BlockRenderer : Component<Block> = (props) => {
  
  const renderInlineElements = () => {
    const searchRegex: RegExp = /(\*[^\*]+\*)/g
    const parts = props.content.split(searchRegex)
    return (
      <>
        {parts.map(part => 
          part.match(searchRegex) ? <i>{part.replace(/\*/g, "")}</i> : part
        )}
      </>
    )
  }

  switch (props.type) {
    case BlockTypes.p:
      return <p>{renderInlineElements()}</p>;
    case BlockTypes.h1:
      return <h1>{props.content.substring(props.content.indexOf(" ") + 1)}</h1>;
    case BlockTypes.h2:
      return <h2>{props.content.substring(props.content.indexOf(" ") + 1)}</h2>;
    case BlockTypes.ul:
      return <li>{props.content.substring(props.content.indexOf(" ") + 1)}</li>;
    default:
      break;
  }
}

export default BlockRenderer