import { Component } from '@angular/core';

import { pipelines } from 'media-stream-library/dist/esm/index.browser.js'

// no error unless the pipeline class is referenced
pipelines.Html5VideoPipeline;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'issue260';
}
