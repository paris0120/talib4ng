import { Injectable } from '@angular/core';
import {Talib4ngResult} from "./talib4ng.result";

@Injectable({
  providedIn: 'root'
})
export class Talib4ngService {

  constructor() { }

  sma(index: number[], value: number[], period: number): Talib4ngResult {
    let result = new Talib4ngResult();


    if(index!=null && index.length!=value.length) result.message = "Incompatible index.";
    else if(period<=0) result.message = "Period must be a positive integer.";
    else {
      let sum = 0;
      let start = 0;
      let c = 1;
      let sma:number[] = [];
      for(let i=0;i<value.length;i++) {
        if(value[i]!=null) {
          sum+=value[i];
          if(c>=period) {
            sma.push(sum/period);
            if(index==null) result.index.push(i);
            else result.index.push(index[i]);
            while(value[start] == null) {
              start++;
            }
            sum-=value[start];
            start++;
          }
          else c++;
        }
      }
      result.result.set('sma', sma);
    }
    return result;
  }



  ema(index: number[], value: number[], period: number, smoothing: number): Talib4ngResult {
    let result = new Talib4ngResult();
    if(index!=null && index.length!=value.length) result.message = "Incompatible index.";
    else {
      let sum = 0;
      let factor = smoothing/(1+period);
      let ema:number[] = [];
      for(let i=0;i<value.length;i++) {
        if(value[i]!=null) {
          sum=value[i]*factor + sum * (1-factor);
          ema.push(sum/period);
          if(index==null) result.index.push(i);
          else result.index.push(index[i]);
        }
      }
      result.result.set('ema', ema);
    }
    return result;
  }

}
