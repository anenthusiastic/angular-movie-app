import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.css']
})
export class LoggingComponent implements OnInit {
  title = "Logging List";
  logs : string[] = []
  constructor(private loggingService:LoggingService) { }

  ngOnInit(): void {
    this.logs = this.loggingService.getLogList();
  }


  clearLogs(){
    this.loggingService.clear();
  }

}
