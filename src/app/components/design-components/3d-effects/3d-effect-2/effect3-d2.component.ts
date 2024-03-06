import { Component } from '@angular/core'
import { DesignItemService } from '../../../../services/design-item.service'
import {
  GeneralDesignComponent
} from '../../general-design/general-design.component'

@Component({
  selector: 'app-3d-effect-2',
  standalone: true,
  imports: [],
  templateUrl: './effect3-d2.component.html',
  styleUrl: './effect3-d2.component.scss'
})
export class Effect3D2Component implements GeneralDesignComponent {

  static get template(): string {
    return DesignItemService.getFormattedTemplateFromString(
      `
        <div class="container">
          <div class="img-wrapper">
            <img src="/assets/images/003.jpg">
            <img src="/assets/images/003.jpg">
            <img src="/assets/images/003.jpg">
            <img src="/assets/images/003.jpg">
          </div>
        </div>
      `
    )
  }

  static get style(): string {
    return DesignItemService.getFormattedStyle(
      `
        div.container {
          & > div.img-wrapper {
            position: relative;
            width: 8rem;
            height: 12rem;

            background: rgba(0, 0, 0, 0.2);
            transform: rotate(-30deg) skew(25deg) scale(0.8);
            transition: 0.5s;

            & > img {
              position: absolute;
              width: 100%;
              height: 100%;
              transition: 0.5s;
            }

            &:hover > img {
              $op-start: 0.4;
              $op-inc: 0.2;
              $translate-start: 1;
              @for $index from 1 to 5 {
                &:nth-child(#{$index}) {
                  $t: #{calc($translate-start * $index)}rem;
                  transform: translate($t, -#{$t});
                  opacity: calc($op-start + $op-inc * ($index - 1));
                }
              }
            }
          }
        }
      `
    )
  }

}
