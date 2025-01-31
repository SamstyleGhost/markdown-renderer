import { createEffect, For, useContext } from 'solid-js';
import { RendererContext } from '../context';
import './../styles/renderer.css'
import { BlockTypes, Block } from '../types';
import { createStore } from 'solid-js/store';
import BlockRenderer from './BlockRenderer';

const BlockTypeNotations = new Map<string, BlockTypes>([
  ["#", BlockTypes.h1],
  ["##", BlockTypes.h2],
  ["-", BlockTypes.ul],
  ["---", BlockTypes.break]
]);

const Renderer = () => {
  
  const value = useContext(RendererContext)
  const [blocks, setBlocks] = createStore<Block[]>([])

  // So, I plan to have a middleman that converts the texts into blocks and then I can work on rendering the blocks themselves
  // Can maybe use refs to append the blocks to the parent

  const convertStringContentToBlocks = (currBlocks : string[]) => {
    
    let currBlocksToPush : Block[] = []
    
    for (let markdownContent of currBlocks) {
      const currBlock = {} as Block;
      const currTypeString = markdownContent.substring(
        0,
        markdownContent.indexOf(" ")
      );

      const currType = BlockTypeNotations.get(currTypeString);
      if (currType === undefined) currBlock.type = BlockTypes.p;
      else currBlock.type = currType;
      currBlock.content = markdownContent;
      
      currBlocksToPush.push(currBlock)
    } 
    
    setBlocks(currBlocksToPush)
  }

  createEffect(() => {
    if(!value) return

    const currContent = value.blockStore();
    const currBlocks = currContent.split("\n");
    convertStringContentToBlocks(currBlocks)
    
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
      <div class='renderer_inner_container'>
        <For each={blocks}>
          {(item, index) => (
            <BlockRenderer type={item.type} content={item.content} />
          )}
        </For>
      </div>
    </div>
  );
}

export default Renderer;