import {CodeModel} from "@ngstack/code-editor";

export const codeModel: CodeModel = {
  language: 'typescript',
  uri: 'main.ts',
  value: `
/*
  You can use custom types

  CustomTypes.FIRST_NAME
  CustomTypes.LAST_NAME
  CustomTypes.NICK_NAME
  CustomTypes.EMAIL
  CustomTypes.DESCRIPTION
    
*/

interface I {\n\n}`
};

export const options = {
  contextmenu: true,
  automaticLayout: true,
  minimap: {
    enabled: true
  }
};