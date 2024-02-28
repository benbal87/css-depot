import { CdkCopyToClipboard } from '@angular/cdk/clipboard'
import { NgComponentOutlet, NgTemplateOutlet } from '@angular/common'
import { Component, Input, TemplateRef, Type, ViewChild } from '@angular/core'
import { MatIcon } from '@angular/material/icon'
import { MatTab, MatTabGroup } from '@angular/material/tabs'
import { Highlight } from 'ngx-highlightjs'
import {
  GeneralDesignComponent
} from '../design-components/general-design/general-design.component'

@Component({
  selector: 'design-item-wrapper',
  standalone: true,
  imports: [
    MatTabGroup,
    MatTab,
    CdkCopyToClipboard,
    NgComponentOutlet,
    NgTemplateOutlet,
    Highlight,
    MatIcon
  ],
  templateUrl: './design-item-wrapper.component.html',
  styleUrl: './design-item-wrapper.component.scss'
})
export class DesignItemWrapperComponent {

  @ViewChild('designItemWrapperRef')
  designItemWrapperRef!: TemplateRef<any>

  @Input({ required: true, alias: 'design-item' })
  designItem!: Type<GeneralDesignComponent>

  @Input({ required: true, alias: 'template' })
  template!: string

  @Input({ required: true, alias: 'style' })
  style!: string

}
