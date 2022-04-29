import { Component } from '@angular/core';
import { Indent } from './microcomponents/code-enum';
import { Code } from './microcomponents/code-interface';
import { StyleCode } from './microcomponents/code-style';

@Component({
  selector: 'tab-va-tree',
  templateUrl: './tab-va-tree.component.html',
  styleUrls: ['./microcomponents/code-style.css']
})
export class TabVaTreeComponent {

  colTotal: string = "2";

  colSpan: string = "2";

  rowHeightProp: string = "700px";

  showWord: string = "Hello!";

  mainSelectorComponent: string = "virtual-assistant-tree";

  case1: Code = {
    title: 'Case 1',
    subtitle: `Basic <b>${this.mainSelectorComponent}</b> with INPUT`,
    show: [
      StyleCode.comment(this.mainSelectorComponent),
      StyleCode.open(Indent.NOINDENT, this.mainSelectorComponent, Indent.NOINDENT, ["[treeDataInput]", "'myData'"]),
      StyleCode.close(Indent.NOINDENT, this.mainSelectorComponent),
      StyleCode.comment(this.mainSelectorComponent, true)

    ],
    copy: [
      `${StyleCode.copyComment(this.mainSelectorComponent)}`,
      `\n<${this.mainSelectorComponent} [treeDataInput]='myData'>`,
      `\n</${this.mainSelectorComponent}>`,
      `\n${StyleCode.copyComment(this.mainSelectorComponent, true)}`
    ]
  }

  TREE_DATA = {
    COMPONENTS: {
      showcase: {
        tabs: {
          microcomponents: {
            "case-title.components.ts": null,
            "code-copy-container.component.ts": null,
            "code-enum.ts": null,
            "code-interface.ts": null,
            "code-style.css": null,
            "code-style.ts": null
          },
          "tab-sandbox.component.html": null,
          "tab-sandbox.component.ts": null,
          "tab-showcase.component.html": null,
          "tab-showcase.component.ts": null,
          "tab-va-accordion.component.html": null,
          "tab-va-accordion.component.ts": null,
          "tab-va-buttons-container.component.html": null,
          "tab-va-buttons-container.component.ts": null,
          "tab-va-container.component.html": null,
          "tab-va-container.component.ts": null,
          "tab-va-list.component.html": null,
          "tab-va-list.component.ts": null,
          "tab-va-tree.component.html": null,
          "tab-va-tree.component.ts": null
        },
        "virtual-assistant-component-showcase.module": null,
        "virtual-assistant-showcase.component.ts": null
      },
      super: {
        "base-container.component.ts": null
      },
      tools: {
        "color-tools.ts": null
      },
      "virtual-assistant-accordion": {
        component: {
          "virtual-assistant-accordion.component.css": null,
          "virtual-assistant-accordion.component.html": null,
          "virtual-assistant-accordion.component.ts": null
        },
        "virtual-assistant-accordion.module.ts": null
      },
      "virtual-assistant-buttons-container": {
        component: {
          "virtual-assistant-buttons-container.component.css": null,
          "virtual-assistant-buttons-container.component.html": null,
          "virtual-assistant-buttons-container.component.ts": null
        },
        "virtual-assistant-buttons-container.module.ts": null
      },
      "virtual-assistant-container": {
        component: {
          "virtual-assistant-container.component.css": null,
          "virtual-assistant-container.component.html": null,
          "virtual-assistant-container.component.ts": null
        },
        "virtual-assistant-container.module.ts": null
      },
      "virtual-assistant-list": {
        component: {
          "virtual-assistant-list.component.css": null,
          "virtual-assistant-list.component.html": null,
          "virtual-assistant-list.component.ts": null
        },
        "virtual-assistant-list.module.ts": null
      },
      "virtual-assistant-tree": {
        component: {
          "virtual-assistant-tree.component.css": null,
          "virtual-assistant-tree.component.html": null,
          "virtual-assistant-tree.component.ts": null
        },
        models: {
          "todo-item-flat-node.ts": null,
          "todo-item-node.ts": null
        },
        service: {
          "checklist-data-base.service.ts": null
        },
        "virtual-assistant-tree.module.ts": null
      },
      "virtual-assistant-components.module.ts": null
    },
    CONTENTS: {
      "virtual-assistant-main-content": {
        "virtual-assistant-main-content.component.html": null,
        "virtual-assistant-main-content-component.ts": null
      },
      "virtual-assistant-contents.module.ts": null
    },
    MODELS: {
      "business-assistant.model.ts": null
    },
    SERVICES: {
      "virtual-assistant-categories.service.ts": null
    },
    "VIRTUAL-ASSISTANT-PAGE": {
      "virtual-assistant-page.comopnent.html": null,
      "virtual-assistant-page.component.ts": null
    },
    "virtual-assistant-module.ts": null

  }

  constructor() { }

}
