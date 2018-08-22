import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'shirt-icon',
  templateUrl: './shirt-icon.component.html',
  styleUrls: ['./shirt-icon.component.css']
})
export class ShirtIconComponent implements OnInit {
  @Input() fill;
  @Input() w;

  constructor() { }

  ngOnInit() {
  }
  

}
