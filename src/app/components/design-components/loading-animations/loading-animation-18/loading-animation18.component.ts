import { Component } from '@angular/core'
import { DesignItemService } from '../../../../services/design-item.service'
import {
  GeneralDesignComponent
} from '../../general-design/general-design.component'

@Component({
  selector: 'app-loading-animation-18',
  standalone: true,
  imports: [],
  templateUrl: './loading-animation18.component.html',
  styleUrl: './loading-animation18.component.scss'
})
export class LoadingAnimation18Component implements GeneralDesignComponent {

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
            80% {
              background: #6a90b7;
              margin-right: 0.3rem;
              --webkit-transform: translateX(-0.6rem);
              --moz-transform: translateX(-0.6rem);
              --ms-transform: translateX(-0.6rem);
              --o-transform: translateX(-0.6rem);
              transform: translateX(-0.6rem);
            }
          }

          width: 6rem;
          height: 2rem;

          & > div {
            float: left;
            width: 0.3rem;
            display: inline-block;

            background-color: #35506d;
            height: 0.3rem;
            margin-right: 0;
            --webkit-animation: loading 1s infinite ease-in-out;
            --moz-animation: loading 1s infinite ease-in-out;
            --o-animation: loading 1s infinite ease-in-out;
            animation: loading 1s infinite ease-in-out;

            $base-time: 0.05;
            @for $index from 1 through 10 {
              $time: calc($base-time * $index);
              $time-str: #{$time}s;

              &:nth-child(#{$index}) {
                --webkit-animation-delay: $time-str;
                --moz-animation-delay: $time-str;
                --o-animation-delay: $time-str;
                animation-delay: $time-str;
              }
            }
          }
        }
      `
    )
  }

}
