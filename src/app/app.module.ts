import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { QuizComponent } from './quiz/quiz.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { QuestionComponent } from './question/question.component';
import { HeaderComponent } from './header/header.component';
import { ChangeBgDirective } from './change-bg.directive';
import { ReshuffleComponent } from './reshuffle/reshuffle.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    QuizComponent,
    QuestionComponent,
    HeaderComponent,
    ChangeBgDirective,
    ReshuffleComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,

    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
