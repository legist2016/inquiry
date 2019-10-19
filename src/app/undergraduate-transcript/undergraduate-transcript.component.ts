import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "../data.service";


@Component({
  selector: "app-undergraduate-transcript",
  templateUrl: "./undergraduate-transcript.component.html",
  styleUrls: ["./undergraduate-transcript.component.css"]
})
export class UndergraduateTranscriptComponent implements OnInit {
  scoreType = 'score'
  student;
  message;
  busying
  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {}

  onIdInputOk(xh) {
    this.busying = 1
    this.message = null;
    this.dataService
      .getStudent(xh, this.scoreType)
      .then(data => {
        this.student = data;
        this.busying = 0
      })
      .catch(err => {
        this.student = null;
        this.busying = 0
      });
  }

  apply_print(xh) {
    this.message = "";
    if (this.student) {
      this.busying = 1
      this.dataService
        .applyPrintScores(xh, this.scoreType)
        .then(data => {
          this.busying = 0
          window.open("/assets/print.html?id=10000&route="+this.scoreType);
          this.message = "";
          this.router.navigateByUrl("/");
        })
        .catch(err => {
          this.busying = 0
          this.message = "网络错误";
        });
    }
  }
}
