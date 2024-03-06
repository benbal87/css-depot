import { Component } from '@angular/core'
import { DesignItemService } from '../../../../services/design-item.service'
import {
  GeneralDesignComponent
} from '../../general-design/general-design.component'

@Component({
  selector: 'app-loading-animation-14',
  standalone: true,
  imports: [],
  templateUrl: './loading-animation14.component.html',
  styleUrl: './loading-animation14.component.scss'
})
export class LoadingAnimation14Component implements GeneralDesignComponent {

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
              --webkit-transform: scaleY(1.5);
              --moz-transform: scaleY(1.5);
              --ms-transform: scaleY(1.5);
              --o-transform: scaleY(1.5);
              transform: scaleY(1.5);
              background: #8f6d9d;
              opacity: 1;
              filter: alpha(opacity=100);
            }
          }

          height: 2rem;
          width: 5rem;

          & > div {
            float: left;
            height: 100%;
            display: inline-block;

            background-color: #4b3853;
            margin-right: 0;
            --webkit-animation: loading 1.5s infinite ease-in-out;
            --moz-animation: loading 1.5s infinite ease-in-out;
            --o-animation: loading 1.5s infinite ease-in-out;
            animation: loading 1.5s infinite ease-in-out;
            width: 0.5rem;
            opacity: 0;
            filter: alpha(opacity=0);
            --webkit-transform: scaleY(0.1);
            --moz-transform: scaleY(0.1);
            --ms-transform: scaleY(0.1);
            --o-transform: scaleY(0.1);
            transform: scaleY(0.1);

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
