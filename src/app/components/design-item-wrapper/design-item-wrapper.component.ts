import { CdkCopyToClipboard } from '@angular/cdk/clipboard'
import { NgComponentOutlet, NgTemplateOutlet } from '@angular/common'
import { Component, Input, TemplateRef, ViewChild } from '@angular/core'
import { MatIcon } from '@angular/material/icon'
import { MatTab, MatTabGroup } from '@angular/material/tabs'
import { Highlight } from 'ngx-highlightjs'
import { Display } from '../../types/app.types'

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

  @Input({ required: true, alias: 'display' })
  display!: Display

}
