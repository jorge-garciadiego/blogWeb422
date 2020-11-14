import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [{path:"home", component: HomeComponent}, {path: "blog", component: BlogComponent}, 
        {path: "post", component: PostComponent}, {path: "", component: HomeComponent}, {path: "404", component: PageNotFoundComponent},
        {path:"**", redirectTo: "404"}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
