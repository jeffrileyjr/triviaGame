import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  questions;
  choices: any[] = [];
  questionsAnswers: any[] = [];
  score = 0;
  userAndScore;
  username: string = null;

  constructor(private http: HttpClient, private router: Router) { }

  getQuestions() {
    return this.http.get('/api/questions', { responseType: 'json'});
  }

  getScores() {
    return this.http.get('/api/scores', { responseType: 'json'});
  }
  addScore(userAndScore) {
    return this.http.post('/api/scores', userAndScore, { responseType: 'json'});
  }

  collectChoices(choice) {
    // console.log(choice);
    this.choices.push(choice);
    // console.log(this.choices);
    return this.choices;

  }

  getAnswers(qA) {
    this.questionsAnswers.push({qA});
    // console.log(this.questionsAnswers);
    return this.questionsAnswers;
  }

  scoreQuiz() {
    for (let i = 0; i < this.questionsAnswers.length; i++) {
      if (this.questionsAnswers[i].qA.answer === this.choices[i]) {
        // console.log(this.questionsAnswers[i].qA.answer);
        this.score++;
      }
    }
    // console.log(this.score);
    // this.addScore({username: this.username, score: this.score});
    // this.userAndScore.push({username: this.username, score: this.score});
    // console.log(this.userAndScore[0].username);
    // this.addScore(this.userAndScore[0]);
    this.router.navigate(['/results']);
    return this.score;
  }
  getScore() {
    return this.score;
  }
  getUsername(form) {
    this.username = form.value.username;
    // console.log(this.username);
    return this.username;
  }
  returnChoices() {
    return this.choices;
  }
  getQuestionsAnswers() {
    return this.questionsAnswers;
  }
  getUserAndScore() {
    return this.userAndScore;
  }
}
