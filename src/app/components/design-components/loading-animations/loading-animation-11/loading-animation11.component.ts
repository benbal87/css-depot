import { Component } from '@angular/core'
import { DesignItemService } from '../../../../services/design-item.service'
import {
  GeneralDesignComponent
} from '../../general-design/general-design.component'

@Component({
  selector: 'app-loading-animation-11',
  standalone: true,
  imports: [],
  templateUrl: './loading-animation11.component.html',
  styleUrl: './loading-animation11.component.scss'
})
export class LoadingAnimation11Component implements GeneralDesignComponent {

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
            50% {
              --webkit-transform: scaleY(1.2) translateX(0.6rem);
              --moz-transform: scaleY(1.2) translateX(0.6rem);
              --ms-transform: scaleY(1.2) translateX(0.6rem);
              --o-transform: scaleY(1.2) translateX(0.6rem);
              transform: scaleY(1.2) translateX(0.6rem);
              background-color: #a5b976;
            }
          }

          width: 4rem;
          height: 2rem;

          & > div {
            float: left;
            height: 100%;
            width: 0.3rem;
            margin-right: 0.06rem;
            display: inline-block;

            background-color: #63743b;
            --webkit-animation: loading 1.5s infinite ease-in-out;
            --moz-animation: loading 1.5s infinite ease-in-out;
            --o-animation: loading 1.5s infinite ease-in-out;
            animation: loading 1.5s infinite ease-in-out;
            --webkit-transform: scaleY(0.05) translateX(-0.6rem);
            --moz-transform: scaleY(0.05) translateX(-0.6rem);
            --ms-transform: scaleY(0.05) translateX(-0.6rem);
            --o-transform: scaleY(0.05) translateX(-0.6rem);
            transform: scaleY(0.05) translateX(-0.6rem);

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
