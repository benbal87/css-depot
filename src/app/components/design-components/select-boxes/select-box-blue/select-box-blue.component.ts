import { Component } from '@angular/core'
import { DesignItemService } from '../../../../services/design-item.service'
import {
  GeneralDesignComponent
} from '../../general-design/general-design.component'

@Component({
  selector: 'app-select-box-blue',
  standalone: true,
  imports: [],
  templateUrl: './select-box-blue.component.html',
  styleUrl: './select-box-blue.component.scss'
})
export class SelectBoxBlueComponent implements GeneralDesignComponent {

  static get template(): string {
    return DesignItemService.getFormattedTemplateFromString(
      `
        <div class="wrapper">
          <select>
            <option value="Option 01">Option 01</option>
            <option value="Option 02">Option 02</option>
            <option value="Option 03">Option 03</option>
            <option value="Option 04">Option 04</option>
            <option value="Option 05">Option 05</option>
          </select>
        </div>
      `
    )
  }

  static get style(): string {
    return DesignItemService.getFormattedStyle(
      `
        div.wrapper {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);

          &::before {
            content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' height='24' viewBox='0 -960 960 960' width='24'%3E%3Cpath d='m480-320 160-160-56-56-64 64v-168h-80v168l-64-64-56 56 160 160Zm0 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z'/%3E%3C/svg%3E");
            position: absolute;
            top: 0;
            right: 0;
            width: 50px;
            height: 50px;
            text-align: center;
            line-height: 50px;
            color: white;
            font-size: 28px;
            background-color: #007ce0;
            pointer-events: none;
          }

          &:hover:before {
            background-color: #0472ca;
          }

          & > select {
            background-color: #0563af;
            color: white;
            padding: 10px;
            width: 250px;
            height: 50px;
            font-size: 20px;
            box-shadow: 0 5px 25px rgba(0, 0, 0, 0.5);
            -webkit-appearance: button;
            outline: none;
            cursor: pointer;
          }
        }
      `
    )
  }

}
