export interface StickyNote {
    content: string
    color: string
    label: string
    favorite: boolean,
    id?: number
}

export interface stickNoteResponse extends StickyNote{
    created_at: string
    updated_at: string
}
