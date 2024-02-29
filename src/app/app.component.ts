import { CdkCopyToClipboard } from '@angular/cdk/clipboard'
import { Component, OnInit } from '@angular/core'
import { MatTab, MatTabGroup } from '@angular/material/tabs'
import {
  CheckboxAquaComponent
} from './components/design-components/checkboxes/checkbox-aqua/checkbox-aqua.component'
import {
  CheckboxDarkComponent
} from './components/design-components/checkboxes/checkbox-dark/checkbox-dark.component'
import {
  CheckboxGreenLightComponent
} from './components/design-components/checkboxes/checkbox-green-light/checkbox-green-light.component'
import {
  DesignItemWrapperComponent
} from './components/design-item-wrapper/design-item-wrapper.component'
import {
  DesignPresentationGridComponent
} from './components/design-presentation-grid/design-presentation-grid.component'
import { Display } from './types/app.types'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatTabGroup,
    MatTab,
    CheckboxDarkComponent,
    DesignPresentationGridComponent,
    DesignItemWrapperComponent,
    CheckboxAquaComponent,
    CdkCopyToClipboard
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  checkboxes: Display[] = []

  ngOnInit(): void {
    this.setCheckboxes()
  }

  setCheckboxes(): void {
    this.checkboxes = [
      {
        component: CheckboxDarkComponent,
        template: CheckboxDarkComponent.template,
        style: CheckboxDarkComponent.style
      },
      {
        component: CheckboxAquaComponent,
        template: CheckboxAquaComponent.template,
        style: CheckboxAquaComponent.style
      },
      {
        component: CheckboxGreenLightComponent,
        template: CheckboxGreenLightComponent.template,
        style: CheckboxGreenLightComponent.style
      }
    ]
  }
}
