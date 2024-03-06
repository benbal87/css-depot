import { Component } from '@angular/core'
import { DesignItemService } from '../../../../services/design-item.service'
import {
  GeneralDesignComponent
} from '../../general-design/general-design.component'

@Component({
  selector: 'app-checkbox-aqua-rounded',
  standalone: true,
  imports: [],
  templateUrl: './checkbox-aqua-rounded.component.html',
  styleUrl: './checkbox-aqua-rounded.component.scss'
})
export class CheckboxAquaRoundedComponent implements GeneralDesignComponent {

  static get template(): string {
    return DesignItemService.getFormattedTemplateFromString(
      `
        <div class="checkbox-aqua-rounded-container">
          <input
            type="checkbox"
            id="checkboxAquaRounded"
          >
          <label for="checkboxAquaRounded">
            +
          </label>
        </div>

        <div class="checkbox-aqua-rounded-container">
          <input
            type="checkbox"
            id="checkboxAquaRoundedChecked"
            checked
          >
          <label for="checkboxAquaRoundedChecked">
            +
          </label>
        </div>

        <div class="checkbox-aqua-rounded-container">
          <input
            type="checkbox"
            id="checkboxAquaRoundedDisabled"
            disabled
          >
          <label for="checkboxAquaRoundedDisabled">
            +
          </label>
        </div>

        <div class="checkbox-aqua-rounded-container">
          <input
            type="checkbox"
            id="checkboxAquaRoundedDisabledChecked"
            disabled
            checked
          >
          <label for="checkboxAquaRoundedDisabledChecked">
            +
          </label>
        </div>
      `
    )
  }

  static get style(): string {
    return DesignItemService.getFormattedStyle(
      `
        div.checkbox-aqua-rounded-container {
          & > input[type="checkbox"] {
            display: none;

            & + label {
              user-select: none;
              color: transparent;
              cursor: pointer;
              font-size: 1.5em;
              -webkit-text-stroke: 1px #7989a4;
              position: relative;
              display: flex;
              align-items: center;
              justify-content: center;
              width: 3rem;
              height: 3rem;
              border: 6px solid transparent;
              border-radius: 1rem;
              background: linear-gradient(#d9e3f2, #d9e3f2),
              linear-gradient(135deg, #ffffff 0%, #b5bec8 100%);
              background-repeat: no-repeat;
              background-origin: padding-box, border-box;
              box-shadow: 3px 3px 6px 3px rgba(0, 0, 0, 0.1),
              -3px -3px 3px 3px rgba(247, 251, 255, 0.5),
              3px 3px 8px 2px rgba(0, 0, 0, 0) inset,
              -3px -3px 7px 2px rgba(247, 251, 255, 0) inset;
              transition: border 0.1s ease,
              box-shadow 0.1s ease,
              color 0.1s ease,
              text-stroke 0.1s ease,
              -webkit-text-stroke 0.1s ease;

              &::before {
                border: 3px solid #d9e3f2;
                border-radius: 10px;
                bottom: -3px;
                content: "";
                left: -3px;
                right: -3px;
                position: absolute;
                top: -3px;
              }
            }

            &:checked + label {
              box-shadow: 3px 3px 6px 3px rgba(0, 0, 0, 0),
              -3px -3px 3px 3px rgba(247, 251, 255, 0),
              3px 3px 8px 2px rgba(0, 0, 0, 0.1) inset,
              -3px -3px 7px 2px rgba(247, 251, 255, 0.7) inset;
              color: #7989a4;
              -webkit-text-stroke: 1px transparent;
              border: 6px solid transparent;
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
