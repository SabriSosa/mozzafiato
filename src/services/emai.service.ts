import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

declare let Email: any;

@Injectable({
    providedIn: 'root',
})

export class AlertService {
    constructor() { }

    private subject = new Subject<Alert>();
    private defaultId = 'default-alert';
    public defaultOptions = {
        autoClose: true,
        keepAfterRouteChange: false
    };
    // enable subscribing to alerts observable
    sendEmail(to, from, subject, body) {
        Email.send({
            Host: 'smtp.elasticemail.com',
            Username: 'sabrina.sosa.nicolais@gmail.com',
            Password: '77C6D96CCFBF006DCAD687A947EDD8553BFD',
            To: to,
            From: from,
            Subject: subject,
            Body: body
        }).then(() => {
            { this.alertService.success('Correo enviado exitosamente'); }
        })
            .catch(() => { this.alertService.error('Error al enviar correo , intente mas tarde nuevamente'); });
        return false;

    }


}
