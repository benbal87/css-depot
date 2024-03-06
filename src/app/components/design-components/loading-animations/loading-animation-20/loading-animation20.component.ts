import { Component } from '@angular/core'
import { DesignItemService } from '../../../../services/design-item.service'
import {
  GeneralDesignComponent
} from '../../general-design/general-design.component'

@Component({
  selector: 'app-loading-animation-20',
  standalone: true,
  imports: [],
  templateUrl: './loading-animation20.component.html',
  styleUrl: './loading-animation20.component.scss'
})
export class LoadingAnimation20Component implements GeneralDesignComponent {

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
              --webkit-transform: scaleY(1.2);
              --moz-transform: scaleY(1.2);
              --ms-transform: scaleY(1.2);
              --o-transform: scaleY(1.2);
              transform: scaleY(1.2);
              background: #6a81a1;
            }
          }


          width: 4rem;
          height: 2rem;

          & > div {
            float: left;
            height: 100%;
            width: 0.3rem;
            margin-right: 0.1rem;
            display: inline-block;

            background-color: #364356;
            --webkit-animation: loading 1.5s infinite ease-in-out;
            --moz-animation: loading 1.5s infinite ease-in-out;
            --o-animation: loading 1.5s infinite ease-in-out;
            animation: loading 1.5s infinite ease-in-out;
            --webkit-transform: scaleY(0.05);
            --moz-transform: scaleY(0.05);
            --ms-transform: scaleY(0.05);
            --o-transform: scaleY(0.05);
            transform: scaleY(0.05);

            $base-time: 0.05;
            $base-height: 100;
            @for $index from 1 through 10 {
              $time: #{calc($base-time * $index)}s;
              $height: calc($base-height + ($index - 1) * 10) * 1%;

              &:nth-child(#{$index}) {
                --webkit-animation-delay: $time;
                --moz-animation-delay: $time;
                --o-animation-delay: $time;
                animation-delay: $time;
                height: $height;
              }
            }
          }
        }
      `
    )
  }

}
