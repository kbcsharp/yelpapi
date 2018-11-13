import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { YelpComponent } from "./yelp/yelp.component";

const routes: Routes = [{ path: "", component: YelpComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
