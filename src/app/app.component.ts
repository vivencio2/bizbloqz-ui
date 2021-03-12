import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {FormApiService} from '../app/form.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form: FormGroup;
  currentCount: string;
  textStatus: string;
  constructor(private formService: FormApiService, private builder: FormBuilder) {
    this.form = this.builder.group({
      'formText': null
    })
  }

  applyText(){
    this.formService.postText(this.form.controls['formText'].value).subscribe((response) => {
      this.textStatus = this.form.controls['formText'].value + " success.";
    }, (error) => {
      this.textStatus = this.form.controls['formText'].value + " failed.";
    });
  }

  getCount(){
    this.formService.getVowelCount().subscribe(
      (response) => {
        this.currentCount = response.vowelCount;
      }
    )
  }

}
