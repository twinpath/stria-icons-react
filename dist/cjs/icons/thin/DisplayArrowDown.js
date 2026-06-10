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
var DisplayArrowDown_exports = {};
__export(DisplayArrowDown_exports, {
  default: () => DisplayArrowDown_default
});
module.exports = __toCommonJS(DisplayArrowDown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DisplayArrowDownThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M528 0H360C355.582 0 352 3.582 352 8S355.582 16 360 16H528C545.674 16 560 30.326 560 48V368C560 385.672 545.674 400 528 400H48C30.328 400 16 385.672 16 368V48C16 30.326 30.328 16 48 16H216C220.418 16 224 12.418 224 8S220.418 0 216 0H48C21.49 0 0 21.49 0 48V368C0 394.51 21.49 416 48 416H228.91L202.242 496H136C131.594 496 128 499.578 128 504S131.594 512 136 512H440C444.406 512 448 508.422 448 504S444.406 496 440 496H373.785L347.117 416H528C554.51 416 576 394.51 576 368V48C576 21.49 554.51 0 528 0ZM356.91 496H219.117L245.785 416H330.242L356.91 496ZM216 80C220.418 80 224 76.418 224 72S220.418 64 216 64H64V352H512V64H360C355.582 64 352 67.582 352 72S355.582 80 360 80H496V336H80V80H216ZM186.344 162.344C183.219 165.469 183.219 170.531 186.344 173.656L282.34 269.652C283.787 271.102 285.787 272 288 272S292.213 271.102 293.66 269.652L389.656 173.656C392.781 170.531 392.781 165.469 389.656 162.344S381.469 159.219 378.344 162.344L296 244.688V8C296 3.578 292.422 0 288 0S280 3.578 280 8V244.688L197.656 162.344C194.531 159.219 189.469 159.219 186.344 162.344Z" })
  }
));
DisplayArrowDownThin.displayName = "DisplayArrowDownThin";
var DisplayArrowDown_default = DisplayArrowDownThin;
