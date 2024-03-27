import {Component} from "@angular/core";
import {CodeModel} from "@ngstack/code-editor";
import {codeModel, options} from "./editor.config";
import {ApiService} from "../../api/api.service";
import {DropdownInterface} from "../../shared/components/dropdown/interfaces";
import {dropdownData} from "./data";


@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.scss']
})

export class ConvertComponent {
  dropdownOptions: DropdownInterface[] = dropdownData;
  codeString: string = codeModel.value;
  convertedResponse: any;
  theme = 'vs-dark';

  codeModel: CodeModel = codeModel;
  options: any = options;

  numberOfElements: number = 50;

  previewTableHeaders: string[] = [];
  previewTableData: any[] = [];

  constructor(
    private apiService: ApiService
  ) {
  }


  onCodeChanged(value: string) {
    this.codeString = value;
    let mapped = value.split("interface")
      .map(i => i.trim())
      .map(i => i.replace(/\n|\s/g, ""))
      .filter(i => !!i)

    this.codeString = mapped.join(" interface ");
  }

  convert(): void {
    this.apiService.convert({
      value: this.codeString,
      count: this.numberOfElements
    })
      .subscribe({
        next: (res) => {
          this.convertedResponse = res;
          if (this.convertedResponse && this.convertedResponse.length) {
            let firstElement = this.convertedResponse[0];
            this.previewTableHeaders = Object.keys(firstElement);
            let previewMaxLength = this.convertedResponse.length > 5 ? 5 : this.convertedResponse.length;
            this.previewTableData = this.convertedResponse.slice(0, previewMaxLength);

            this.previewTableData = this.previewTableData.map(data => {
              this.previewTableHeaders.forEach(h => {
                if (typeof data[h] === 'object') {
                  data[h] = JSON.stringify(data[h])
                }
              })
            })
          }
        }
      })
  }

  dropDownChange(value: string) {
    this.numberOfElements = parseInt(value);
  }
}
