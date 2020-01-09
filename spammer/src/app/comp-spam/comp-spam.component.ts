import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comp-spam',
  templateUrl: './comp-spam.component.html',
  styleUrls: ['./comp-spam.component.css']
})
export class CompSpamComponent implements OnInit {
  @Input() name: string;
  constructor() {

  }

  ngOnInit() {
  }

}
