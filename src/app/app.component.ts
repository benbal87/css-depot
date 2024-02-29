import { CdkCopyToClipboard } from '@angular/cdk/clipboard'
import { Component, OnInit } from '@angular/core'
import { MatTab, MatTabGroup } from '@angular/material/tabs'
import {
  CheckboxAquaCircleComponent
} from './components/design-components/checkboxes/checkbox-aqua-circle/checkbox-aqua-circle.component'
import {
  CheckboxAquaRoundedComponent
} from './components/design-components/checkboxes/checkbox-aqua-rounded/checkbox-aqua-rounded.component'
import {
  CheckboxAquaSquareComponent
} from './components/design-components/checkboxes/checkbox-aqua-square/checkbox-aqua-square.component'
import {
  CheckboxBlueSimpleComponent
} from './components/design-components/checkboxes/checkbox-blue-simple/checkbox-blue-simple.component'
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
    CheckboxAquaSquareComponent,
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
        component: CheckboxAquaSquareComponent,
        template: CheckboxAquaSquareComponent.template,
        style: CheckboxAquaSquareComponent.style
      },
      {
        component: CheckboxAquaRoundedComponent,
        template: CheckboxAquaRoundedComponent.template,
        style: CheckboxAquaRoundedComponent.style
      },
      {
        component: CheckboxAquaCircleComponent,
        template: CheckboxAquaCircleComponent.template,
        style: CheckboxAquaCircleComponent.style
      },
      {
        component: CheckboxGreenLightComponent,
        template: CheckboxGreenLightComponent.template,
        style: CheckboxGreenLightComponent.style
      },
      {
        component: CheckboxBlueSimpleComponent,
        template: CheckboxBlueSimpleComponent.template,
        style: CheckboxBlueSimpleComponent.style
      }
    ]
  }
}
