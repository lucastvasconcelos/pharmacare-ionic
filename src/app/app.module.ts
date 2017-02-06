import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {AnatomiaPage} from '../pages/anatomia/anatomia';
import {HistologiaPage} from '../pages/histologia/histologia';
import {QuizzPage} from '../pages/quizz/quizz';
import {FinalizarPage} from '../pages/finalizar/finalizar';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AnatomiaPage,
    HistologiaPage,
    QuizzPage,
    FinalizarPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AnatomiaPage,
    HistologiaPage,
    QuizzPage,
    FinalizarPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
