import { Component, Input } from '@angular/core';
import { IResult } from '../shared/iresult';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent {

  @Input()
  result: IResult = null;

  constructor() { }

}
