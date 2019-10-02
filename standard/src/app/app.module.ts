import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ContactComponent } from './core/contact/contact.component';
import { NewsletterComponent } from './core/newsletter/newsletter.component';
import { CategoriesComponent } from './core/categories/categories.component';
import { RecentpostsComponent } from './core/recentposts/recentposts.component';
import { SearchComponent } from './core/search/search.component';
import { SocialbuttonsComponent } from './core/socialbuttons/socialbuttons.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostsComponent,
    FooterComponent,
		NotfoundComponent,
		ContactComponent,
		NewsletterComponent,
		CategoriesComponent,
		RecentpostsComponent,
		SearchComponent,
		SocialbuttonsComponent,
		SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
