import { Injectable } from '@angular/core'
import js_beautify from 'js-beautify'

@Injectable({
  providedIn: 'root'
})
export class DesignItemService {

  protected static readonly FORMATTING_OPTIONS: js_beautify.CoreBeautifyOptions = {
    indent_size: 2,
    wrap_line_length: 50
  }

  constructor() {
  }

  static getFormattedTemplateFromString(
    template: string,
    options: js_beautify.HTMLBeautifyOptions = {
      ...DesignItemService.FORMATTING_OPTIONS,
      indent_size: 2,
      wrap_attributes: 'force',
      wrap_attributes_indent_size: 4
    }
  ): string {
    return js_beautify.html(template, options)
  }

  static getFormattedStyle(
    style: string,
    options: js_beautify.JSBeautifyOptions = DesignItemService.FORMATTING_OPTIONS
  ): string {
    return js_beautify.css(style, options)
  }

}
