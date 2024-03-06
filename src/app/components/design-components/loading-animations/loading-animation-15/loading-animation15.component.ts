import { Component } from '@angular/core'
import { DesignItemService } from '../../../../services/design-item.service'
import {
  GeneralDesignComponent
} from '../../general-design/general-design.component'

@Component({
  selector: 'app-loading-animation-15',
  standalone: true,
  imports: [],
  templateUrl: './loading-animation15.component.html',
  styleUrl: './loading-animation15.component.scss'
})
export class LoadingAnimation15Component implements GeneralDesignComponent {

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
              height: 100%;
              margin-top: 0;
              background: #8b816f;
            }
          }

          width: 4rem;
          height: 2.5rem;

          & > div {
            float: left;
            width: 0.3rem;
            margin-right: 0.07rem;
            display: inline-block;

            background-color: #443f36;
            position: relative;
            bottom: 0;
            margin-top: 2rem;
            height: 0.3rem;
            -webkit-animation: loading 1.5s infinite ease-in-out;
            -moz-animation: loading 1.5s infinite ease-in-out;
            -o-animation: loading 1.5s infinite ease-in-out;
            animation: loading 1.5s infinite ease-in-out;

            $base-time: -1.5;
            $time-inc: 0.1;
            @for $index from 1 through 10 {
              $time: calc($base-time + $time-inc * ($index - 1));
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
