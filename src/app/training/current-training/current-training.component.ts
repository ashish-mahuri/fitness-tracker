import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StopTrainingComponent } from '../stop-training/stop-training.component';


@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent {

  progress: number =0;
  timer!: number;

  constructor( private dailog: MatDialog) {}

  ngOnInit() {

    this.timer = setInterval(() => {
      this.progress = this.progress + 20;
      if(this.progress >=100) {
        clearInterval(this.timer);
      }
    }, 1000);
  }

  onStop() {
    clearInterval(this.timer);
    this.dailog.open(StopTrainingComponent);

  }

}
