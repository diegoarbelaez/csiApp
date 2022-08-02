import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NavController } from '@ionic/angular';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

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

  valorProgress;

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

  latitudCapturada;
  logintudCapturada;
  id_usuario;
  tipo_evento;


  constructor(private navCtrl: NavController, private geolocation: Geolocation, private http: HttpClient, private storage: Storage) {
    this.cargarIdUsuario();
  }

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
    console.log(percentage);
    this.valorProgress = percentage/100;

    --this.timer

    if (this.timer < -1) {
      //this.startTimer(this.startDuration);
      this.lanzarAlerta();
      this.stopTimer();
      this.navCtrl.navigateRoot('/confirmacion');

    }

  }

  lanzarAlerta() {
    console.log("Enviando Alerta...");
    //Aquí está el código para enviar las coordenadas y lo que se obtenga de los eventos
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      console.log("Latitud" + resp.coords.latitude);
      console.log("Longitud" + resp.coords.longitude);
      this.latitudCapturada = resp.coords.latitude;
      this.logintudCapturada = resp.coords.longitude;
      //envia la alerta al servidor
      const data = {
        tipo_evento: this.tipo_evento,
        latitud: this.latitudCapturada,
        longitud: this.logintudCapturada,
        id_usuario: this.id_usuario
      }
      console.log(data);

      const URL: string = `http://localhost/CSI/php-auth-api/api/alerta.php`;

      return new Promise(resolve => {
        this.http.post(URL, data)
          .subscribe(async resp => {
            console.log("Respuesta Servidor " + resp['confirmacion'] + resp['sql']);
            if (resp['confirmacion'] == 'alertarecibida') {
              console.log("recibió la alerta bien");
              resolve(true);
            } else {
              console.log("Error en el servidor" + resp["confirmacion"]);
              resolve(false);
            }
          });
      });

      console.log("fin...");
    }).catch((error) => {
      console.log('Error getting location', error);
    });


    //trael el id del usuario






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
        this.tipo_evento = 1;
        break;
      case 2:
        this.evento2 = !this.evento2;
        this.evento1 = false;
        this.evento3 = false;
        this.evento4 = false;
        this.evento5 = false;
        this.evento6 = false;
        this.tipo_evento = 2;

        break;
      case 3:
        this.evento3 = !this.evento3;
        this.evento1 = false;
        this.evento2 = false;
        this.evento4 = false;
        this.evento5 = false;
        this.evento6 = false;
        this.tipo_evento = 3;

        break;
      case 4:
        this.evento4 = !this.evento4;
        this.evento1 = false;
        this.evento2 = false;
        this.evento3 = false;
        this.evento5 = false;
        this.evento6 = false;
        this.tipo_evento = 4;

        break;
      case 5:
        this.evento5 = !this.evento5;
        this.evento1 = false;
        this.evento2 = false;
        this.evento3 = false;
        this.evento4 = false;
        this.evento6 = false;
        this.tipo_evento = 5;
        break;
      case 6:
        this.evento6 = !this.evento6;
        this.evento1 = false;
        this.evento2 = false;
        this.evento3 = false;
        this.evento4 = false;
        this.evento5 = false;
        this.tipo_evento = 6;
        break;
    }

  }

  async cargarIdUsuario() {
    await this.storage.create();
    this.id_usuario = await this.storage.get('id_usuario') || null;
  }

  ngOnInit() {
    this.startTimer(this.startDuration);
  }

}
