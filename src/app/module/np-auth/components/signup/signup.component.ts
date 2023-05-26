import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/service/auth.service';
import { addToMessageService } from 'src/app/utils/message.utils';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  registerForm!: FormGroup;
  constructor(
    private router: Router,
    private authService: AuthService,
    private fb: FormBuilder,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      confirm_password: new FormControl('')
    })
  }

  gotToSigInPage = () => {
    this.router.navigate(['/auth/login'])
  }

  registerUser = () => {
    const userData: User = {
      username: this.registerForm.get(['username'])?.value,
      email: this.registerForm.get(['email'])?.value,
      password: this.registerForm.get(['password'])?.value
    }

    console.log(userData)

    this.authService.register(userData).subscribe({
      next: res => {
        // call the message service
        addToMessageService(this.messageService, 'success', 'Success', `Registration Successfull`)
      },
      error: err => {
        //  report error to user
        addToMessageService(this.messageService, 'warn', 'Error', `Unable To Create An Account\n Check your Cridentials`)
      }
    })
  }

}
