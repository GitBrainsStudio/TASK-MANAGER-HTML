import { animate, style, transition, trigger } from '@angular/animations';

export const OpacityAnimation =  trigger(
    'opacityAnimation', [
      transition(':enter', [
        style({opacity:0}),
        animate(1000, style({opacity:1})) 
        ]),
      transition(':leave', [
        transition(':leave', [ 
        animate(500, style({opacity:0})) 
        ])  
      ])
    ],
  )