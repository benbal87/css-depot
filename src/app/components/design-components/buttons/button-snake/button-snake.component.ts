import { Component } from '@angular/core';
import { DesignItemService } from '../../../../services/design-item.service'
import {
  GeneralDesignComponent
} from '../../general-design/general-design.component'

@Component({
  selector: 'app-button-snake',
  standalone: true,
  imports: [],
  templateUrl: './button-snake.component.html',
  styleUrl: './button-snake.component.scss'
})
export class ButtonSnakeComponent implements GeneralDesignComponent {

  static get template(): string {
    return DesignItemService.getFormattedTemplateFromString(
      `
        <button class="button-snake">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Button
        </button>

        <button
          class="button-snake"
          disabled
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Button Disabled
        </button>
      `
    )
  }

  static get style(): string {
    return DesignItemService.getFormattedStyle(
      `
        button.button-snake {
          user-select: none;
          cursor: pointer;

          display: block;
          position: relative;
          padding: 1rem;
          font-size: 1.5rem;
          text-align: center;
          text-decoration: none;
          color: #262626;
          transition: all 0.5s ease-in-out;
          border: none;
          outline: none;

          & > span {
            position: absolute;
            transition: transform 0.5s;

            &:nth-child(1),
            &:nth-child(3) {
              width: 100%;
              height: 1px;
              background: #262626;
              left: 0;
            }

            &:nth-child(1) {
              top: 0;
              transform-origin: right;
            }

            &:nth-child(3) {
              bottom: 0;
              transform-origin: left;
            }
          }

          &:not(:disabled) {
            & > span {
              &:nth-child(2),
              &:nth-child(4) {
                width: 1px;
                height: 100%;
                background: #262626;
                top: 0;
                transform: scaleY(0);
              }

              &:nth-child(2) {
                left: 0;
                transform-origin: bottom;
              }

              &:nth-child(4) {
                right: 0;
                transform-origin: top;
              }
            }

            &:hover > span {
              transition: transform 0.5s;

              &:nth-child(1),
              &:nth-child(3) {
                transform: scaleX(0);
              }

              &:nth-child(1) {
                transform-origin: left;
              }

              &:nth-child(3) {
                transform-origin: right;
              }

              &:nth-child(2),
              &:nth-child(4) {
                transform: scaleY(1);
              }

              &:nth-child(2) {
                transform-origin: top;
              }

              &:nth-child(4) {
                transform-origin: bottom;
              }
            }
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
