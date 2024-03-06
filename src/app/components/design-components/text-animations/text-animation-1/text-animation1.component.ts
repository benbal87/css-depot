import { Component } from '@angular/core'
import { DesignItemService } from '../../../../services/design-item.service'
import {
  GeneralDesignComponent
} from '../../general-design/general-design.component'

@Component({
  selector: 'app-text-animation-1',
  standalone: true,
  imports: [],
  templateUrl: './text-animation1.component.html',
  styleUrl: './text-animation1.component.scss'
})
export class TextAnimation1Component implements GeneralDesignComponent {

  static get template(): string {
    return DesignItemService.getFormattedTemplateFromString(
      `
        <div class="container">
          Text animation
        </div>
      `
    )
  }

  static get style(): string {
    return DesignItemService.getFormattedStyle(
      `
        div.container {
          @keyframes animate {
            0% {
              background-position: -500%;
            }

            100% {
              background-position: 500%;
            }
          }

          position: relative;
          font-family: sans-serif;
          text-transform: uppercase;
          font-size: 2em;
          letter-spacing: 4px;
          overflow: hidden;
          background: linear-gradient(90deg, black, white, black);
          background-size: 80%;
          background-repeat: no-repeat;
          animation: animate 3s linear infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: rgba(255, 255, 255, 0.01);
        }
      `
    )
  }

}
