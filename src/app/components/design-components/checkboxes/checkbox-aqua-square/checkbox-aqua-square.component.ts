import { Component } from '@angular/core'
import { DesignItemService } from '../../../../services/design-item.service'
import {
  GeneralDesignComponent
} from '../../general-design/general-design.component'

@Component({
  selector: 'app-checkbox-aqua-square',
  standalone: true,
  imports: [],
  templateUrl: './checkbox-aqua-square.component.html',
  styleUrl: './checkbox-aqua-square.component.scss'
})
export class CheckboxAquaSquareComponent implements GeneralDesignComponent {

  static get template(): string {
    return DesignItemService.getFormattedTemplateFromString(
      `
        <div class="checkbox-aqua-square-container">
          <input
            type="checkbox"
            id="checkboxAquaSquare"
          >
          <label for="checkboxAquaSquare">
            >
          </label>
        </div>

        <div class="checkbox-aqua-square-container">
          <input
            type="checkbox"
            id="checkboxAquaSquareChecked"
            checked
          >
          <label for="checkboxAquaSquareChecked">
            >
          </label>
        </div>

        <div class="checkbox-aqua-square-container">
          <input
            type="checkbox"
            id="checkboxAquaSquareDisabled"
            disabled
          >
          <label for="checkboxAquaSquareDisabled">
            <
          </label>
        </div>

        <div class="checkbox-aqua-square-container">
          <input
            type="checkbox"
            id="checkboxAquaSquareDisabledChecked"
            disabled
            checked
          >
          <label for="checkboxAquaSquareDisabledChecked">
            <
          </label>
        </div>
      `
    )
  }

  static get style(): string {
    return DesignItemService.getFormattedStyle(
      `
        div.checkbox-aqua-square-container {
          user-select: none;

          & > input[type="checkbox"] {
            display: none;

            &:checked + label {
              border: 3px solid #e0ebf5;
              box-shadow: 3px 3px 6px 3px rgba(0, 0, 0, 0),
              3px -3px 3px 3px rgba(247, 251, 255, 0),
              3px 3px 8px 2px rgba(0, 0, 0, 0.1) inset,
              -3px -3px 7px 2px rgba(247, 251, 255, 0.7) inset;
              color: #7989a4;
              -webkit-text-stroke: 1px transparent;
            }

            & + label {
              user-select: none;
              align-items: center;
              background-color: #d9e3f2;
              border: 3px solid transparent;
              box-shadow: 3px 3px 6px 3px rgba(0, 0, 0, 0.1),
              -3px -3px 3px 3px rgba(247, 251, 255, 0.5),
              3px 3px 8px 2px rgba(0, 0, 0, 0) inset,
              -3px -3px 7px 2px rgba(247, 251, 255, 0) inset;
              color: transparent;
              cursor: pointer;
              display: flex;
              font-size: 1.5em;
              height: 48px;
              justify-content: center;
              position: relative;
              -webkit-text-stroke: 1px #7989a4;
              transition: border 0.1s ease,
              box-shadow 0.1s ease,
              color 0.1s ease,
              text-stroke 0.1s ease,
              -webkit-text-stroke 0.1s ease;
              width: 48px;
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
