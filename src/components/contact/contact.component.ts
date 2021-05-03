import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../services/alert.service';
import { NgForm } from '@angular/forms';
declare let Email: any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private alertService: AlertService) { }


  ngOnInit() {
  }

  sendEmail(form: NgForm) {
    const { email, name, subject, message } = form.value;
    Email.send({
      Host: 'smtp.elasticemail.com',
      Username: 'sabrina.sosa.nicolais@gmail.com',
      Password: '77C6D96CCFBF006DCAD687A947EDD8553BFD',
      To: email,
      From: 'sabrina.sosa.nicolais@gmail.com',
      Subject: subject,
      Body: 'Mail desde la pagina web, enviado por ' + name + ' Con el mensaje ' + message,
    }).then(() => {
      { this.alertService.success('Correo enviado exitosamente'); form.resetForm(); }
    })
      .catch(() => { this.alertService.error('Error al enviar correo , intente mas tarde nuevamente'); });

    return false;
  }


}
