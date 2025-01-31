export enum BlockTypes {
  p,
  h1,
  h2
}

export interface Block {
  type: BlockTypes
  content: string
}