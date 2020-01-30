import { Component, OnInit } from '@angular/core';
import { QuestionForum } from '../shared/models/question-forum/question-forum';
import { AnswerForum } from '../shared/models/answer-forum/answer-forum';
import { QuestionServiceService } from '../shared/services/forum-service/question-service.service';
import { AnswerServiceService } from '../shared/services/forum-service/answer-service.service';
import { ReplaySubject } from 'rxjs';
import { Edition } from '../shared/models/edition';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {
  private question: QuestionForum = new QuestionForum();
  private questions: QuestionForum[] = [];
  private answers: AnswerForum[];
  public questions$: ReplaySubject<any> = new ReplaySubject(1);
  public answers$: ReplaySubject<any> = new ReplaySubject(1);
  public showresult: boolean =false; 


//public currentEdition: Edition;


  public title: string;
  public description: string;


  
  constructor(
    private questionsApi: QuestionServiceService,
    private answersApi: AnswerServiceService
  ) {
    this.questionsApi.getAllQuestions().subscribe(
     // this.questionsApi.getAllQuestions(this.question.editionId).subscribe(
      (quest: QuestionForum[]) => {
        this.questions$.next(quest);
        console.log(quest);

      }
    )
  }

  ngOnInit() {
  }




  public getAnswersByQuestionId(id: number) {

    return this.answersApi.getAnswersByQuestionId(id).subscribe(
      (answ: AnswerForum[]) => {

      //index da questao
        this.answers$.next(answ);
        console.log(answ);
        if (answ) {
          
        }

      }
    );
  }


  public createQuestion() {

    this.question.title = this.title;
    this.question.description = this.description;
    return this.questionsApi.createQuestion(this.question).subscribe(
      (msg: string) => {
        console.log(msg);
      },(error: string) => {
        console.log(error);
      }
    );

  }

}
