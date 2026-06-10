var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var BatteryBolt_exports = {};
__export(BatteryBolt_exports, {
  default: () => BatteryBolt_default
});
module.exports = __toCommonJS(BatteryBolt_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BatteryBoltSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M397.875 246.109C394 237.516 385.438 232 376 232H306.158L366.594 64.125C370.5 53.281 366.125 41.203 356.219 35.344C346.312 29.5 333.625 31.469 325.969 40.141L149.969 240.141C143.75 247.219 142.25 257.297 146.125 265.891C150 274.484 158.562 280 168 280H237.842L177.406 447.875C173.5 458.719 177.875 470.797 187.781 476.656C191.594 478.906 195.812 480 200 480C206.688 480 213.312 477.188 218.031 471.859L394.031 271.859C400.25 264.781 401.75 254.703 397.875 246.109ZM64 160H156.549L212.875 96H64C28.654 96 0 124.654 0 160V352C0 387.346 28.654 416 64 416H137.871L160.92 352H64V160ZM544 192V160C544 124.654 515.346 96 480 96H406.129L383.08 160H480V352H387.451L331.125 416H480C515.346 416 544 387.346 544 352V320C561.674 320 576 305.674 576 288V224C576 206.326 561.674 192 544 192Z" })
  }
));
BatteryBoltSolid.displayName = "BatteryBoltSolid";
var BatteryBolt_default = BatteryBoltSolid;
