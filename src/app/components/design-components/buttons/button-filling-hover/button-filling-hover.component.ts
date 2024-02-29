import { Component } from '@angular/core';
import { DesignItemService } from '../../../../services/design-item.service'
import {
  GeneralDesignComponent
} from '../../general-design/general-design.component'

@Component({
  selector: 'app-button-filling-hover',
  standalone: true,
  imports: [],
  templateUrl: './button-filling-hover.component.html',
  styleUrl: './button-filling-hover.component.scss'
})
export class ButtonFillingHoverComponent implements GeneralDesignComponent {

  static get template(): string {
    return DesignItemService.getFormattedTemplateFromString(
      `

      `
    )
  }

  static get style(): string {
    return DesignItemService.getFormattedStyle(
      `

      `
    )
  }

}
