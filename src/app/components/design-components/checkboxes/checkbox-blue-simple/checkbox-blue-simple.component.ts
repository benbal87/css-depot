import { Component } from '@angular/core'
import { DesignItemService } from '../../../../services/design-item.service'
import {
  GeneralDesignComponent
} from '../../general-design/general-design.component'

@Component({
  selector: 'app-checkbox-blue-simple',
  standalone: true,
  imports: [],
  templateUrl: './checkbox-blue-simple.component.html',
  styleUrl: './checkbox-blue-simple.component.scss'
})
export class CheckboxBlueSimpleComponent implements GeneralDesignComponent {

  static get template(): string {
    return DesignItemService.getFormattedTemplateFromString(
      `
      <div class="checkbox-blue-simple-container">
        <input
          type="checkbox"
          id="checkboxBlueSimple">
        <label for="checkboxBlueSimple">
          Checkbox Label
        </label>
      </div>

      <div class="checkbox-blue-simple-container">
        <input
          type="checkbox"
          id="checkboxBlueSimpleChecked"
          checked
        >
        <label for="checkboxBlueSimpleChecked">
          Checked Checkbox Label
        </label>
      </div>

      <div class="checkbox-blue-simple-container">
        <input
          type="checkbox"
          id="checkboxBlueSimpleDisabled"
          disabled
        >
        <label for="checkboxBlueSimpleDisabled">
          Disabled Checkbox Label
        </label>
      </div>

      <div class="checkbox-blue-simple-container">
        <input
          type="checkbox"
          id="checkboxBlueSimpleDisabledChecked"
          disabled
          checked
        >
        <label for="checkboxBlueSimpleDisabledChecked">
          Disabled & Checked Checkbox Label
        </label>
      </div>
    `
    )
  }

  static get style(): string {
    return DesignItemService.getFormattedStyle(
      `
        div.checkbox-blue-simple-container {
          display: flex;
          justify-content: center;
          align-items: center;
          user-select: none;

          input[type="checkbox"] {
            $active: #275EFE;
            $active-inner: #FFFFFF;
            $focus: 2px rgba(39, 94, 254, .3);
            $border: #BBC1E1;
            $border-hover: #275EFE;
            $background: #FFFFFF;
            $disabled: #F6F8FF;
            $disabled-inner: #E1E6F9;
            -webkit-appearance: none;
            -moz-appearance: none;
            width: 21px;
            height: 21px;
            outline: none;
            border-radius: 7px;
            display: inline-block;
            position: relative;
            border: 1px solid $border;
            background-color: $background;
            -webkit-transition: background .3s, border-color .3s, box-shadow .2s;
            transition: background .3s, border-color .3s, box-shadow .2s;

            &:hover:not(:checked):not(:disabled) {
              border: 1px solid $border-hover;
            }

            &:focus {
              box-shadow: 0 0 0 $focus;
            }

            & + label {
              margin-left: 0.5rem;
            }

            &,
            & + label {
              cursor: pointer;
            }

            &:checked {
              background-color: $active;
              border: 1px solid $active;

              &:after {
                --webkit-transform: rotate(45deg);
                transform: rotate(45deg);
                opacity: 1;
              }
            }

            &:after {
              content: '';
              display: block;
              position: absolute;
              width: 5px;
              height: 9px;
              border: 2px solid $active-inner;
              border-top: 0;
              border-left: 0;
              left: 6px;
              top: 3px;
              --webkit-transform: rotate(10deg);
              transform: rotate(10deg);
              opacity: 1;
              -webkit-transition: opacity 0.5s, -webkit-transform 1s cubic-bezier(.2, .85, .32, 1.2);
              transition: opacity 0.5s, transform 1s cubic-bezier(.2, .85, .32, 1.2);
            }

            &:disabled {
              background-color: $disabled;

              &:checked {
                background-color: $disabled-inner;
                border: 1px solid $border;
              }

              &, & + label {
                opacity: 0.5;
                cursor: not-allowed;
              }
            }
          }
        }
      `
    )
  }

}
