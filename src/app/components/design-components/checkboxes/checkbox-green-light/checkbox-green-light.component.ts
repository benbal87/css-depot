import { Component } from '@angular/core'
import { DesignItemService } from '../../../../services/design-item.service'
import {
  GeneralDesignComponent
} from '../../general-design/general-design.component'

@Component({
  selector: 'app-checkbox-green-light',
  standalone: true,
  imports: [],
  templateUrl: './checkbox-green-light.component.html',
  styleUrl: './checkbox-green-light.component.scss'
})
export class CheckboxGreenLightComponent implements GeneralDesignComponent {

  static get template(): string {
    return DesignItemService.getFormattedTemplateFromString(
      `
      <div class="checkbox-green-light-container">
        <input type="checkbox" id="checkboxGreenLight">
        <label for="checkboxGreenLight">
          Checkbox Green Light Label
        </label>
      </div>

      <div class="checkbox-green-light-container">
        <input
          type="checkbox"
          id="checkboxGreenLightDisabled"
          disabled
        >
        <label for="checkboxGreenLightDisabled">
          Disabled Checkbox Green Light Label
        </label>
      </div>
    `
    )
  }

  static get style(): string {
    return DesignItemService.getFormattedStyle(
      `
        div.checkbox-green-light-container {
          display: flex;
          justify-content: center;
          align-items: center;
          user-select: none;

          input[type="checkbox"] {
            -webkit-appearance: none;
            position: relative;
            outline: none;
            width: 38px;
            height: 18px;
            border-radius: 20px;
            background-color: white;
            box-shadow: 0 0 5px 2px #e6e6e6;

            & + label {
              margin-left: 0.5rem;
            }

            &,
            & + label {
              cursor: pointer;
            }

            &:checked {
              box-shadow: 0 0 5px 4px #e6e6e6;

              &:before {
                background-color: #2bcb96;
                left: 20px;
              }
            }

            &:before {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              width: 18px;
              height: 18px;
              background-color: #818181;
              border-radius: 50%;
              box-shadow: 0 0 0 1px #818181;
              transform: scale(0.9, 0.9);
              transition: 0.3s;
            }

            &:disabled,
            &:disabled + label {
              opacity: 0.5;
              cursor: not-allowed;
            }
          }
        }
      `
    )
  }

}
