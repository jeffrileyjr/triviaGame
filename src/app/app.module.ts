import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { QuizService } from './quiz.service';
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { QuizComponent } from './quiz/quiz.component';
import { ResultsComponent } from './results/results.component';
import { ScoresComponent } from './scores/scores.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/quiz', pathMatch: "full"},
  {path: 'quiz', component: QuizComponent},
  { path: 'results', component: ResultsComponent},
  { path: 'scores', component: ScoresComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    ResultsComponent,
    ScoresComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot( appRoutes)
  ],
  providers: [QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
