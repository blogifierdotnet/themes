import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BlogService } from './blog.service';

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(private blogService: BlogService, private router: Router) { }

	canActivate(): Observable<boolean> | Promise<boolean> | boolean {
		this.blogService.getUser().subscribe(
			result => {
				if (result && result.isAuthenticated && result.isAdmin) {
					return true;
				}
				else {
					this.router.navigate(['notfound']);
					return false;
				}
			}
		);
		return true;
	}
}