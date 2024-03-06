import { Component } from '@angular/core'
import { DesignItemService } from '../../../../services/design-item.service'
import {
  GeneralDesignComponent
} from '../../general-design/general-design.component'

@Component({
  selector: 'app-3d-effect-1',
  standalone: true,
  imports: [],
  templateUrl: './effect3-d1.component.html',
  styleUrl: './effect3-d1.component.scss'
})
export class Effect3D1Component implements GeneralDesignComponent {

  static get template(): string {
    return DesignItemService.getFormattedTemplateFromString(
      `
        <div class="container">
          <div class="front">
            <img src="/assets/images/001.jpg">
          </div>
          <div class="back">
            <img src="/assets/images/002.jpg">
          </div>
        </div>
      `
    )
  }

  static get style(): string {
    return DesignItemService.getFormattedStyle(
      `
        div.container {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 20rem;
          height: 15rem;
          transform-style: preserve-3d;
          perspective: 20rem;
          transition: 0.5s;

          img {
            width: 100%;
            height: 100%;
            object-fit: scale-down;
          }

          & > div.front {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: transparent;
            backface-visibility: hidden;
            transform: rotateX(0deg);
            transition: 0.5s;
          }

          & > div.back {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: transparent;
            backface-visibility: hidden;
            transform: rotateX(180deg);
            transition: 0.5s;
          }

          &:hover > {
            div.front {
              transform: rotateX(-180deg);
            }

            div.back {
              transform: rotateX(0deg);
            }
          }
        }
      `
    )
  }

}
