import { CdkCopyToClipboard } from '@angular/cdk/clipboard'
import { Component, OnInit } from '@angular/core'
import { MatTab, MatTabGroup } from '@angular/material/tabs'
import {
  ButtonFillingHoverComponent
} from './components/design-components/buttons/button-filling-hover/button-filling-hover.component'
import {
  ButtonSnakeComponent
} from './components/design-components/buttons/button-snake/button-snake.component'
import {
  ButtonStrokeComponent
} from './components/design-components/buttons/button-stroke/button-stroke.component'
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
  LoadingAnimation1Component
} from './components/design-components/loading-animations/loading-animation-1/loading-animation1.component'
import {
  LoadingAnimation2Component
} from './components/design-components/loading-animations/loading-animation-2/loading-animation2.component'
import {
  LoadingAnimation3Component
} from './components/design-components/loading-animations/loading-animation-3/loading-animation3.component'
import {
  RadioButtonAquaComponent
} from './components/design-components/radio-buttons/radio-button-aqua/radio-button-aqua.component'
import {
  SelectBoxBlueComponent
} from './components/design-components/select-boxes/select-box-blue/select-box-blue.component'
import {
  DesignItemWrapperComponent
} from './components/design-item-wrapper/design-item-wrapper.component'
import {
  DesignPresentationGridComponent
} from './components/design-presentation-grid/design-presentation-grid.component'
import { Display } from './types/app.types'

export type Tab = {
  label: string
  items: Display[]
}

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

  tabs: Tab[] = []

  ngOnInit(): void {
    this.init()
  }

  private init(): void {
    this.tabs = [
      {
        label: 'Checkboxes',
        items: this.getCheckboxes()
      },
      {
        label: 'Buttons',
        items: this.getButtons()
      },
      {
        label: 'Radio buttons',
        items: this.getRadioButtons()
      },
      {
        label: 'Select Boxes',
        items: this.getSelectBoxes()
      },
      {
        label: 'Loading Animations',
        items: this.getLoadingAnimations()
      }
    ]
  }

  private getCheckboxes(): Display[] {
    return [
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

  private getButtons(): Display[] {
    return [
      {
        component: ButtonFillingHoverComponent,
        template: ButtonFillingHoverComponent.template,
        style: ButtonFillingHoverComponent.style
      },
      {
        component: ButtonSnakeComponent,
        template: ButtonSnakeComponent.template,
        style: ButtonSnakeComponent.style
      },
      {
        component: ButtonStrokeComponent,
        template: ButtonStrokeComponent.template,
        style: ButtonStrokeComponent.style
      }
    ]
  }

  private getRadioButtons(): Display[] {
    return [
      {
        component: RadioButtonAquaComponent,
        template: RadioButtonAquaComponent.template,
        style: RadioButtonAquaComponent.style
      }
    ]
  }

  private getSelectBoxes(): Display[] {
    return [
      {
        component: SelectBoxBlueComponent,
        template: SelectBoxBlueComponent.template,
        style: SelectBoxBlueComponent.style
      }
    ]
  }

  private getLoadingAnimations(): Display[] {
    return [
      {
        component: LoadingAnimation1Component,
        template: LoadingAnimation1Component.template,
        style: LoadingAnimation1Component.style
      },
      {
        component: LoadingAnimation2Component,
        template: LoadingAnimation2Component.template,
        style: LoadingAnimation2Component.style
      },
      {
        component: LoadingAnimation3Component,
        template: LoadingAnimation3Component.template,
        style: LoadingAnimation3Component.style
      }
    ]
  }
}
