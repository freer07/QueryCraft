import { Component, OnInit } from '@angular/core';
import { apiManager } from '../apiManager';

@Component({
  selector: 'app-query-rank',
  templateUrl: './query-rank.component.html',
  styleUrls: ['./query-rank.component.css']
})
export class QueryRankComponent implements OnInit {
  resultText = ''
  resultVal = 0.0
  manager: apiManager
  rgb = ''
  color1 = { red: 255, green: 0, blue: 0 }
  color2 = { red: 128, green: 128, blue: 128 }
  color3 = { red: 10, green: 255, blue: 0 }
  constructor() {
    this.manager = new apiManager()
  }

  ngOnInit (): void {
  }

  submit (event: any) {
    this.manager.analyse(event.target.value).then(response => {
      return response.json();
    }).then(data => {
      console.log(data)
      this.resultText = data.prediction
      this.resultVal = data.confidence
      if (this.resultText == 'bad') {
        this.resultVal = this.resultVal * -1
      }
      this.resultVal = (this.resultVal + 1) / 2

      console.log(this.resultVal)
      this.rgb = colorGradient(this.resultVal, this.color1, this.color2, this.color3)
    }).catch(error => {
      console.log('error', error)
    })
  }
}

function colorGradient (fadeFraction: number, rgbColor1: { red: number, green: number, blue: number }, rgbColor2: { red: number, green: number, blue: number }, rgbColor3: { red: number, green: number, blue: number }) {
  var color1 = rgbColor1;
  var color2 = rgbColor2;
  var fade = fadeFraction;

  // Do we have 3 colors for the gradient? Need to adjust the params.
  if (rgbColor3) {
    fade = fade * 2;

    // Find which interval to use and adjust the fade percentage
    if (fade >= 1) {
      fade -= 1;
      color1 = rgbColor2;
      color2 = rgbColor3;
    }
  }

  var diffRed = color2.red - color1.red;
  var diffGreen = color2.green - color1.green;
  var diffBlue = color2.blue - color1.blue;

  var gradient = {
    red: parseInt(Math.floor(color1.red + (diffRed * fade)).toString(), 10),
    green: parseInt(Math.floor(color1.green + (diffGreen * fade)).toString(), 10),
    blue: parseInt(Math.floor(color1.blue + (diffBlue * fade)).toString(), 10),
  };

  return 'rgb(' + gradient.red + ',' + gradient.green + ',' + gradient.blue + ')';
}
