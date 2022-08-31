import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NavController, ToastController } from '@ionic/angular';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { UsuarioService } from 'src/app/services/usuario.service';
import { CAPACITOR_CONFIG_JSON_FILE } from '@ionic/cli/lib/integrations/capacitor/config';
import { environment } from 'src/environments/environment';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Platform, LoadingController } from '@ionic/angular';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { finalize } from 'rxjs/operators';





const circleR = 80;
const circleDasharray = 2 * Math.PI * circleR;

const urlService = environment.urlServices;




//Directorio de almacenamiento local
//Interfaz para manejo de imagenes
const IMAGE_DIR = 'stored-images';
interface LocalFile {
  name: string;
  path: string;
  data: string;
}







@Component({
  selector: 'app-timer',
  templateUrl: './timer.page.html',
  styleUrls: ['./timer.page.scss'],
})
export class TimerPage implements OnInit {


  securepath: any = window;
  images: LocalFile[] = [];

  imagen_evento: LocalFile;

  imagenAdjunta: boolean = false;

  mostrarTimer: boolean = true;

  time: BehaviorSubject<string> = new BehaviorSubject('00:00');
  percent: BehaviorSubject<number> = new BehaviorSubject(100);

  timer: number;
  interval;
  state: 'start' | 'stop' = 'stop';

  valorProgress;

  nombreEventos;





  //Variables de eventos
  evento1: boolean = false; //Accidente de tránsito
  evento2: boolean = false; //Atraco 
  evento3: boolean = false; //Afección de Salud
  evento4: boolean = false; //Persona Sospechosa
  evento5: boolean = false; //Animal Perdido
  evento6: boolean = false; //Persona Siguiendome

  //Nombres de eventos
  nombreEvento1 = 'Accidente de';
  nombreEvento2 = '';
  nombreEvento3 = '';
  nombreEvento4 = '';
  nombreEvento5 = '';
  nombreEvento6 = '';

  eventos: Observable<any>;


  startDuration = 1;

  circleR = circleR;
  circleDasharray = circleDasharray;

  latitudCapturada;
  logintudCapturada;
  id_usuario;
  tipo_evento;
  comentario;

  imagen;




  constructor(private navCtrl: NavController, private geolocation: Geolocation, private http: HttpClient, private storage: Storage, private service: UsuarioService, private platform: Platform, private loadingCtrl: LoadingController, private toastCtrl: ToastController) {
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
    this.valorProgress = percentage / 100;

    --this.timer

    if (this.timer < -1) {
      //this.startTimer(this.startDuration);
      this.lanzarAlerta();
      this.stopTimer();
      this.navCtrl.navigateRoot('/confirmacion');

    }

  }

  async lanzarAlerta() {
    console.log("Enviando Alerta...");
    const loading_alerta = await this.loadingCtrl.create({
      message: 'Enviando alerta...',
    });
    await loading_alerta.present();
    
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
        id_usuario: this.id_usuario,
        comentario: this.comentario
      }
      console.log(data);

      const URL: string = urlService + 'alerta.php';

