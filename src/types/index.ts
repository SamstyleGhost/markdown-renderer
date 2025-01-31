export enum BlockTypes {
  p,
  h1,
  h2,
  ul,
  break
}

export interface Block {
  type: BlockTypes
  content: string
}