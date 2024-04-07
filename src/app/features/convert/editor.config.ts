import {CodeModel} from "@ngstack/code-editor";

export const codeModel: CodeModel = {
  language: 'typescript',
  uri: 'main.ts',
  value: 'interface T {\n\n}'
};

export const options = {
  contextmenu: true,
  automaticLayout: true,
  minimap: {
    enabled: true
  }
};