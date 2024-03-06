import { Component } from '@angular/core'
import { DesignItemService } from '../../../../services/design-item.service'
import {
  GeneralDesignComponent
} from '../../general-design/general-design.component'

@Component({
  selector: 'app-loading-animation-12',
  standalone: true,
  imports: [],
  templateUrl: './loading-animation12.component.html',
  styleUrl: './loading-animation12.component.scss'
})
export class LoadingAnimation12Component implements GeneralDesignComponent {

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
            10% {
              background: #9eb7bc;
            }
            15% {
              --webkit-transform: scaleY(1.2) translateX(0.6rem);
              --moz-transform: scaleY(1.2) translateX(0.6rem);
              --ms-transform: scaleY(1.2) translateX(0.6rem);
              --o-transform: scaleY(1.2) translateX(0.6rem);
              transform: scaleY(1.2) translateX(0.6rem);
              background: #9eb7bc;
            }
            90%, 100% {
              --webkit-transform: scaleY(0.05) translateX(-0.3rem);
              --moz-transform: scaleY(0.05) translateX(-0.3rem);
              --ms-transform: scaleY(0.05) translateX(-0.3rem);
              --o-transform: scaleY(0.05) translateX(-0.3rem);
              transform: scaleY(0.05) translateX(-0.3rem);
            }
          }

          width: 4rem;
          height: 2rem;

          & > div {
            float: left;
            height: 100%;
            width: 0.3rem;
            margin-right: 0.07rem;
            display: inline-block;

            background-color: #597b81;
            --webkit-animation: loading 1.5s infinite ease-in-out;
            --moz-animation: loading 1.5s infinite ease-in-out;
            --o-animation: loading 1.5s infinite ease-in-out;
            animation: loading 1.5s infinite ease-in-out;
            --webkit-transform: scaleY(0.05) translateX(-0.3rem);
            --moz-transform: scaleY(0.05) translateX(-0.3rem);
            --ms-transform: scaleY(0.05) translateX(-0.3rem);
            --o-transform: scaleY(0.05) translateX(-0.3rem);
            transform: scaleY(0.05) translateX(-0.3rem);

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
