import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  getStudent(xh, scoreType) {
    if (scoreType == "score") {
      return this.http.post("/assets/student.json", {xh:xh,type:scoreType}).toPromise<any>();
    } else if (scoreType == "masterscore") {
      return this.http.get("/assets/master.json").toPromise<any>();
    }
  }
  applyPrintScores(xh, scoreType) {
    return this.http
      .get("/assets/apply_print.json?xh=" + xh + "&type=" + scoreType)
      .toPromise<any>();
  }
}
