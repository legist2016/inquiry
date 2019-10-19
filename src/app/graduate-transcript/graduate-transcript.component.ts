import { Component, OnInit } from '@angular/core';
import { UndergraduateTranscriptComponent } from '../undergraduate-transcript/undergraduate-transcript.component'

@Component({
  selector: 'app-graduate-transcript',
  templateUrl: './graduate-transcript.component.html',
  styleUrls: ['./graduate-transcript.component.css']
})
export class GraduateTranscriptComponent extends UndergraduateTranscriptComponent
implements OnInit {  
  
  ngOnInit() {
    this.scoreType = 'masterscore'
  }

}