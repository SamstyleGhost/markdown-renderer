export enum BlockTypes {
  p,
  h1,
  h2,
  ul
}

export interface Block {
  type: BlockTypes
  content: string
}