import { Component } from '@angular/core'
import { DesignItemService } from '../../../../services/design-item.service'
import {
  GeneralDesignComponent
} from '../../general-design/general-design.component'

@Component({
  selector: 'app-loading-animation-8',
  standalone: true,
  imports: [],
  templateUrl: './loading-animation8.component.html',
  styleUrl: './loading-animation8.component.scss'
})
export class LoadingAnimation8Component implements GeneralDesignComponent {

  static get template(): string {
    return DesignItemService.getFormattedTemplateFromString(
      `
        <div class="loader-container">
          <div>L</div>
          <div>O</div>
          <div>A</div>
          <div>D</div>
          <div>I</div>
          <div>N</div>
          <div>G</div>
        </div>
      `
    )
  }

  static get style(): string {
    return DesignItemService.getFormattedStyle(
      `
        div.loader-container {
          @-webkit-keyframes bouncing {
            0%, 100% {
              --webkit-transform: scale3d(1, 1, 1);
              transform: scale3d(1, 1, 1);
            }
            50% {
              --webkit-transform: scale3d(0, 0, 1);
              transform: scale3d(0, 0, 1);
            }
          }

          @keyframes bouncing {
            0%, 100% {
              --webkit-transform: scale3d(1, 1, 1);
              transform: scale3d(1, 1, 1);
            }
            50% {
              --webkit-transform: scale3d(0, 0, 1);
              transform: scale3d(0, 0, 1);
            }
          }

          display: flex;
          margin: 1.5rem 0;

          & > div {
            color: white;
            font: normal 100 2rem/1 Roboto;
            letter-spacing: 0.5em;

            -webkit-animation: bouncing 2s infinite ease;
            animation: bouncing 2s infinite ease;

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