      return new Promise(resolve => {
        this.http.post(URL, data)
          .subscribe(async resp => {
            console.log("Respuesta Servidor " + resp['confirmacion'] + resp['sql']);
            if (resp['confirmacion'] == 'alertarecibida') {
              console.log("recibió la alerta bien");
              //Enviar la imagen adjunta
              loading_alerta.dismiss();
              if (this.imagenAdjunta) {
                this.startUpload(this.images[0]);
              }
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
    this.cargarNombreServicios();
  }

  async cargarNombreServicios() {
    this.nombreEventos = await this.service.getNombreAlertas();
    console.log(this.nombreEventos);
    this.nombreEvento1 = this.nombreEventos[0]["descripcion"];
    this.nombreEvento2 = this.nombreEventos[1]["descripcion"];
    this.nombreEvento3 = this.nombreEventos[2]["descripcion"];
    this.nombreEvento4 = this.nombreEventos[3]["descripcion"];
    this.nombreEvento5 = this.nombreEventos[4]["descripcion"];
    this.nombreEvento6 = this.nombreEventos[5]["descripcion"];


  }



  //Metodos para cargar imagenes


  async cargarImagenGaleria() {
    const image = await Camera.getPhoto({
      quality: 60,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Photos // Camera, Photos or Prompt!
    });

    console.log(image);

    if (image) {
      this.saveImage(image)
    }

  }

  async cargarImagenFoto() {
    const image = await Camera.getPhoto({
      quality: 60,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera // Camera, Photos or Prompt!
    });

    console.log(image);

    if (image) {
      this.saveImage(image)
    }

  }



  async saveImage(photo: Photo) {
    const base64Data = await this.readAsBase64(photo);
    console.log(base64Data);
    const fileName = 'EVENTOCSI.jpeg';
    const savedFile = await Filesystem.writeFile({
      path: `${IMAGE_DIR}/${fileName}`,
      data: base64Data,
      directory: Directory.Data
    });
    console.log('saved: ' + savedFile);
    this.loadFiles();
  }

  private async readAsBase64(photo: Photo) {
    if (this.platform.is('hybrid')) {
      const file = await Filesystem.readFile({
        path: photo.path
      });

      return file.data;
    }
    else {
      // Fetch the photo, read as a blob, then convert to base64 format
      const response = await fetch(photo.webPath);
      const blob = await response.blob();

      return await this.convertBlobToBase64(blob) as string;
    }
  }

  // Helper function
  convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader;
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });



  /* async cargarArchivoAlmacenado(){

    this.imagen_evento = null;
    const loading = await this.loadingCtrl.create({
      message: 'Loading data...',
    });
    await loading.present();

    Filesystem.readdir({
      path: IMAGE_DIR,
      directory: Directory.Data,
    }).then(result => {
      this.loadFileData(result.files[0]);
      // console.log("Archivos: " + JSON.stringify(result.files));
      // console.log("Archivo Recuperado (abajo object)"+result.files[0]);
      // console.log(result.files[0]);
    },
      async (err) => {
        // Folder does not yet exists!
        await Filesystem.mkdir({
          path: IMAGE_DIR,
          directory: Directory.Data,
        });
      }
    ).then(_ => {
      loading.dismiss();
    });

  }*/

  async loadFiles() {
    this.images = [];

    const loading = await this.loadingCtrl.create({
      message: 'Loading data...',
    });
    await loading.present();

    Filesystem.readdir({
      path: IMAGE_DIR,
      directory: Directory.Data,
    }).then(result => {
      this.loadFileData(result.files);
      console.log("Archivos: " + JSON.stringify(result.files));
      //console.log(result.files[0].uri);
      console.log(result.files);
    },
      async (err) => {
        // Folder does not yet exists!
        await Filesystem.mkdir({
          path: IMAGE_DIR,
          directory: Directory.Data,
        });
      }
    ).then(_ => {
      loading.dismiss();
    });

  }

  async loadFileData(fileNames: any[]) {
    for (let f of fileNames) {
      const filePath = `${IMAGE_DIR}/${f.name}`;

      console.log("Ruta Archivo: " + filePath);

      const readFile = await Filesystem.readFile({
        path: filePath,
        directory: Directory.Data,
      });

      this.images.push({
        name: f,
        path: filePath,
        data: `data:image/jpeg;base64,${readFile.data}`,
      });
      console.log(readFile);
    }
    console.log("Vamos a ver Images (abajo)");
    console.log(this.images);
    this.imagenAdjunta = true;
    this.stopTimer();
    this.mostrarTimer = false;
  }


  /*  async loadFileData(nombreArchivo: any) {
    
        const filePath = `${IMAGE_DIR}/${nombreArchivo.name}`;
        //const filePath = `${IMAGE_DIR}/EVENTOCSI.jpeg`;
  
        console.log("Ruta Archivo: " + filePath);
  
        const readFile = await Filesystem.readFile({
          path: filePath,
          directory: Directory.Data,
        });
  
        //Guarda la imagen del evento
        this.imagen_evento = {
          name: nombreArchivo,
          path: filePath,
          data: `data:image/jpeg;base64,${readFile.data}`,
        }
  
        console.log("Datos de imagen_evento");
        console.log(this.imagen_evento);
        console.log("Datos:");
        console.log(this.imagen_evento.data);
  
        /*this.images.push({
          name: f,
          path: filePath,
          data: `data:image/jpeg;base64,${readFile.data}`,
        });
       
      
    }*/



  async startUpload(file: LocalFile) {
    const response = await fetch(file.data);
    console.log(response);
    const blob = await response.blob();
    const formData = new FormData();
    //formData.append('file', blob, file.name);
    //El nombre del archivo a cargar tiene el identificador del usuario
    const nombreArchivo = this.id_usuario + '-' + new Date().getTime() + '.jpeg';
    formData.append('file', blob, nombreArchivo);
    this.uploadData(formData);
    console.log(formData);
  }


  // Upload the formData to our API
  async uploadData(formData: FormData) {
    const loading = await this.loadingCtrl.create({
      message: 'Enviando imagen...',
    });
    await loading.present();

    // Use your own API!
    //const url = 'http://localhost/ionic/camera/api/upload.php';
    const url = urlService + 'upload.php'
    console.log(url);
    console.log(formData);


    this.http.post(url, formData)
      .pipe(
        finalize(() => {
          loading.dismiss();
        })
      )
      .subscribe(res => {
        if (res['success']) {
          this.presentToast('Reporte Realizado');
          this.navCtrl.navigateRoot('/confirmacion');
          console.log('File upload complete.');
        } else {
          this.presentToast('Error reportando....')
          console.log('File upload failed.');
        }
      });

  }

  // Little helper
  async presentToast(text) {
    const toast = await this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }




}
