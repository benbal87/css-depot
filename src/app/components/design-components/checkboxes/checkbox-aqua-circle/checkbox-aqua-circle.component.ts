import { Component } from '@angular/core'
import { DesignItemService } from '../../../../services/design-item.service'
import {
  GeneralDesignComponent
} from '../../general-design/general-design.component'

@Component({
  selector: 'app-checkbox-aqua-circle',
  standalone: true,
  imports: [],
  templateUrl: './checkbox-aqua-circle.component.html',
  styleUrl: './checkbox-aqua-circle.component.scss'
})
export class CheckboxAquaCircleComponent implements GeneralDesignComponent {

  static get template(): string {
    return DesignItemService.getFormattedTemplateFromString(
      `
        <div class="checkbox-aqua-circle-container">
          <input
            type="checkbox"
            id="checkboxAquaCircle">
          <label for="checkboxAquaCircle">
          </label>
        </div>

        <div class="checkbox-aqua-circle-container">
          <input
            type="checkbox"
            id="checkboxAquaCircleChecked"
            checked
          >
          <label for="checkboxAquaCircleChecked">
          </label>
        </div>

        <div class="checkbox-aqua-circle-container">
          <input
            type="checkbox"
            id="checkboxAquaCircleDisabled"
            disabled
          >
          <label for="checkboxAquaCircleDisabled">
          </label>
        </div>

        <div class="checkbox-aqua-circle-container">
          <input
            type="checkbox"
            id="checkboxAquaCircleDisabledChecked"
            disabled
            checked
          >
          <label for="checkboxAquaCircleDisabledChecked">
          </label>
        </div>
      `
    )
  }

  static get style(): string {
    return DesignItemService.getFormattedStyle(
      `
        div.checkbox-aqua-circle-container {
          & > input[type="checkbox"] {
            display: none;

            & + label {
              user-select: none;
              background: linear-gradient(
                  135deg,
                  rgba(247, 251, 255, 0.7) 20%,
                  rgba(0, 0, 0, 0.125) 100%
              );
              border: 2px solid #d9e3f2;
              border-radius: 16px;
              box-shadow: 3px 3px 6px 2px rgba(0, 0, 0, 0.1),
              -3px -3px 5px 1px rgba(247, 251, 255, 0.5);
              cursor: pointer;
              height: 32px;
              margin: 0 16px;
              width: 32px;
              display: block;
            }

            &:checked + label {
              border: 3px solid #e0ebf5;
              box-shadow: 3px 3px 6px 3px rgba(0, 0, 0, 0),
              -3px -3px 3px 3px rgba(247, 251, 255, 0),
              3px 3px 8px 2px rgba(0, 0, 0, 0.1) inset,
              -3px -3px 7px 2px rgba(247, 251, 255, 0.7) inset;
              color: #7989a4;
              -webkit-text-stroke: 1px transparent;

              background: linear-gradient(
                  -45deg,
                  rgba(247, 251, 255, 0.4) 20%,
                  rgba(0, 0, 0, 0.2) 100%
              );
            }

            &:disabled {
              cursor: not-allowed;
              opacity: 0.5;

              & + label {
                cursor: not-allowed;
                opacity: 0.5;
              }
            }
          }
        }
      `
    )
  }

}
