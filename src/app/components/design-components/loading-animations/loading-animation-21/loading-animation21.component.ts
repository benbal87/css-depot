import { Component } from '@angular/core'
import { DesignItemService } from '../../../../services/design-item.service'
import {
  GeneralDesignComponent
} from '../../general-design/general-design.component'

@Component({
  selector: 'app-loading-animation-21',
  standalone: true,
  imports: [],
  templateUrl: './loading-animation21.component.html',
  styleUrl: './loading-animation21.component.scss'
})
export class LoadingAnimation21Component implements GeneralDesignComponent {

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
              --webkit-transform: translate(-50%, -50%) rotate(360deg);
              --moz-transform: translate(-50%, -50%) rotate(360deg);
              --ms-transform: translate(-50%, -50%) rotate(360deg);
              --o-transform: translate(-50%, -50%) rotate(360deg);
              transform: translate(-50%, -50%) rotate(360deg);
              border-color: #758bc3 transparent;
            }
          }

          position: relative;
          width: 6.25rem;
          height: 6.25rem;

          & > div {
            float: left;
            height: 100%;
            width: 0.3rem;
            margin-right: 0.1rem;
            display: inline-block;

            background-color: transparent;
            border: 8px solid;
            border-color: #384c81 transparent;
            -webkit-border-radius: 100%;
            -moz-border-radius: 100%;
            border-radius: 100%;
            position: absolute;
            top: 50%;
            left: 50%;
            --webkit-transform: translate(-50%, -50%) rotate(0);
            --moz-transform: translate(-50%, -50%) rotate(0);
            --ms-transform: translate(-50%, -50%) rotate(0);
            --o-transform: translate(-50%, -50%) rotate(0);
            transform: translate(-50%, -50%) rotate(0);
            -webkit-animation: loading 2s infinite ease-in-out;
            -moz-animation: loading 2s infinite ease-in-out;
            -o-animation: loading 2s infinite ease-in-out;
            animation: loading 2s infinite ease-in-out;

            $base-time: 0.1;
            $base-size: 1.25;
            $size-inc: 0.3;
            @for $index from 1 through 10 {
              $time-str: #{calc($base-time * $index)}s;
              $size: #{calc($base-size + ($index - 1) * $size-inc)}rem;

              &:nth-child(#{$index}) {
                -webkit-animation-delay: $time-str;
                -moz-animation-delay: $time-str;
                -o-animation-delay: $time-str;
                animation-delay: $time-str;
                width: $size;
                height: $size;
              }
            }
          }
        }
      `
    )
  }

}
