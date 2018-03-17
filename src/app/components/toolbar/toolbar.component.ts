import {Component, Input, OnInit} from "@angular/core";
import {DialogService} from "../../services/dialog.service";
import {MmpService} from "../../services/mmp.service";

@Component({
    selector: "app-toolbar",
    templateUrl: "./toolbar.component.html",
    styleUrls: ["./toolbar.component.scss"]
})
export class ToolbarComponent implements OnInit {

    @Input() node: any;

    tooltip: any;

    constructor(public dialog: DialogService,
                public mmp: MmpService) {
    }

    ngOnInit() {
        this.tooltip = {
            delay: 1000
        };
    }

    toogleNodeFontStyle() {
        let currentStyle = this.mmp.selectNode().font.style;

        if (currentStyle === "italic") {
            this.mmp.updateNode("fontStyle", "normal");
        } else {
            this.mmp.updateNode("fontStyle", "italic");
        }
    }

    toogleNodeFontWeight() {
        let currentWeight = this.mmp.selectNode().font.weight;

        if (currentWeight === "bold") {
            this.mmp.updateNode("fontWeight", "normal");
        } else {
            this.mmp.updateNode("fontWeight", "bold");
        }
    }

}
