import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ContactComponent } from './core/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, 
	{ path: 'posts/:slug', component: PostsComponent },
	{ path: 'contact', component: ContactComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }