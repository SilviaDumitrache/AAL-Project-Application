import { Component, Input } from "@angular/core";
import { ListItem } from "./list.model";

@Component({
  selector: "list",
  templateUrl: "list.component.html"
})
export class ListComponent {
  @Input()
  public listItems: Array<ListItem>;
  @Input()
  public ModAdm: string;

  constructor() {}
}