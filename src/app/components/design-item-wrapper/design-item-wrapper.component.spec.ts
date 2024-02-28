import { ComponentFixture, TestBed } from '@angular/core/testing'

import { DesignItemWrapperComponent } from './design-item-wrapper.component'

describe('DesignItemWrapperComponent', () => {
  let component: DesignItemWrapperComponent
  let fixture: ComponentFixture<DesignItemWrapperComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [DesignItemWrapperComponent]
      })
      .compileComponents()

    fixture = TestBed.createComponent(DesignItemWrapperComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
