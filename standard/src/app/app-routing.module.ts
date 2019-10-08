import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SettingsComponent } from './settings/settings.component';
import { AuthGuard } from './core/auth.guard';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'posts/:slug', component: PostsComponent },
	{
		path: 'settings',
		component: SettingsComponent,
		canActivate: [AuthGuard],
		data: { claimType: 'isAdmin' }
	},
	{ path: '**', component: NotfoundComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }