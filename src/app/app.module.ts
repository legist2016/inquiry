import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { AdmissionListComponent } from "./admission-list/admission-list.component";
import { HomeComponent } from "./home/home.component";
import { UndergraduateTranscriptComponent } from './undergraduate-transcript/undergraduate-transcript.component';
import { GraduateTranscriptComponent } from './graduate-transcript/graduate-transcript.component';
import { ArchivesSearchComponent } from './archives-search/archives-search.component';
import { IdInputComponent } from './controls/id-input/id-input.component';
import { DataService } from './data.service';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HttpClientModule } from "@angular/common/http";
import { InputPadComponent } from './controls/input-pad/input-pad.component';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "admission-list", component: AdmissionListComponent },
      { path: "undergraduate-transcript", component: UndergraduateTranscriptComponent },
      { path: "graduate-transcript", component: GraduateTranscriptComponent },
      { path: "archives-search", component: ArchivesSearchComponent },
    ])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    AdmissionListComponent,
    HomeComponent,
    UndergraduateTranscriptComponent,
    GraduateTranscriptComponent,
    ArchivesSearchComponent,
    IdInputComponent,
    TopBarComponent,
    InputPadComponent,
  ],
  bootstrap: [AppComponent],
  providers: [DataService]
})
export class AppModule {}
