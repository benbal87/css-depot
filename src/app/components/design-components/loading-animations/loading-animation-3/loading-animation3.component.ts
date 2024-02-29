import { Component } from '@angular/core'
import { DesignItemService } from '../../../../services/design-item.service'
import {
  GeneralDesignComponent
} from '../../general-design/general-design.component'

@Component({
  selector: 'app-loading-animation-3',
  standalone: true,
  imports: [],
  templateUrl: './loading-animation3.component.html',
  styleUrl: './loading-animation3.component.scss'
})
export class LoadingAnimation3Component implements GeneralDesignComponent {

  static get template(): string {
    return DesignItemService.getFormattedTemplateFromString(
      `
        <div class="loader-container">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </div>
      `
    )
  }

  static get style(): string {
    return DesignItemService.getFormattedStyle(
      `
        div.loader-container {
          @keyframes spin {
            from {
              opacity: 0.0;
            }
            to {
              opacity: 0.6;
              transform: translate3d(-0.25rem, -0.25rem, 36rem);
            }
          }

          position: relative;
          --moz-perspective: 20rem;
          --webkit-perspective: 20rem;
          perspective: 20rem;

          & > i {
            display: block;
            position: absolute;
            width: 0.5rem;
            height: 0.5rem;
            border-radius: 8px;
            opacity: 0;
            background: rgba(255, 255, 255, 0.5);
            box-shadow: 0 0 10px white;
            animation-name: spin;
            animation-duration: 3s;
            animation-iteration-count: infinite;
            animation-timing-function: ease-in-out;

            $degree: 720 / 62;
            $delay: 3 / 62;

            @function get-transform($d) {
              @return rotate(#{$d}deg) translate3d(80px, 0, 0)
            }

            @for $index from 1 through 62 {
              &:nth-child(#{$index}) {
                $degree-actual: $degree * $index;
                $delay-actual: $delay * $index;
                --moz-transform: get-transform($degree-actual);
                --ms-transform: get-transform($degree-actual);
                --webkit-transform: get-transform($degree-actual);
                transform: get-transform($degree-actual);
                animation-delay: #{$delay-actual}s;
              }
            }
          }
        }
      `
    )
  }

}
