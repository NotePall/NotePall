import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserRequest } from 'src/app/models/user.model';
import { AuthService } from 'src/app/service/auth.service';
import { LocalStorageUtils } from 'src/app/utils/localstorage.utils';
import { addToMessageService } from 'src/app/utils/message.utils';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  loginFormData!: FormGroup

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.loginFormData = this.fb.group({
      username: new FormControl(''),
      password: new FormControl('')
    })
  }

  gotToSignUpPage = () => {
    this.router.navigate(['/auth/signup'])
  }

  login = () => {
    const loginForm: UserRequest = {
      username: this.loginFormData.get(['username'])?.value,
      password: this.loginFormData.get(['password'])?.value,
    }

    console.log(loginForm)

    this.authService.login(loginForm).subscribe({
      next: res => {
        LocalStorageUtils.deleteToken()
        LocalStorageUtils.writeToken(res.token);
        addToMessageService(this.messageService, 'success', 'Success', `Successfull Login`)
        this.router.navigate(['/user/stickynote'])
      },
      error: err => {
        console.log(err);
        addToMessageService(this.messageService, 'error', 'Error', `Wrong Credentials`)
      }
    })

  }
}
