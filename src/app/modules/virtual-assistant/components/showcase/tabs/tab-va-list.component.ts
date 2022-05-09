import { Breakpoints } from '@angular/cdk/layout';
import { Component, Input } from '@angular/core';
import { Indent } from './microcomponents/code-enum';
import { Code } from './microcomponents/code-interface';
import { StyleCode } from './microcomponents/code-style';

@Component({
  selector: 'tab-va-list',
  templateUrl: './tab-va-list.component.html',
  styleUrls: ['./microcomponents/code-style.css']
})
export class TabVaListComponent {

  @Input('currentBreakpoint') currentBreakpoint: string = "";

  get breakpoint(): number {
    if (this.currentBreakpoint == Breakpoints.XSmall
      || this.currentBreakpoint == Breakpoints.Small) {
      return 1;
    } else if (
      this.currentBreakpoint == Breakpoints.Medium
      || this.currentBreakpoint == Breakpoints.Large
      || this.currentBreakpoint == Breakpoints.XLarge) {
      return 2;
    } 
    return 0;
  }

  get ratio(): string {
    switch (this.currentBreakpoint) {
      case Breakpoints.XSmall:
        return "330px";
      case Breakpoints.Small:
        return "380px";
      case Breakpoints.Medium:
        return "400px";
      case Breakpoints.Large:
        return "480px";
      case Breakpoints.XLarge:
        return "500px";
      default:
        return "520px";
    }
  }

  showWord: string = "Hello!";

  mainSelectorComponent: string = "virtual-assistant-list";

  case1: Code = {
    title: 'Case 1',
    subtitle: `Basic <b>${this.mainSelectorComponent}</b> with INPUT string[]`,
    show: [
      StyleCode.comment(this.mainSelectorComponent),
      StyleCode.open(Indent.NOINDENT, this.mainSelectorComponent, Indent.NOINDENT, ["[listDataInput]", "'myListData'"]),
      StyleCode.close(Indent.NOINDENT, this.mainSelectorComponent),
      StyleCode.comment(this.mainSelectorComponent, true)

    ],
    copy: [
      `${StyleCode.copyComment(this.mainSelectorComponent)}`,
      `\n<${this.mainSelectorComponent} [listDataInput]="['a', 'b', 'c']">`,
      `\n</${this.mainSelectorComponent}>`,
      `\n${StyleCode.copyComment(this.mainSelectorComponent, true)}`
    ]
  }

  listData: string[] = [
    "Lorem 1",
    "Lorem 2",
    "Lorem 3",
    "Lorem 4",
    "Lorem 5"
  ];

}
