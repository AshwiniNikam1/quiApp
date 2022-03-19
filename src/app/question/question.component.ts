import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import arrayShuffle from 'array-shuffle';
import { interval } from 'rxjs';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  name: string = ''
  queList: any = [];
  currentQuestion: number = 0;//user will attempt current question
  points: number = 0;
  correctAnswer: number = 0;
  wrongAnswer: number = 0;
  isQuizCompleted: boolean = false
  ans: boolean = false
  closeResult: string;
  correct: boolean = false;
  isCorrect:boolean=false

  constructor(private service: ServiceService,private modalService: NgbModal,private router:Router) { }

  ngOnInit(): void {
    this.name = localStorage.getItem('name');
    this.getQuestList();// load data on server
   
  }
  getQuestList() {
    this.service.getquestionlist().subscribe(res => {
      console.log("list response", res)
      this.queList = res;
    })
  }
  nextQuestion(content:any) {
    this.currentQuestion++;
    if (this.currentQuestion === this.queList.length) {
      this.currentQuestion--;
      this.modalService.open(content, { size: 'sm' });
    }
  }
  prevQuestion() {
    this.currentQuestion--;
  }
//   currentQ:any
//   sel:boolean=false
//   answer1(q:any)
//   {
//     this.currentQ=q;
//     console.log("q",q)
//     console.log("current que",this.currentQ)
//     if(q.correct==true)
//     {
      
//     }
// console.log("correct", this.correct)
  //}
  answer(currentQue: number, option: any) {
   
    if (currentQue === this.queList.length) {
      this.isQuizCompleted = !this.isQuizCompleted
    }
    if (option.correct) {

      this.points = this.points + 2;
      this.correctAnswer++;
      setTimeout(() => {
        this.currentQuestion++
      }, 1000)
    
    }
    else {
      setTimeout(() => {
       this.currentQuestion++
        this.wrongAnswer++;
      }, 1000)
      
    }
  
  }
  quizCompleted()
  {

    this.isQuizCompleted = !this.isQuizCompleted
    
    this.modalService.dismissAll();

  }
  goBack()
  {
    this.router.navigate(['/quiz'])
  }
  clickEvent()
  {
this.correct=!this.correct;
  }
  shuffle:boolean=false
  shufllelist:any=[]

  shuffleQuestion(queList:any)
  {
this.shuffle=!this.shuffle

    for (let i = queList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [queList[i], queList[j]] = [queList[j], queList[i]];
  }
 return queList
  }
}
