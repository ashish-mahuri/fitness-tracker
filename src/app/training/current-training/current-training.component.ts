import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StopTrainingComponent } from '../stop-training/stop-training.component';


@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent {

  @Output() trainingExit = new EventEmitter();
  progress: number =0;
  timer!: number;

  

  constructor( private dailog: MatDialog) {}

  ngOnInit() {
    this.startOrResumeTimer();
  }

  startOrResumeTimer() {
    this.timer = setInterval(() => {
      this.progress = this.progress + 20;
      if(this.progress >=100) {
        clearInterval(this.timer);
      }
    }, 1000);
  }


  onStop() {
    clearInterval(this.timer);
    const dialogRef = this.dailog.open(StopTrainingComponent, {
      data: {
        progress: this.progress
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.trainingExit.emit();
      } else {
        this.startOrResumeTimer();
      }
      console.log(result);
    });
  }

}
