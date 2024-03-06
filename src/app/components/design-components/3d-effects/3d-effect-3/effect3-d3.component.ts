import { Component } from '@angular/core'
import { DesignItemService } from '../../../../services/design-item.service'
import {
  GeneralDesignComponent
} from '../../general-design/general-design.component'

@Component({
  selector: 'app-3d-effect-3',
  standalone: true,
  imports: [],
  templateUrl: './effect3-d3.component.html',
  styleUrl: './effect3-d3.component.scss'
})
export class Effect3D3Component implements GeneralDesignComponent {

  static get template(): string {
    return DesignItemService.getFormattedTemplateFromString(
      `
        <section class="container">
          <div class="layer1"></div>
          <div class="layer2"></div>
        </section>
      `
    )
  }

  static get style(): string {
    return DesignItemService.getFormattedStyle(
      `
        section.container {
          position: relative;
          width: 100%;
          height: 100%;

          & > div.layer1 {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 15rem;
            height: 10rem;
            background: url(/assets/images/002.jpg);
            background-position: center;
            z-index: 1;
            transition: 2s;

            &:hover {
              box-shadow: 0 25px 60px rgba(0, 0, 0, 0.8);

              & ~ .layer2 {
                filter: blur(10px);
              }
            }
          }

          & > div.layer2 {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url(/assets/images/002.jpg);
            background-position: center;
            transition: 2s;
          }
        }
      `
    )
  }

}
