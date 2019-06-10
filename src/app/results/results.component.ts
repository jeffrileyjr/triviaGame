import { Component, OnInit, Input } from '@angular/core';
import { QuizService } from '../quiz.service';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

score;
username;
questionsAnswers;
choices;
resultNumber: number = 0;

  constructor(private quizService: QuizService) { }

  ngOnInit() {
this.score = this.quizService.score;
this.username = this.quizService.username;
this.choices = this.quizService.choices;
this.questionsAnswers = this.quizService.questionsAnswers;
// console.log(this.questionsAnswers);
// console.log(this.username);
  }

  previousAnswer() {
    this.resultNumber--;
  }

  nextAnswer() {
    this.resultNumber++;
  }

}
