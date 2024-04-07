import {Component, EventEmitter, Input, Output} from "@angular/core";
import {DropdownInterface} from "./interfaces";


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})

export class DropdownComponent {

  @Input() labelText: string = ""
  @Input() options: DropdownInterface[] = []
  @Input() currentValue: number | string;

  @Output() valueChange: EventEmitter<string> = new EventEmitter();

  public changed(event: any) {
    this.valueChange.emit(event.target.value);
  }
}
