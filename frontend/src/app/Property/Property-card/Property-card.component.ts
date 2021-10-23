
import { style } from "@angular/animations";
import { Component, Input } from "@angular/core";
import { IProperty } from "../IProperty.interface";


@Component({
    selector: 'app-property-card',

    templateUrl: 'Property-card.component.html',

    styleUrls: ['Property-card.component.css']
}
)
export class PropertyCardComponent {
  @Input()
  property!: IProperty;

}

