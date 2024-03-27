import {NgModule} from "@angular/core";
import {DropdownComponent} from "./dropdown.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [DropdownComponent],
  imports: [CommonModule],
  exports: [
    DropdownComponent
  ]
})

export class DropdownModule {}
