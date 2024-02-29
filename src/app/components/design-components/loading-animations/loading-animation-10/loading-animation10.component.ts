import { Component } from '@angular/core'
import { DesignItemService } from '../../../../services/design-item.service'
import {
  GeneralDesignComponent
} from '../../general-design/general-design.component'

@Component({
  selector: 'app-loading-animation-10',
  standalone: true,
  imports: [],
  templateUrl: './loading-animation10.component.html',
  styleUrl: './loading-animation10.component.scss'
})
export class LoadingAnimation10Component implements GeneralDesignComponent {

  static get template(): string {
    return DesignItemService.getFormattedTemplateFromString(
      `
        <div class="loader-container">
          <span>L</span>
          <span>o</span>
          <span>a</span>
          <span>d</span>
          <span>i</span>
          <span>n</span>
          <span>g</span>
        </div>
      `
    )
  }

  static get style(): string {
    return DesignItemService.getFormattedStyle(
      `
        div.loader-container {
          @keyframes animate {
            0% {
              filter: blur(0);
            }

            40% {
              filter: blur(20px);
            }

            80% {
              filter: blur(0);
            }

            100% {
              filter: blur(0);
            }
          }

          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);

          & > span {
            position: relative;
            color: #fff;
            font-family: sans-serif;
            font-weight: bold;
            letter-spacing: 10px;
            text-transform: uppercase;
            font-size: 20px;
            animation: animate 3s linear infinite;

            @for $index from 1 through 7 {
              $time: calc($index / 10);
              $time-str: #{$time}s;

              &:nth-child(#{$index}) {
                --webkit-animation-delay: $time-str;
                animation-delay: $time-str;
              }
            }
          }
        }
      `
    )
  }

}
