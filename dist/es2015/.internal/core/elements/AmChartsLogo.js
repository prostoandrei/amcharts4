/**
 * AmChartsLogo module.
 *
 * AmChartsLogo shows amCharts logo for non-commercial users of a library.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * ============================================================================
 * IMPORTS
 * ============================================================================
 * @hidden
 */
import { Container } from "../Container";
import { InterfaceColorSet } from "../../core/utils/InterfaceColorSet";
import { Polyspline } from "./Polyspline";
import { color } from "../utils/Color";
import { LinearGradient } from "../rendering/fills/LinearGradient";
import { DesaturateFilter } from "../rendering/filters/DesaturateFilter";
/**
 * ============================================================================
 * MAIN CLASS
 * ============================================================================
 * @hidden
 */
/**
 * A class used to draw and display progress indicator.
 *
 * @see {@link IAmChartsLogoEvents} for a list of available events
 * @see {@link IAmChartsLogoAdapters} for a list of available Adapters
 * @ignore Exclude from docs
 */
var AmChartsLogo = /** @class */ (function (_super) {
    __extends(AmChartsLogo, _super);
    /**
     * Constructor
     */
    function AmChartsLogo() {
        var _this = 
        // Init
        _super.call(this) || this;
        _this.className = "AmChartsLogo";
        //this.isMeasured = false;
        _this.valign = "bottom";
        var d = 0.3;
        _this.opacity = 0.3;
        _this.defaultState.properties.opacity = 0.4;
        _this.url = "http://www.amcharts.com";
        _this.showSystemTooltip = true;
        _this.readerTitle = "chart created using amCharts library";
        _this.width = 220 * d;
        _this.height = 70 * d;
        _this.background.opacity = 0;
        var aColor = color("#474758");
        if (new InterfaceColorSet().getFor("background").alternative.hex == "#ffffff") {
            aColor = color("#ffffff");
        }
        var aGradient = new LinearGradient();
        aGradient.addColor(aColor);
        aGradient.addColor(aColor, 1, 0.75);
        aGradient.addColor(color("#3cabff"), 1, 0.755);
        aGradient.rotation = -10;
        var aStroke = aGradient;
        var m = _this.createChild(Polyspline);
        m.shouldClone = false;
        m.isMeasured = false;
        m.segments = [[{ x: 50 * d, y: 50 * d }, { x: 90 * d, y: 50 * d }, { x: 120 * d, y: 20 * d }, { x: 135 * d, y: 35 * d }, { x: 150 * d, y: 20 * d }, { x: 180 * d, y: 50 * d }, { x: 200 * d, y: 50 * d }]];
        m.strokeWidth = 6 * d;
        m.tensionX = 0.8;
        m.tensionY = 1;
        m.stroke = color("#3cabff");
        var a = _this.createChild(Polyspline);
        a.shouldClone = false;
        a.isMeasured = false;
        a.segments = [[{ x: 20 * d, y: 50 * d }, { x: 50 * d, y: 50 * d }, { x: 90 * d, y: 12 * d }, { x: 133 * d, y: 50 * d }, { x: 170 * d, y: 50 * d }, { x: 200 * d, y: 50 * d }]];
        a.strokeWidth = 6 * d;
        a.tensionX = 0.75;
        a.tensionY = 1;
        a.stroke = aStroke;
        var desaturateFilter = new DesaturateFilter();
        _this.filters.push(desaturateFilter);
        var desaturateFilterHover = new DesaturateFilter();
        desaturateFilterHover.saturation = 1;
        var hoverState = _this.states.create("hover");
        hoverState.properties.opacity = 1;
        hoverState.filters.push(desaturateFilterHover);
        // temp
        _this.scale = 0.001;
        return _this;
    }
    return AmChartsLogo;
}(Container));
export { AmChartsLogo };
//# sourceMappingURL=AmChartsLogo.js.map