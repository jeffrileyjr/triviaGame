import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  questions;
  scores;
  username: string;
  questionNumber: number;
  score;
  userAndScore;
  showQuestions = false;
  capturedUsername = false;

  constructor(private quizService: QuizService, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.quizService.getQuestions().subscribe(response => {
      this.questions = response;
      this.questionNumber = 0;
      // console.log(this.questions);
    });
  }

  getUsername(form) {
    this.quizService.getUsername(form);
    this.showQuestions = !this.showQuestions;
    this.capturedUsername = !this.capturedUsername;
    return this.username;
    // console.log(this.username);
  }
  submitQuiz() {
    this.quizService.scoreQuiz();
    this.score = this.quizService.score;
    console.log(this.score);
    this.quizService.addScore({username: this.username, score: this.score}).subscribe(response => {
      this.scores = response;
    });
    return this.score;
  }
  nextQuestion(choice) {
    this.quizService.collectChoices(choice);
    this.questionNumber++;
    // console.log(choice);
  }
  submitLastAnswer(choice) {
    this.quizService.collectChoices(choice);
  }
  getquestAnswers(question, answer) {
    this.quizService.getAnswers({question, answer});
    // console.log(question, answer);
  }
}
