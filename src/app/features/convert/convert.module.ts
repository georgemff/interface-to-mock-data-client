import {NgModule} from "@angular/core";
import {ConvertComponent} from "./convert.component";
import {CommonModule} from "@angular/common";
import {CodeEditorModule} from "@ngstack/code-editor";
import {ButtonModule} from "../../shared/components/button/button.module";
import {RouterModule} from "@angular/router";
import {ApiService} from "../../api/api.service";
import {ConvertService} from "./convert.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {DropdownModule} from "../../shared/components/dropdown/dropdown.module";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [ConvertComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: ConvertComponent}
    ]),
    CodeEditorModule.forChild(),
    HttpClientModule,
    ButtonModule,
    DropdownModule,
    FormsModule,
  ],
  providers: [
    ApiService,
    ConvertService
  ]
})

export class ConvertModule {}
