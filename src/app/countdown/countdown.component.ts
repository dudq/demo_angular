import {Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit, OnDestroy {
  message = '';
  remainingTime: number;
  @Input()
  seconds = 11;
  private intervalId = 0;

  constructor() {
  }

  clearTime() {
    clearInterval(this.intervalId);
  }

  ngOnInit() {
    this.reset();
    this.start();
  }

  ngOnDestroy(): void {
    this.clearTime();
  }

  reset() {
    this.clearTime();
    this.remainingTime = this.seconds;
    this.message = `Click start button to start the Countdown`;
  }

  start() {
    this.countDown();
    if (this.remainingTime <= 0) {
      this.remainingTime = this.seconds;
    }
  }

  stop() {
    this.clearTime();
    this.message = `Holding at T-${this.remainingTime} seconds`;
  }

  private countDown() {
    this.clearTime();
    this.intervalId = window.setInterval(() => {
      this.remainingTime -= 1;
      if (this.remainingTime === 0) {
        this.message = 'Blast off';
        this.clearTime();
      } else {
        this.message = `T-${this.remainingTime} seconds and counting`;
      }
    }, 1000);
  }
}
