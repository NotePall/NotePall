import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast'
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { EditorModule } from 'primeng/editor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputTextareaModule,
    InputTextModule,
    DropdownModule,
    ButtonModule, 
    ToastModule,
    FormsModule,
    CheckboxModule,
    EditorModule
  ],
  exports: [
    InputTextareaModule,
    InputTextModule,
    DropdownModule,
    ButtonModule,
    ToastModule,
    FormsModule,
    CheckboxModule,
    EditorModule
  ]
})
export class NpSharedModule { }
