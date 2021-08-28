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
    this.loggingList = []
  }

  getLogList(): string[]{
    return this.loggingList
  }
}
