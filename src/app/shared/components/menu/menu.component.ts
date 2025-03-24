import { Component, OnInit } from '@angular/core';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonTitle,
  IonToolbar, IonList, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  imports: [IonItem, IonList, IonContent, IonHeader, IonMenu, IonTitle, IonToolbar],
})
export class MenuComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
