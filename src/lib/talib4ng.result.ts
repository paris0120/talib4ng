import {Talib4ngType} from "./talib4ng.type";

export class Talib4ngResult {
  index: number[] = [];
  result = new Map();
  type: Talib4ngType = Talib4ngType.NULL;
  message: string = "";

}
