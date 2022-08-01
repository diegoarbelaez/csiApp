import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NavController } from '@ionic/angular';

const circleR = 80;
const circleDasharray = 2 * Math.PI * circleR;

@Component({
  selector: 'app-timer',
  templateUrl: './timer.page.html',
  styleUrls: ['./timer.page.scss'],
})
export class TimerPage implements OnInit {

  time: BehaviorSubject<string> = new BehaviorSubject('00:00');
  percent: BehaviorSubject<number> = new BehaviorSubject(100);

  timer: number;
  interval;
  state: 'start' | 'stop' = 'stop';

  startDuration = 1;

  circleR = circleR;
  circleDasharray = circleDasharray;


  constructor(private navCtrl:NavController) { }

  startTimer(duration: number) {
    this.state = 'start';
    clearInterval(this.interval);
    this.timer = duration * 15;
    this.updateTimeValue();
    this.interval = setInterval(() => {
      this.updateTimeValue();
    }, 1000);
  }

  updateTimeValue() {
    let minutes: any = this.timer / 60;
    let seconds: any = this.timer % 60;

    minutes = String('0' + Math.floor(minutes)).slice(-2);
    seconds = String('0' + Math.floor(seconds)).slice(-2);

    const text = minutes + ':' + seconds;
    this.time.next(text);
    
    const totalTime = this.startDuration * 15;
    const percentage = ((totalTime-this.timer)/totalTime)*100;
    this.percent.next(percentage);

    --this.timer

    if (this.timer < -1) {
      //this.startTimer(this.startDuration);
      this.lanzarAlerta();
      this.stopTimer();
      this.navCtrl.navigateRoot('/panico');

    }

  }

  lanzarAlerta(){
    console.log("Enviando Alerta");
  }

  percentageOffset(percent) {
    const percentFloat = percent / 100;
    return circleDasharray * (1 - percentFloat);
  }

  stopTimer() {
    clearInterval(this.interval);
    this.time.next('00:00');
    this.state = 'stop';
  }

  ngOnInit() {
    this.startTimer(this.startDuration);
  }

}
