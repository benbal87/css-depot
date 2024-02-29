import { NgTemplateOutlet } from '@angular/common'
import {
  AfterContentInit,
  Component,
  ContentChildren,
  QueryList
} from '@angular/core'
import { MatGridListModule } from '@angular/material/grid-list'
import {
  DesignItemWrapperComponent
} from '../design-item-wrapper/design-item-wrapper.component'

export type GridElement = {
  item: DesignItemWrapperComponent;
  rows: number;
  cols: number
}

@Component({
  selector: 'design-presentation-grid',
  standalone: true,
  imports: [
    MatGridListModule,
    NgTemplateOutlet
  ],
  templateUrl: './design-presentation-grid.component.html',
  styleUrl: './design-presentation-grid.component.scss'
})
export class DesignPresentationGridComponent implements AfterContentInit {

  @ContentChildren(DesignItemWrapperComponent)
  children!: QueryList<DesignItemWrapperComponent>

  cards: GridElement[] = []

  ngAfterContentInit(): void {
    this.setCards()
  }

  setCards(): void {
    this.cards = this.children.toArray()
      .map((item: DesignItemWrapperComponent) => ({
        item,
        cols: 1,
        rows: 1
      }))

    /** Based on the screen size, switch from standard to one column per row */
    // this.cards = this.breakpointObserver
    //   .observe(Breakpoints.Handset)
    //   .pipe(
    //     map(({ matches }) => {
    //       return childList.map(item => ({
    //         item,
    //         cols: 1,
    //         rows: 1
    //       }))
    //       // if (matches) {
    //       //   return [
    //       //     { title: 'Card 1', cols: 1, rows: 1 },
    //       //     { title: 'Card 2', cols: 1, rows: 1 },
    //       //     { title: 'Card 3', cols: 1, rows: 1 },
    //       //     { title: 'Card 4', cols: 1, rows: 1 }
    //       //   ]
    //       // }
    //       //
    //       // return [
    //       //   { title: 'Card 1', cols: 2, rows: 1 },
    //       //   { title: 'Card 2', cols: 1, rows: 1 },
    //       //   { title: 'Card 3', cols: 1, rows: 2 },
    //       //   { title: 'Card 4', cols: 1, rows: 1 }
    //       // ]
    //     })
    //   )
  }
}
