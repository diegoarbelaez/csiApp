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

  //Variables de eventos
  evento1: boolean = false; //Accidente de tránsito
  evento2: boolean = false; //Atraco 
  evento3: boolean = false; //Afección de Salud
  evento4: boolean = false; //Persona Sospechosa
  evento5: boolean = false; //Animal Perdido
  evento6: boolean = false; //Persona Siguiendome


  startDuration = 1;

  circleR = circleR;
  circleDasharray = circleDasharray;


  constructor(private navCtrl: NavController) { }

  ionViewWillEnter() {
    this.startTimer(1);
  }

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
    const percentage = ((totalTime - this.timer) / totalTime) * 100;
    this.percent.next(percentage);

    --this.timer

    if (this.timer < -1) {
      //this.startTimer(this.startDuration);
      this.lanzarAlerta();
      this.stopTimer();
      this.navCtrl.navigateRoot('/confirmacion');

    }

  }

  lanzarAlerta() {
    console.log("Enviando Alerta");
    //Aquí está el código para enviar las coordenadas y lo que se obtenga de los eventos
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

  cambiarEstado(evento_reportar) {
    switch (evento_reportar) {
      case 1:
        this.evento1 = !this.evento1;
        this.evento2 = false;
        this.evento3 = false;
        this.evento4 = false;
        this.evento5 = false;
        this.evento6 = false;
        break;
      case 2:
        this.evento2 = !this.evento2;
        this.evento1 = false;
        this.evento3 = false;
        this.evento4 = false;
        this.evento5 = false;
        this.evento6 = false;

        break;
      case 3:
        this.evento3 = !this.evento3;
        this.evento1 = false;
        this.evento2 = false;
        this.evento4 = false;
        this.evento5 = false;
        this.evento6 = false;

        break;
      case 4:
        this.evento4 = !this.evento4;
        this.evento1 = false;
        this.evento2 = false;
        this.evento3 = false;
        this.evento5 = false;
        this.evento6 = false;

        break;
      case 5:
        this.evento5 = !this.evento5;
        this.evento1 = false;
        this.evento2 = false;
        this.evento3 = false;
        this.evento4 = false;
        this.evento6 = false;

        break;
      case 6:
        this.evento6 = !this.evento6;
        this.evento1 = false;
        this.evento2 = false;
        this.evento3 = false;
        this.evento4 = false;
        this.evento5 = false;

        break;
    }

  }

  ngOnInit() {
    this.startTimer(this.startDuration);
  }

}
