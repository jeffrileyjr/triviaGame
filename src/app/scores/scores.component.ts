import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {

  constructor(private quizService: QuizService, private route: ActivatedRoute) { }
  topTen;
  score;
username;

  ngOnInit() {
     this.quizService.getScores().subscribe(response => {
      this.topTen = response;
      this.score = this.quizService.score;
      this.username = this.quizService.username;
     });
}

}
