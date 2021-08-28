import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  private loggingList:string[] = []
  constructor() { }

  add(log:string){
    this.loggingList.push(log)
  }

  clear(){
    while(this.loggingList.length>0){
      this.loggingList.pop()
    }

  }

  getLogList(): string[]{
    return this.loggingList
  }
}
