import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-reshuffle',
  templateUrl: './reshuffle.component.html',
  styleUrls: ['./reshuffle.component.css']
})
export class ReshuffleComponent implements OnInit {
  name: string = ''
  reshufflequeList: any = [];
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
    this.service.getShuffleQuestionList().subscribe(res => {
      console.log("list response", res)
      this.reshufflequeList = res;
    })
  }
  nextQuestion(content:any) {
    this.currentQuestion++;
    if (this.currentQuestion === this.reshufflequeList.length) {
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
   
    if (currentQue === this.reshufflequeList.length) {
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
  
}


