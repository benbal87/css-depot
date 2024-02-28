import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'

import {
  DesignPresentationGridComponent
} from './design-presentation-grid.component'

describe('DesignPresentationGridComponent', () => {
  let component: DesignPresentationGridComponent
  let fixture: ComponentFixture<DesignPresentationGridComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignPresentationGridComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should compile', () => {
    expect(component).toBeTruthy()
  })
})
