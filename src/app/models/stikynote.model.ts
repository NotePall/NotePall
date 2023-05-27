export interface StickyNote {
    content: string
    color: string
    label: string
    favorite: boolean
    id?: number
    created_at?: string
    updated_at?: string
}

export interface stickNoteRequest{
    content: string
    color: string
    label: string
    favorite: boolean
}
