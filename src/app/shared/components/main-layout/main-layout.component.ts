import { Component, OnInit } from '@angular/core';
import { IonContent, IonRouterOutlet } from "@ionic/angular/standalone";
import { MenuComponent } from '../menu/menu.component';
import { HeaderComponent } from '../header/header.component';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  standalone: true,
  imports: [IonContent, MenuComponent, HeaderComponent, RouterOutlet]
})
export class MainLayoutComponent  implements OnInit {


  title: string = '';
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          let currentRoute = this.route.root;
          while (currentRoute.firstChild) {
            currentRoute = currentRoute.firstChild;
          }
          return currentRoute.snapshot.data['title'] || 'App';
        })
      )
      .subscribe(title => {
        this.title = title;
      });
  }
  

}
