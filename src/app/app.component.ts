import { CdkCopyToClipboard } from '@angular/cdk/clipboard'
import { Component, OnInit } from '@angular/core'
import { MatTab, MatTabGroup } from '@angular/material/tabs'
import {
  Effect3D1Component
} from './components/design-components/3d-effects/3d-effect-1/effect3-d1.component'
import {
  Effect3D2Component
} from './components/design-components/3d-effects/3d-effect-2/effect3-d2.component'
import {
  Effect3D3Component
} from './components/design-components/3d-effects/3d-effect-3/effect3-d3.component'
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
  LoadingAnimation10Component
} from './components/design-components/loading-animations/loading-animation-10/loading-animation10.component'
import {
  LoadingAnimation11Component
} from './components/design-components/loading-animations/loading-animation-11/loading-animation11.component'
import {
  LoadingAnimation12Component
} from './components/design-components/loading-animations/loading-animation-12/loading-animation12.component'
import {
  LoadingAnimation13Component
} from './components/design-components/loading-animations/loading-animation-13/loading-animation13.component'
import {
  LoadingAnimation14Component
} from './components/design-components/loading-animations/loading-animation-14/loading-animation14.component'
import {
  LoadingAnimation15Component
} from './components/design-components/loading-animations/loading-animation-15/loading-animation15.component'
import {
  LoadingAnimation16Component
} from './components/design-components/loading-animations/loading-animation-16/loading-animation16.component'
import {
  LoadingAnimation17Component
} from './components/design-components/loading-animations/loading-animation-17/loading-animation17.component'
import {
  LoadingAnimation18Component
} from './components/design-components/loading-animations/loading-animation-18/loading-animation18.component'
import {
  LoadingAnimation19Component
} from './components/design-components/loading-animations/loading-animation-19/loading-animation19.component'
import {
  LoadingAnimation2Component
} from './components/design-components/loading-animations/loading-animation-2/loading-animation2.component'
import {
  LoadingAnimation20Component
} from './components/design-components/loading-animations/loading-animation-20/loading-animation20.component'
import {
  LoadingAnimation21Component
} from './components/design-components/loading-animations/loading-animation-21/loading-animation21.component'
import {
  LoadingAnimation3Component
} from './components/design-components/loading-animations/loading-animation-3/loading-animation3.component'
import {
  LoadingAnimation4Component
} from './components/design-components/loading-animations/loading-animation-4/loading-animation4.component'
import {
  LoadingAnimation5Component
} from './components/design-components/loading-animations/loading-animation-5/loading-animation5.component'
import {
  LoadingAnimation6Component
} from './components/design-components/loading-animations/loading-animation-6/loading-animation6.component'
import {
  LoadingAnimation7Component
} from './components/design-components/loading-animations/loading-animation-7/loading-animation7.component'
import {
  LoadingAnimation8Component
} from './components/design-components/loading-animations/loading-animation-8/loading-animation8.component'
import {
  LoadingAnimation9Component
} from './components/design-components/loading-animations/loading-animation-9/loading-animation9.component'
import {
  OtherDesign1Component
} from './components/design-components/other-design/other-design-1/other-design1.component'
import {
  RadioButtonAquaComponent
} from './components/design-components/radio-buttons/radio-button-aqua/radio-button-aqua.component'
import {
  SelectBoxBlueComponent
} from './components/design-components/select-boxes/select-box-blue/select-box-blue.component'
import {
  TextAnimation1Component
} from './components/design-components/text-animations/text-animation-1/text-animation1.component'
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
      },
      {
        label: 'Text Animations',
        items: this.getTextAnimations()
      },
      {
        label: '3D Effects',
        items: this.get3dEffects()
      },
      {
        label: 'Other',
        items: this.getOtherDesign()
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
      },
      {
        component: LoadingAnimation4Component,
        template: LoadingAnimation4Component.template,
        style: LoadingAnimation4Component.style
      },
      {
        component: LoadingAnimation5Component,
        template: LoadingAnimation5Component.template,
        style: LoadingAnimation5Component.style
      },
      {
        component: LoadingAnimation6Component,
        template: LoadingAnimation6Component.template,
        style: LoadingAnimation6Component.style
      },
      {
        component: LoadingAnimation7Component,
        template: LoadingAnimation7Component.template,
        style: LoadingAnimation7Component.style
      },
      {
        component: LoadingAnimation8Component,
        template: LoadingAnimation8Component.template,
        style: LoadingAnimation8Component.style
      },
      {
        component: LoadingAnimation9Component,
        template: LoadingAnimation9Component.template,
        style: LoadingAnimation9Component.style
      },
      {
        component: LoadingAnimation10Component,
        template: LoadingAnimation10Component.template,
        style: LoadingAnimation10Component.style
      },
      {
        component: LoadingAnimation11Component,
        template: LoadingAnimation11Component.template,
        style: LoadingAnimation11Component.style
      },
      {
        component: LoadingAnimation12Component,
        template: LoadingAnimation12Component.template,
        style: LoadingAnimation12Component.style
      },
      {
        component: LoadingAnimation13Component,
        template: LoadingAnimation13Component.template,
        style: LoadingAnimation13Component.style
      },
      {
        component: LoadingAnimation14Component,
        template: LoadingAnimation14Component.template,
        style: LoadingAnimation14Component.style
      },
      {
        component: LoadingAnimation15Component,
        template: LoadingAnimation15Component.template,
        style: LoadingAnimation15Component.style
      },
      {
        component: LoadingAnimation16Component,
        template: LoadingAnimation16Component.template,
        style: LoadingAnimation16Component.style
      },
      {
        component: LoadingAnimation17Component,
        template: LoadingAnimation17Component.template,
        style: LoadingAnimation17Component.style
      },
      {
        component: LoadingAnimation18Component,
        template: LoadingAnimation18Component.template,
        style: LoadingAnimation18Component.style
      },
      {
        component: LoadingAnimation19Component,
        template: LoadingAnimation19Component.template,
        style: LoadingAnimation19Component.style
      },
      {
        component: LoadingAnimation20Component,
        template: LoadingAnimation20Component.template,
        style: LoadingAnimation20Component.style
      },
      {
        component: LoadingAnimation21Component,
        template: LoadingAnimation21Component.template,
        style: LoadingAnimation21Component.style
      }
    ]
  }

  private getTextAnimations(): Display[] {
    return [
      {
        component: TextAnimation1Component,
        template: TextAnimation1Component.template,
        style: TextAnimation1Component.style
      }
    ]
  }

  private get3dEffects(): Display[] {
    return [
      {
        component: Effect3D1Component,
        template: Effect3D1Component.template,
        style: Effect3D1Component.style
      },
      {
        component: Effect3D2Component,
        template: Effect3D2Component.template,
        style: Effect3D2Component.style
      },
      {
        component: Effect3D3Component,
        template: Effect3D3Component.template,
        style: Effect3D3Component.style
      }
    ]
  }

  private getOtherDesign() {
    return [
      {
        component: OtherDesign1Component,
        template: OtherDesign1Component.template,
        style: OtherDesign1Component.style
      }
    ]
  }
}
