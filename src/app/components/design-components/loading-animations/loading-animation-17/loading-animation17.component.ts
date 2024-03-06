import { Component } from '@angular/core'
import { DesignItemService } from '../../../../services/design-item.service'
import {
  GeneralDesignComponent
} from '../../general-design/general-design.component'

@Component({
  selector: 'app-loading-animation-17',
  standalone: true,
  imports: [],
  templateUrl: './loading-animation17.component.html',
  styleUrl: './loading-animation17.component.scss'
})
export class LoadingAnimation17Component implements GeneralDesignComponent {

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
              background: #af696f;
              --webkit-transform: translateY(0.6rem);
              --moz-transform: translateY(0.6rem);
              --ms-transform: translateY(0.6rem);
              --o-transform: translateY(0.6rem);
              transform: translateY(0.6rem);
            }
          }

          width: 4rem;
          height: 2rem;

          & > div {
            float: left;
            width: 0.3rem;
            margin-right: 0.1rem;
            display: inline-block;

            background-color: #633539;
            height: 0.2rem;
            --webkit-animation: loading 1s infinite ease-in-out;
            --moz-animation: loading 1s infinite ease-in-out;
            --o-animation: loading 1s infinite ease-in-out;
            animation: loading 1s infinite ease-in-out;
            --webkit-transform: translateY(-0.6rem);
            --moz-transform: translateY(-0.6rem);
            --ms-transform: translateY(-0.6rem);
            --o-transform: translateY(-0.6rem);
            transform: translateY(-0.6rem);

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
