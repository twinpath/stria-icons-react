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
var BatteryExclamation_exports = {};
__export(BatteryExclamation_exports, {
  default: () => BatteryExclamation_default
});
module.exports = __toCommonJS(BatteryExclamation_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BatteryExclamationThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M272 416C263.18 416 256 423.178 256 432C256 440.82 263.18 448 272 448S288 440.82 288 432C288 423.178 280.82 416 272 416ZM272 352C276.418 352 280 348.418 280 344V72C280 67.582 276.418 64 272 64S264 67.582 264 72V344C264 348.418 267.582 352 272 352ZM544 192H528V160C528 124.652 499.346 96 464 96H328C323.582 96 320 99.582 320 104S323.582 112 328 112H464C490.51 112 512 133.49 512 160V352C512 378.51 490.51 400 464 400H352C347.582 400 344 403.582 344 408S347.582 416 352 416H464C499.346 416 528 387.346 528 352V320H544C561.674 320 576 305.672 576 288V224C576 206.326 561.674 192 544 192ZM560 288C560 296.822 552.82 304 544 304H528V208H544C552.82 208 560 215.178 560 224V288ZM216 96H64C28.654 96 0 124.652 0 160V352C0 387.346 28.654 416 64 416H192C196.418 416 200 412.418 200 408S196.418 400 192 400H64C37.49 400 16 378.51 16 352V160C16 133.49 37.49 112 64 112H216C220.418 112 224 108.418 224 104S220.418 96 216 96Z" })
  }
));
BatteryExclamationThin.displayName = "BatteryExclamationThin";
var BatteryExclamation_default = BatteryExclamationThin;
