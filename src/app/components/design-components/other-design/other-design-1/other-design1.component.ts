import { Component } from '@angular/core'
import { DesignItemService } from '../../../../services/design-item.service'
import {
  GeneralDesignComponent
} from '../../general-design/general-design.component'

@Component({
  selector: 'app-other-design-1',
  standalone: true,
  imports: [],
  templateUrl: './other-design1.component.html',
  styleUrl: './other-design1.component.scss'
})
export class OtherDesign1Component implements GeneralDesignComponent {

  static get template(): string {
    return DesignItemService.getFormattedTemplateFromString(
      `
        <div class="container">
        </div>
      `
    )
  }

  static get style(): string {
    return DesignItemService.getFormattedStyle(
      `
        div.container {
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          background: -webkit-radial-gradient(circle at 65% 15%, white 1px, aqua 3%, darkblue 60%, aqua 100%);
          background: -moz-radial-gradient(circle at 65% 15%, white 1px, aqua 3%, darkblue 60%, aqua 100%);
          background: -o-radial-gradient(circle at 65% 15%, white 1px, aqua 3%, darkblue 60%, aqua 100%);
          background: radial-gradient(circle at 65% 15%, white 1px, aqua 3%, darkblue 60%, aqua 100%);
        }
      `
    )
  }

}
