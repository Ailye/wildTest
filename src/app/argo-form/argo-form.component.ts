import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-argo-form',
  templateUrl: './argo-form.component.html',
  styleUrls: ['./argo-form.component.css']
})
export class ArgoFormComponent implements OnInit {

  items: Observable<any[]>;
  users: any;
  argonote: string = '';

  constructor(firestore: AngularFirestore) { 
    this.items = firestore.collection('users').valueChanges();
    this.users = firestore.collection("users");
    
  }

  ngOnInit(): void {
    
  } 

  addArgonote(argonote: string): void {
    this.users.add({
      name: argonote
    })
    .then((res: any) => {
      console.log(res);
    })
    .catch((e: any) => {
      console.log(e)
    })
  }

}
