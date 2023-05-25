export interface Note {
    title: string
    content: string
    tag: string
}

export interface NoteResponse {
    id: number
    title: string
    content: string
    tag: string
    created_at: string
    updated_at: string
    editor: number
  }
  