import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  // providers: [{ provide: TooltipConfig, useFactory: getAlertConfig }]
})
export class MainComponent implements OnInit {
 public collapsed = false;
    constructor() { }

  ngOnInit() {
  }
}

// export function getAlertConfig(): TooltipConfig {
//     return Object.assign(new TooltipConfig(), {
//       placement: 'right',
//       container: 'body'
//     }
//     );
//   }



