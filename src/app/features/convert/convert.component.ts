import {Component} from "@angular/core";
import {CodeEditorService, CodeModel} from "@ngstack/code-editor";
import {codeModel, options} from "./editor.config";
import {DropdownInterface} from "../../shared/components/dropdown/interfaces";
import {dropdownData} from "./data";
import { take } from "rxjs";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import {ConverterService} from "../../api/convert.service";


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

  responseHref: SafeUrl = ""

  constructor(
    private convertService: ConverterService,
    private codeEditorService: CodeEditorService,
    private sanitizer: DomSanitizer
  ) {
    this.codeEditorService.loaded
      .pipe(take(1))
      .subscribe(editor => {
        const customTypes = `enum CustomTypes {
          FIRST_NAME,
          LAST_NAME,
          NICK_NAME,
          DESCRIPTION,
          EMAIL
      }`
        editor.monaco.languages.typescript.typescriptDefaults.addExtraLib(customTypes, 'customTypes.ts');
      })
  }


  onCodeChanged(value: string) {
    this.codeString = value;
  }

  convert(): void {
    this.convertService.convertInterface({
      interface: this.codeString,
      count: this.numberOfElements
    })
      .subscribe({
        next: (res: any) => {
          console.log(res)
          this.convertedResponse = res;

          this.responseHref = this.sanitizer
          .bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(JSON.stringify(res, null, 4)));

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
