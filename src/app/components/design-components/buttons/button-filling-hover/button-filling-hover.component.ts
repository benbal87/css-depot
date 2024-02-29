import { Component } from '@angular/core';
import { DesignItemService } from '../../../../services/design-item.service'
import {
  GeneralDesignComponent
} from '../../general-design/general-design.component'

@Component({
  selector: 'app-button-filling-hover',
  standalone: true,
  imports: [],
  templateUrl: './button-filling-hover.component.html',
  styleUrl: './button-filling-hover.component.scss'
})
export class ButtonFillingHoverComponent implements GeneralDesignComponent {

  static get template(): string {
    return DesignItemService.getFormattedTemplateFromString(
      `
        <button class="btn-filling-hover">
          Button
        </button>

        <button class="btn-filling-hover" disabled>
          Button Disabled
        </button>
      `
    )
  }

  static get style(): string {
    return DesignItemService.getFormattedStyle(
      `
        button.btn-filling-hover {
          user-select: none;
          cursor: pointer;
          transform: translate(0, 0);
          padding: 1rem 2rem;
          text-transform: uppercase;
          text-decoration: none;
          color: #ffffff;
          background-color: transparent;
          outline: none;
          border: none;
          letter-spacing: 2px;
          font-size: 20px;

          &:after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: transparent;
            border: 2px solid #ffffff;
            box-sizing: border-box;
            z-index: -1;
            transition: transform 0.5s;
            transform-origin: top left;
            transform: scale(1);
          }

          &:not(:disabled) {

            &:before {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: #03a9f4;
              z-index: -1;
              transition: transform 0.5s;
              transform-origin: bottom right;
              transform: scale(0);
            }

            &:after {
              transition: transform 0.5s;
              transform-origin: top left;
              transform: scale(1);
            }

            &:hover {
              &:before {
                transition: transform 0.5s;
                transform-origin: top left;
                transform: scale(1);
              }

              &:after {
                transition: transform 0.5s;
                transform-origin: bottom right;
                transform: scale(0);
              }
            }
          }

          &:disabled {
            cursor: not-allowed;
            opacity: 0.3;
          }
        }
      `
    )
  }

}
