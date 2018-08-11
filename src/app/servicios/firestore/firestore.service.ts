import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FirestoreService {
  constructor(
    private firestore: AngularFirestore
  ) {}
  //Crea un nuevo servicio
  /*public createCrService(data: {nombre: string, url: string}) {
    return this.firestore.collection('crService').add(data);
  }*/
  //Obtiene un servicio
  public getCrService(documentId: string) {
    return this.firestore.collection('/crService').doc(documentId).snapshotChanges();
  }
  //Obtiene todos los servicios
  public getCrServices() {
    return this.firestore.collection('/crService').snapshotChanges();
  }
  //Actualiza un servicio
  public updateCrService(documentId: string, data: {nombre?: string, url?:string}) {
    return this.firestore.collection('/crService').doc(documentId).set(data);
  }
}