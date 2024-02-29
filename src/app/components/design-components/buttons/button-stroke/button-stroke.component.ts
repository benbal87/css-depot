import { Component } from '@angular/core';
import { DesignItemService } from '../../../../services/design-item.service'
import {
  GeneralDesignComponent
} from '../../general-design/general-design.component'

@Component({
  selector: 'app-button-stroke',
  standalone: true,
  imports: [],
  templateUrl: './button-stroke.component.html',
  styleUrl: './button-stroke.component.scss'
})
export class ButtonStrokeComponent implements GeneralDesignComponent {

  static get template(): string {
    return DesignItemService.getFormattedTemplateFromString(
      `
        <button class="button-stroke">
          <svg>
            <rect></rect>
          </svg>
          Button
        </button>

        <button class="button-stroke" disabled>
          <svg>
            <rect></rect>
          </svg>
          Button
        </button>
      `
    )
  }

  static get style(): string {
    return DesignItemService.getFormattedStyle(
      `
        button.button-stroke {
          $width: 12rem;
          $height: 4rem;

          user-select: none;
          cursor: pointer;
          border: none;
          outline: none;
          background-color: transparent;

          transform: translate(0, 0);
          width: $width;
          height: $height;
          line-height: $height;
          text-align: center;
          font-family: sans-serif;
          text-transform: uppercase;
          font-size: 1.4rem;
          letter-spacing: 0.25rem;
          color: #ffffff;
          text-decoration: none;

          & > svg,
          & > svg > rect {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            fill: transparent;
          }

          & > svg > rect {
            stroke: #42d5e9;
            stroke-width: 4;
            transition: 2s;
            stroke-dasharray: $height $width;
            stroke-dashoffset: 20rem;
          }

          &:not(:disabled):hover > svg > rect {
            stroke: #ffff00;
            stroke-dasharray: $width $height;
            stroke-dashoffset: 0;
          }

          &:disabled {
            opacity: 0.3;
            cursor: not-allowed;
          }
        }
      `
    )
  }

}
