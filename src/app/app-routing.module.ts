import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConvertComponent} from "./features/convert/convert.component";

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "convert"},
  {
    path: "convert",
    loadChildren: () => import("./features/convert/convert.module").then(m => m.ConvertModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
