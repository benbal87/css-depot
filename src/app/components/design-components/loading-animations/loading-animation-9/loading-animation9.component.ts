import { Component } from '@angular/core'
import { DesignItemService } from '../../../../services/design-item.service'
import {
  GeneralDesignComponent
} from '../../general-design/general-design.component'

@Component({
  selector: 'app-loading-animation-9',
  standalone: true,
  imports: [],
  templateUrl: './loading-animation9.component.html',
  styleUrl: './loading-animation9.component.scss'
})
export class LoadingAnimation9Component implements GeneralDesignComponent {

  static get template(): string {
    return DesignItemService.getFormattedTemplateFromString(
      `
        <div class="loader-container">
        </div>
      `
    )
  }

  static get style(): string {
    return DesignItemService.getFormattedStyle(
      `
        div.loader-container {
          @keyframes animation-rotate {
            100% {
              --webkit-transform: rotate(360deg);
              --moz-transform: rotate(360deg);
              --o-transform: rotate(360deg);
              transform: rotate(360deg);
            }
          }

          margin: -25px 0 0 -25px;
          height: 50px;
          width: 50px;
          -webkit-animation: animation-rotate 1000ms linear infinite;
          -moz-animation: animation-rotate 1000ms linear infinite;
          -o-animation: animation-rotate 1000ms linear infinite;
          animation: animation-rotate 1000ms linear infinite;

          &, &::before, &::after {
            position: absolute;
            top: 50%;
            left: 50%;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-left-color: rgba(255, 255, 255, 0.4);
            -webkit-border-radius: 999px;
            -moz-border-radius: 999px;
            border-radius: 999px;
          }

          &::before {
            content: "";
            margin: -23px 0 0 -23px;
            height: 44px;
            width: 44px;
            -webkit-animation: animation-rotate 1000ms linear infinite;
            -moz-animation: animation-rotate 1000ms linear infinite;
            -o-animation: animation-rotate 1000ms linear infinite;
            animation: animation-rotate 1000ms linear infinite;
          }

          &::after {
            content: "";
            margin: -29px 0 0 -29px;
            height: 56px;
            width: 56px;
            -webkit-animation: animation-rotate 2000ms linear infinite;
            -moz-animation: animation-rotate 2000ms linear infinite;
            -o-animation: animation-rotate 2000ms linear infinite;
            animation: animation-rotate 2000ms linear infinite;
          }
        }
      `
    )
  }

}
