import { Component } from '@angular/core'
import { DesignItemService } from '../../../../services/design-item.service'
import {
  GeneralDesignComponent
} from '../../general-design/general-design.component'

@Component({
  selector: 'app-radio-button-aqua',
  standalone: true,
  imports: [],
  templateUrl: './radio-button-aqua.component.html',
  styleUrl: './radio-button-aqua.component.scss'
})
export class RadioButtonAquaComponent implements GeneralDesignComponent {

  static get template(): string {
    return DesignItemService.getFormattedTemplateFromString(
      `
        <div class="radio-group">
          <div class="wrapper">
            <input type="radio"
                   name="radioButtonGroup"
                   id="a"
                   value="a">
            <label for="a">
              <span class="indicator"></span>
              <span class="text">
                close
              </span>
            </label>
          </div>
          <div class="wrapper">
            <input type="radio"
                   name="radioButtonGroup"
                   id="b"
                   value="b">
            <label for="b">
              <span class="indicator"></span>
              <span class="text">
                remove
              </span>
            </label>
          </div>
          <div class="wrapper">
            <input type="radio"
                   name="radioButtonGroup"
                   id="c"
                   value="c">
            <label for="c">
              <span class="indicator"></span>
              <span class="text">
                delete
              </span>
            </label>
          </div>
          <div class="wrapper">
            <input type="radio"
                   name="radioButtonGroup"
                   id="d"
                   value="d">
            <label for="d">
              <span class="indicator"></span>
              <span class="text">
                all of the above
              </span>
            </label>
          </div>
        </div>
      `
    )
  }

  static get style(): string {
    return DesignItemService.getFormattedStyle(
      `
        div.radio-group {
          $color-aqua: #ECF0F3;
          $color-shadow: #D1D9E6;

          padding: 1rem 2rem;
          border-radius: 1rem;
          background-color: $color-aqua;
          box-shadow: 4px 4px 4px 0 $color-shadow inset, -4px -4px 4px 0 white inset;
          display: flex;
          flex-flow: column;
          gap: 0.5rem;

          & > div.wrapper {
            & > input[type="radio"] {
              position: absolute;
              top: 0;
              right: 0;
              opacity: 1e-5;
              pointer-events: none;

              &:checked ~ label > span.indicator::after {
                transform: scale3d(.975, .975, 1) translate3d(0, 10%, 0);
                opacity: 0;
              }

              &:focus ~ label > span.text {
                transform: translate3d(8px, 0, 0);
                opacity: 1;
              }
            }

            & > label {
              display: inline-flex;
              align-items: center;
              cursor: pointer;
              color: #394A56;

              & > span.indicator {
                position: relative;
                border-radius: 50%;
                height: 2rem;
                width: 2rem;
                box-shadow: -8px -4px 8px 0 white,
                8px 4px 12px 0 $color-shadow;
                overflow: hidden;

                &::before,
                &::after {
                  content: '';
                  position: absolute;
                  top: 10%;
                  left: 10%;
                  height: 80%;
                  width: 80%;
                  border-radius: 50%;
                }

                &::before {
                  box-shadow: -4px -2px 4px 0 $color-shadow,
                  4px 2px 8px 0 white;
                }

                &::after {
                  background-color: $color-aqua;
                  box-shadow: -4px -2px 4px 0 white,
                  4px 2px 8px 0 $color-shadow;
                  transform: scale3d(1, 1, 1);
                  transition: opacity .25s ease-in-out, transform .25s ease-in-out;
                }
              }

              & > span.text {
                margin-left: 1rem;
                opacity: 0.6;
                transition: opacity 0.2s linear, transform 0.2s ease-out;
              }

              &:hover > span.text{
                opacity: 1;
              }
            }
          }
        }
      `
    )
  }

}
