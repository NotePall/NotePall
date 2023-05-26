import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputTextareaModule,
    InputTextModule,
    DropdownModule,
    ButtonModule, 
    ToastModule
  ],
  exports: [
    InputTextareaModule,
    InputTextModule,
    DropdownModule,
    ButtonModule,
    ToastModule
  ]
})
export class NpSharedModule { }
