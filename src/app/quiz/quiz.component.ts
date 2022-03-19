import { Component, OnInit,ViewChild,ElementRef} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quizform:FormGroup
@ViewChild('name') nameKey:ElementRef
  constructor(private service: ServiceService,private fb:FormBuilder,private router:Router) {   
  }


  ngOnInit(): void {
    this.quizform=this.fb.group(
      {
        "name":['',Validators.required]
      }
    )
  }
  get f() {
    return this.quizform.controls;

  }
  startQuiz()
  {
    // if(this.quizform.invalid)
    // {
    //   alert("Name field should be required!!")
      
    //   return;
    // }

    this.router.navigate(['/question']);
    localStorage.setItem('name',this.nameKey.nativeElement.value)
    

  }
}
