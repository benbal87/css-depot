import { Component } from '@angular/core'
import { DesignItemService } from '../../../../services/design-item.service'
import {
  GeneralDesignComponent
} from '../../general-design/general-design.component'

@Component({
  selector: 'app-loading-animation-7',
  standalone: true,
  imports: [],
  templateUrl: './loading-animation7.component.html',
  styleUrl: './loading-animation7.component.scss'
})
export class LoadingAnimation7Component implements GeneralDesignComponent {

  static get template(): string {
    return DesignItemService.getFormattedTemplateFromString(
      `
        <div class="loader-container">
          <div>G</div>
          <div>N</div>
          <div>I</div>
          <div>D</div>
          <div>A</div>
          <div>O</div>
          <div>L</div>
        </div>
      `
    )
  }

  static get style(): string {
    return DesignItemService.getFormattedStyle(
      `
        div.loader-container {
          @keyframes move {
            0% {
              left: 0;
              opacity: 0;
            }
            35% {
              left: 41%;
              --moz-transform: rotate(0deg);
              --webkit-transform: rotate(0deg);
              --o-transform: rotate(0deg);
              transform: rotate(0deg);
              opacity: 1;
            }
            65% {
              left: 59%;
              --moz-transform: rotate(0deg);
              --webkit-transform: rotate(0deg);
              --o-transform: rotate(0deg);
              transform: rotate(0deg);
              opacity: 1;
            }
            100% {
              left: 100%;
              --moz-transform: rotate(-180deg);
              --webkit-transform: rotate(-180deg);
              --o-transform: rotate(-180deg);
              transform: rotate(-180deg);
              opacity: 0;
            }
          }

          position: absolute;
          width: 600px;
          height: 36px;
          left: 50%;
          top: 40%;
          margin-left: -300px;
          overflow: visible;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          cursor: default;

          & > div {
            position: absolute;
            width: 20px;
            height: 36px;
            opacity: 0;
            font-family: Helvetica, Arial, sans-serif;
            animation: move 2s linear infinite;
            -o-animation: move 2s linear infinite;
            -moz-animation: move 2s linear infinite;
            -webkit-animation: move 2s linear infinite;
            transform: rotate(180deg);
            ---o-transform: rotate(180deg);
            ---moz-transform: rotate(180deg);
            ---webkit-transform: rotate(180deg);
            color: #35C4F0;

            @function get-time-str($t) {
              @return #{$t}s
            }

            @for $index from 2 through 7 {
              $time: calc(0.2 * ($index - 1));
              $time-str: #{$time}s;

              &:nth-child(#{$index}) {
                animation-delay: $time-str;
                --o-animation-delay: $time-str;
                --moz-animation-delay: $time-str;
                --webkit-animation-delay: $time-str;
              }
            }
          }
        }
      `
    )
  }

}
