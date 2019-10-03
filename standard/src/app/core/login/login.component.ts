import { Component, OnInit } from '@angular/core';
import { BlogService, IBlogSettings, AppUserAuth, AppUser } from '../../core/blog.service';
import { environment } from '../../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: AppUser = new AppUser();
	securityObject: AppUserAuth = null;
	returnUrl: string;
	
	root: string;
	settings: IBlogSettings;
  
	constructor(private blogService: BlogService, 
		private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
		this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
		this.root = environment.apiEndpoint;
    this.blogService.getSettings().subscribe(
      result => { this.settings = result; }
    );
  }

  login() {
    this.blogService.login(this.user).subscribe(
			result => { 
				this.securityObject = result; 
				if (this.returnUrl) {
          this.router.navigateByUrl(this.returnUrl);
        }
			}
		);
  }  
}