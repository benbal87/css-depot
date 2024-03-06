import { Component } from '@angular/core'
import { DesignItemService } from '../../../../services/design-item.service'
import {
  GeneralDesignComponent
} from '../../general-design/general-design.component'

@Component({
  selector: 'app-loading-animation-16',
  standalone: true,
  imports: [],
  templateUrl: './loading-animation16.component.html',
  styleUrl: './loading-animation16.component.scss'
})
export class LoadingAnimation16Component implements GeneralDesignComponent {

  static get template(): string {
    return DesignItemService.getFormattedTemplateFromString(
      `
        <div class="loader-container">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      `
    )
  }

  static get style(): string {
    return DesignItemService.getFormattedStyle(
      `
        div.loader-container {
          @keyframes loading {
            25% {
              transform: skewY(25deg);
            }
            50% {
              height: 100%;
              transform: skewY(0);
              margin-top: 0;
              background: #72baaa;
            }
            75% {
              transform: skewY(-25deg);
            }
          }

          height: 2.5rem;
          width: 5.5rem;
          overflow: hidden;

          & > div {
            float: left;
            margin-right: 0.1rem;
            display: inline-block;

            background-color: #397467;
            width: 0.5rem;
            position: relative;
            bottom: -0.15rem;
            margin-top: 2.3rem;
            height: 0.2rem;
            transform: skewY(0deg);
            -webkit-animation: loading 1.5s infinite ease-in-out;
            -moz-animation: loading 1.5s infinite ease-in-out;
            -o-animation: loading 1.5s infinite ease-in-out;
            animation: loading 1.5s infinite ease-in-out;

            $base-time: 0.05;
            @for $index from 1 through 10 {
              $time: calc($base-time * $index);
              $time-str: #{$time}s;

              &:nth-child(#{$index}) {
                -webkit-animation-delay: $time-str;
                -moz-animation-delay: $time-str;
                -o-animation-delay: $time-str;
                animation-delay: $time-str;
              }
            }
          }
        }
      `
    )
  }

}
