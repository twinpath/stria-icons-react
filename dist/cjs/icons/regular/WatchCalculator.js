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
var WatchCalculator_exports = {};
__export(WatchCalculator_exports, {
  default: () => WatchCalculator_default
});
module.exports = __toCommonJS(WatchCalculator_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WatchCalculatorRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M208 240H176C171.625 240 168 243.625 168 248V280C168 284.375 171.625 288 176 288H208C212.375 288 216 284.375 216 280V248C216 243.625 212.375 240 208 240ZM208 320H176C171.625 320 168 323.625 168 328V360C168 364.375 171.625 368 176 368H208C212.375 368 216 364.375 216 360V328C216 323.625 212.375 320 208 320ZM128 240H96C91.625 240 88 243.625 88 248V280C88 284.375 91.625 288 96 288H128C132.375 288 136 284.375 136 280V248C136 243.625 132.375 240 128 240ZM128 320H96C91.625 320 88 323.625 88 328V360C88 364.375 91.625 368 96 368H128C132.375 368 136 364.375 136 360V328C136 323.625 132.375 320 128 320ZM288 240H256C251.625 240 248 243.625 248 248V280C248 284.375 251.625 288 256 288H288C292.375 288 296 284.375 296 280V248C296 243.625 292.375 240 288 240ZM288 320H256C251.625 320 248 323.625 248 328V360C248 364.375 251.625 368 256 368H288C292.375 368 296 364.375 296 360V328C296 323.625 292.375 320 288 320ZM288 144H96C91.625 144 88 147.625 88 152V200C88 204.375 91.625 208 96 208H288C292.375 208 296 204.375 296 200V152C296 147.625 292.375 144 288 144ZM320 73.613V48C320 21.602 298.4 0 272 0H112C85.6 0 64 21.602 64 48V73.613C27.484 81.027 0 113.297 0 152V360C0 398.703 27.484 430.973 64 438.387V464C64 490.398 85.6 512 112 512H272C298.4 512 320 490.398 320 464V438.387C356.516 430.973 384 398.703 384 360V152C384 113.297 356.516 81.027 320 73.613ZM336 360C336 377.645 321.645 392 304 392H80C62.355 392 48 377.645 48 360V152C48 134.355 62.355 120 80 120H304C321.645 120 336 134.355 336 152V360Z" })
  }
));
WatchCalculatorRegular.displayName = "WatchCalculatorRegular";
var WatchCalculator_default = WatchCalculatorRegular;
