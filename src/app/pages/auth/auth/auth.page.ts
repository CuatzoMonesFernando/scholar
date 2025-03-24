import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonIcon, IonInput, IonButton } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  standalone: true,
  imports: [IonContent, IonItem, IonIcon, IonInput, IonButton, CommonModule, FormsModule, ReactiveFormsModule]
})
export class AuthPage {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private navCtrl: NavController,
    private toastCtrl: ToastController
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  async login() {
    if (this.loginForm.invalid) return;

    const { email, password } = this.loginForm.value;
    const success = await this.authService.login(email, password);

    if (success) {
      this.navCtrl.navigateRoot('/home'); // Redirige al home si loguea
    } else {
      const toast = await this.toastCtrl.create({
        message: 'Credenciales incorrectas',
        duration: 2000,
        color: 'danger',
      });
      toast.present();
    }
  }

}
