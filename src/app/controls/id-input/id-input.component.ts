import { Input, Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-id-input',
  templateUrl: './id-input.component.html',
  styleUrls: ['./id-input.component.css']
})
export class IdInputComponent implements OnInit {
  @Input() title = '输入学号或者身份证号'
  @Input()input_chars = '0123456789X'.split('')
  @Input()value = ''
  @Input()maxlength = 18
  @Output() ok = new EventEmitter();
  @Input() disabled
  constructor() { }

  ngOnInit() {
  }

}