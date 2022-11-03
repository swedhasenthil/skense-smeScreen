import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  submited: boolean = false;
  isInvalidUser: boolean = false;
  constructor(private fb: FormBuilder, private router: Router, private loginService: LoginService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }


  get f() { return this.formLogin.controls }

  login() {
    this.submited = true;

    const payload = {
      email_id: this.formLogin.value.userName,
      password: this.formLogin.value.password,
    };

    this.loginService.login(payload).subscribe((res: any) => {
      if (res) {
        console.log(res)
        const loginDetails = res['userDetails'];
        localStorage.setItem('loginDetails', res['userDetails'])
        localStorage.setItem('user_name', loginDetails.user_name);
        localStorage.setItem('jwtToken', res['access_token']);
        let role = loginDetails['roles'][1];
       // console.log(res['access_token'])
        this.isInvalidUser=false;
        this.toastr.success("User login successfully")
        switch (role.name) {
          case 'Admin':
            //this.router.navigate(['/user-dashboard'], { replaceUrl: true });
            break;
          case 'Analyst L1' || 'Analyst L2':
            // this.router.navigate(['/analyst/my-work'], { replaceUrl: true });
            break;
          case 'SME':
            this.router.navigate(['/sme/configure-projects'], { replaceUrl: true });
            break;
          case 'QC L1' || 'QC L2':
            //this.router.navigate(['/user-dashboard'], { replaceUrl: true });
            break;

          case 'Manager':
            //this.router.navigate(['/user-dashboard'], { replaceUrl: true });
            break;
          case 'Doc Specialist':
            //this.router.navigate(['/user-dashboard'], { replaceUrl: true });
            break;
          default:
            this.router.navigate(['/login'], { replaceUrl: true });
            break;
        }
      }
    },
    err => {
      this.toastr.error("Invalid User")
      this.isInvalidUser=true
     // this.toastr.error(err.error.message);
    }
    )
  }

}
