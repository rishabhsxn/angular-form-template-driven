import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('f', { static: false }) formEl: NgForm;
  defaultQuestionValue: string = 'pet';
  answer: string = '';
  genders: string[] = ['Male', 'Female'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: '',
  };
  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.formEl.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: '',
    //   },
    //   secret: {
    //     secretQuestion: '',
    //     secretAnswer: '',
    //   },
    //   gender: '',
    // });

    this.formEl.form.patchValue({ userData: { username: suggestedName } });
  }

  onSubmit(form: NgForm): void {
    // console.log(form);
    console.log(this.formEl);

    this.submitted = true;
    this.user.username = this.formEl.value.userData.username;
    this.user.email = this.formEl.value.userData.email;
    this.user.secretQuestion = this.formEl.value.secret.secretQuestion;
    this.user.answer = this.formEl.value.secret.secretAnswer;
    this.user.gender = this.formEl.value.gender;

    this.formEl.reset();
  }
}
