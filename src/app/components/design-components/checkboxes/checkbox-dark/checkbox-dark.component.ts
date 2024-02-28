import { Component } from '@angular/core'
import { DesignItemService } from '../../../../services/design-item.service'
import {
  DesignItemWrapperComponent
} from '../../../design-item-wrapper/design-item-wrapper.component'
import {
  GeneralDesignComponent
} from '../../general-design/general-design.component'

@Component({
  selector: 'checkbox-dark',
  standalone: true,
  imports: [
    DesignItemWrapperComponent
  ],
  templateUrl: './checkbox-dark.component.html',
  styleUrl: './checkbox-dark.component.scss'
})
export class CheckboxDarkComponent implements GeneralDesignComponent {

  static get template(): string {
    return DesignItemService.getFormattedTemplateFromString(
      `
      <div class="checkbox-container">
        <input
          id="checkboxDark"
          type="checkbox"
          class="checkbox-dark"
          [disabled]="false"
        />
        <label for="checkboxDark">
          Checkbox Label
        </label>
      </div>

      <div class="checkbox-container">
        <input
          id="checkboxDarkDisabled"
          type="checkbox"
          class="checkbox-dark"
          [disabled]="true"
        />
        <label for="checkboxDark">
          Checkbox Label Disabled
        </label>
      </div>
    `
    )
  }

  static get style(): string {
    return DesignItemService.getFormattedStyle(
      `
          div.checkbox-container {
           $width: 3rem;
           $height: calc($width * 0.3333);
           $border-radius: calc($width * 0.1666);
           $dot-diameter: calc($width * 0.03333333);
           $dot-radius: calc($dot-diameter / 2);
           $default-text-color: #d3e3fd;
           $default-text-color-dark: #96a7bf;

           display: flex;
           align-items: center;
           justify-content: center;

           input[type="checkbox"].checkbox-dark {
             cursor: pointer;
             position: relative;
             width: $width;
             height: $height;
             -webkit-appearance: none;
             background: linear-gradient(0deg, #333333, #000000);
             outline: none;
             border-radius: $border-radius;
             box-shadow: 0 0 0 calc($width * 0.0333) #353535,
             0 0 0 calc($width * 0.0416) #3e3e3e,
             inset 0 0 calc($width * 0.0833) rgba(0, 0, 0, 1),
             0 calc($width * 0.0416) calc($width * 0.1666) rgba(0, 0, 0, 0.5),
             inset 0 0 calc($width * 0.125) rgba(0, 0, 0, 0.2);

             &:checked {
               background: linear-gradient(0deg, #6dd1ff, #20b7ff);
               box-shadow: 0 0 calc($width * 0.0166) #6dd1ff,
               0 0 0 calc($width * 0.0333) #353535,
               0 0 0 calc($width * 0.0416) #3e3e3e,
               inset 0 0 calc($width * 0.0833) rgba(0, 0, 0, 1),
               0 calc($width * 0.0416) calc($width * 0.1666) rgba(0, 0, 0, 0.5),
               inset 0 0 calc($width * 0.125) rgba(0, 0, 0, 0.2);

               &:before {
                 left: $height;
               }

               &:after {
                 background: #63cdff;
                 left: calc($width * 0.875);
                 box-shadow: 0 0 calc($width * 0.0416) #13b3ff,
                 0 0 calc($width * 0.125) #13b3ff;
               }
             }

             &:before {
               content: "";
               position: absolute;
               top: 0;
               left: 0;
               width: calc($width * 0.6666);
               height: $height;
               background: linear-gradient(0deg, #000000, #6b6b6b);
               border-radius: $border-radius;
               box-shadow: 0 0 0 calc($width * 0.0083) #232323;
               transform: scale(0.98, 0.96);
               transition: 0.5s;
             }

             &:after {
               content: "";
               position: absolute;
               top: calc(50% - $dot-radius);
               left: calc($width * 0.5416);
               width: $dot-diameter;
               height: $dot-diameter;
               background: linear-gradient(0deg, #6b6b6b, #000000);
               border-radius: 50%;
               transition: 0.5s;
             }

             &:not(:disabled) ~ label {
               cursor: pointer;
               color: $default-text-color;

               &:hover {
                 color: $default-text-color-dark;
               }
             }

             &:disabled {
               cursor: not-allowed;
               opacity: 0.5;

               & ~ label {
                 cursor: not-allowed;
                 opacity: 0.5;
                 color: $default-text-color-dark;
               }
             }
           }

           label:first-child {
             margin-left: 0.5rem;
           }

           label:last-child {
             margin-right: 0.5rem;
           }
         }
      `
    )
  }
}
