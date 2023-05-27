import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageUtils } from '../utils/localstorage.utils';
import { StickyNote } from '../models/stikynote.model';

@Injectable({
  providedIn: 'root'
})
export class StickynoteService {
  private httpOption = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : `Bearer ${LocalStorageUtils.readToken()}`
    })
  }
  constructor(private http: HttpClient) { }

  createStickyNote = (stickynote: StickyNote) => {

  }

  updateStickyNote = (stickynote: StickyNote) => {
    
  }

  deleteStickyNote = (id: number) => {
    
  }

  getStickyNote = () => {
    
  }

  getStickyNoteById = (id: number) => {
    
  }
}
