import { Component } from '@angular/core'
import { DesignItemService } from '../../../../services/design-item.service'
import {
  GeneralDesignComponent
} from '../../general-design/general-design.component'

@Component({
  selector: 'checkbox-aqua',
  standalone: true,
  imports: [],
  templateUrl: './checkbox-aqua.component.html',
  styleUrl: './checkbox-aqua.component.scss'
})
export class CheckboxAquaComponent implements GeneralDesignComponent {

  static get template(): string {
    return DesignItemService.getFormattedTemplateFromString(
      `
        <div class="checkbox-aqua-1">
          <input id="checkboxSquare" type="checkbox" />
          <label for="checkboxSquare"></label>
        </div>

        <div class="checkbox-aqua-2">
          <input id="checkboxRound" type="checkbox" />
          <label for="checkboxRound"></label>
        </div>

        <div class="checkbox-aqua-3">
          <input id="checkboxSquareRounded" type="checkbox" />
          <label for="checkboxSquareRounded"></label>
        </div>
      `
    )
  }

  static get style(): string {
    return DesignItemService.getFormattedStyle(
      `
        div.checkbox-aqua-1 {
          & > input {
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
          }

          & > label {
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
        }

        div.checkbox-aqua-2 {
          & > input {
            display: none;

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
          }

          & > label {
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
        }

        div.checkbox-aqua-3 {
          & > input {
            display: none;

            &:checked + label {
              box-shadow: 3px 3px 6px 3px rgba(0, 0, 0, 0),
              -3px -3px 3px 3px rgba(247, 251, 255, 0),
              3px 3px 8px 2px rgba(0, 0, 0, 0.1) inset,
              -3px -3px 7px 2px rgba(247, 251, 255, 0.7) inset;
              color: #7989a4;
              -webkit-text-stroke: 1px transparent;
              border: 6px solid transparent;
            }
          }

          & > label {
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
        }
      `
    )
  }

}