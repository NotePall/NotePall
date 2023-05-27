import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageUtils } from '../utils/localstorage.utils';
import { StickyNote, StickyNoteRequest } from '../models/stikynote.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BaseResponse } from '../models/base.model';

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

  private baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) { }

  createStickyNote = (stickynote: StickyNoteRequest):Observable<StickyNote> => {
    return this.http.post<StickyNote>(`${this.baseUrl}/stickynote/`, stickynote, this.httpOption);
  }

  updateStickyNote = (stickynote: StickyNoteRequest, id: number):Observable<StickyNote> => {
    return this.http.post<StickyNote>(`${this.baseUrl}/stickynote/${id}`, stickynote)
  }

  deleteStickyNote = (id: number): Observable<BaseResponse> => {
    return this.http.delete<BaseResponse>(`${this.baseUrl}/stickynote/${id}`, this.httpOption)
  }

  getStickyNote = (): Observable<StickyNote[]> => {
    return this.http.get<StickyNote[]>(`${this.baseUrl}/srickynote`, this.httpOption)
  }

  getStickyNoteById = (id: number): Observable<StickyNote> => {
    return  this.http.get<StickyNote>(`${this.baseUrl}/stickynote/${id}`)
  }
}
