import { Component } from '@angular/core'
import { DesignItemService } from '../../../../services/design-item.service'
import {
  GeneralDesignComponent
} from '../../general-design/general-design.component'

@Component({
  selector: 'app-loading-animation-6',
  standalone: true,
  imports: [],
  templateUrl: './loading-animation6.component.html',
  styleUrl: './loading-animation6.component.scss'
})
export class LoadingAnimation6Component implements GeneralDesignComponent {

  static get template(): string {
    return DesignItemService.getFormattedTemplateFromString(
      `
        <div class="loader-container">
          <h2>Loading...</h2>
          <svg x="0px" y="0px" viewBox="0 0 150 150">
            <circle cx="75" cy="75" r="60" />
          </svg>
        </div>
      `
    )
  }

  static get style(): string {
    return DesignItemService.getFormattedStyle(
      `
        div.loader-container {
          @keyframes loading {
            0% {
              transform: rotate(0);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          @keyframes loading-circle {
            0% {
              stroke-dashoffset: 0
            }
            100% {
              stroke-dashoffset: -600;
            }
          }

          & > h2 {
            text-align: center;
            margin-bottom: 1em;
            font-weight: 300;
            color: white;
          }

          & > svg {
            width: 150px;
            animation: loading 3s linear infinite;

            & > circle {
              stroke-dashoffset: 0;
              stroke-dasharray: 300;
              stroke-width: 10;
              stroke-miterlimit: 10;
              stroke-linecap: round;
              stroke: white;
              animation: loading-circle 2s linear infinite;
              fill: transparent;
            }
          }
        }
      `
    )
  }

}
