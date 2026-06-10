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
const BatteryBoltDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M544 192V160C544 124.654 515.346 96 480 96H406.129L383.08 160H480V352H387.451L331.125 416H480C515.346 416 544 387.346 544 352V320C561.674 320 576 305.674 576 288V224C576 206.326 561.674 192 544 192ZM156.549 160L212.875 96H64C28.654 96 0 124.654 0 160V352C0 387.346 28.654 416 64 416H137.871L160.92 352H64V160H156.549Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M394.033 271.859L218.033 471.859C213.315 477.188 206.69 480 200.002 480C195.815 480 191.596 478.906 187.783 476.656C177.877 470.797 173.502 458.719 177.408 447.875L237.844 280H168.002C158.565 280 150.002 274.484 146.127 265.891C142.252 257.297 143.752 247.219 149.971 240.141L325.971 40.141C333.627 31.469 346.315 29.5 356.221 35.344C366.127 41.203 370.502 53.281 366.596 64.125L306.16 232H376.002C385.44 232 394.002 237.516 397.877 246.109C401.752 254.703 400.252 264.781 394.033 271.859Z" })
    ]
  }
));
BatteryBoltDuotone.displayName = "BatteryBoltDuotone";
var BatteryBolt_default = BatteryBoltDuotone;
