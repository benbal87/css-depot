import { Component } from '@angular/core'
import { DesignItemService } from '../../../../services/design-item.service'
import {
  GeneralDesignComponent
} from '../../general-design/general-design.component'

@Component({
  selector: 'app-loading-animation-5',
  standalone: true,
  imports: [],
  templateUrl: './loading-animation5.component.html',
  styleUrl: './loading-animation5.component.scss'
})
export class LoadingAnimation5Component implements GeneralDesignComponent {

  static get template(): string {
    return DesignItemService.getFormattedTemplateFromString(
      `
        <div class="loader-container">
          loading
          <span></span>
        </div>
      `
    )
  }

  static get style(): string {
    return DesignItemService.getFormattedStyle(
      `
        div.loader-container {
          @keyframes animateCircle {
            0% {
              transform: rotate(0deg);
            }

            100% {
              transform: rotate(360deg);
            }
          }

          @keyframes animate {
            0% {
              transform: rotate(45deg);
            }

            100% {
              transform: rotate(405deg);
            }
          }

          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 150px;
          height: 150px;
          background: transparent;
          border: 3px solid #3c3c3c;
          border-radius: 50%;
          text-align: center;
          line-height: 150px;
          font-family: sans-serif;
          font-size: 20px;
          color: yellow;
          letter-spacing: 4px;
          text-transform: uppercase;
          text-shadow: 0 0 10px yellow;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);

          &::before {
            content: "";
            position: absolute;
            top: -3px;
            left: -3px;
            width: 100%;
            height: 100%;
            border: 3px solid transparent;
            border-top: 3px solid yellow;
            border-right: 3px solid yellow;
            border-radius: 50%;
            animation: animateCircle 2s linear infinite;
          }

          & > span {
            display: block;
            position: absolute;
            top: calc(50% - 2px);
            left: 50%;
            width: 50%;
            height: 4px;
            background: transparent;
            transform-origin: left;
            animation: animate 2s linear infinite;

            &::before {
              content: "";
              position: absolute;
              width: 16px;
              height: 16px;
              border-radius: 50%;
              background-color: yellow;
              top: -6px;
              right: -8px;
              box-shadow: 0 0 20px yellow;
            }
          }
        }
      `
    )
  }

}
