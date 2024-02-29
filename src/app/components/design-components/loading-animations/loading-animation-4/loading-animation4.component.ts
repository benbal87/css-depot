import { Component } from '@angular/core'
import { DesignItemService } from '../../../../services/design-item.service'
import {
  GeneralDesignComponent
} from '../../general-design/general-design.component'

@Component({
  selector: 'app-loading-animation-4',
  standalone: true,
  imports: [],
  templateUrl: './loading-animation4.component.html',
  styleUrl: './loading-animation4.component.scss'
})
export class LoadingAnimation4Component implements GeneralDesignComponent {

  static get template(): string {
    return DesignItemService.getFormattedTemplateFromString(
      `
        <div class="loader-container">
          <div class="box"></div>
        </div>
      `
    )
  }

  static get style(): string {
    return DesignItemService.getFormattedStyle(
      `
        div.loader-container {
          @keyframes animate {
            17% {
              border-bottom-right-radius: 3px;
            }
            25% {
              transform: translateY(9px) rotate(22.5deg);
            }
            50% {
              transform: translateY(18px) scale(1, .9) rotate(45deg);
              border-bottom-right-radius: 40px;
            }
            75% {
              transform: translateY(9px) rotate(67.5deg);
            }
            100% {
              transform: translateY(0) rotate(90deg);
            }
          }

          @keyframes shadow {
            0%, 100% {
              transform: scale(1, 1);
            }
            50% {
              transform: scale(1.2, 1);
            }
          }

          div.box {
            width: 50px;
            height: 50px;
            margin: auto;
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;

            &:before {
              content: '';
              width: 50px;
              height: 5px;
              background: #000;
              opacity: 0.1;
              position: absolute;
              top: 59px;
              left: 0;
              border-radius: 50%;
              animation: shadow .5s linear infinite;
            }

            &:after {
              content: '';
              width: 50px;
              height: 50px;
              background: #1A6844;
              animation: animate .5s linear infinite;
              position: absolute;
              top: 0;
              left: 0;
              border-radius: 3px;
            }
          }
        }
      `
    )
  }

}