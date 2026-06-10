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
var SquareRootVariable_exports = {};
__export(SquareRootVariable_exports, {
  default: () => SquareRootVariable_default
});
module.exports = __toCommonJS(SquareRootVariable_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareRootVariableThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M565.656 234.344C562.531 231.219 557.469 231.219 554.344 234.344L480 308.688L405.656 234.344C402.531 231.219 397.469 231.219 394.344 234.344S391.219 242.531 394.344 245.656L468.688 320L394.344 394.344C391.219 397.469 391.219 402.531 394.344 405.656C395.906 407.219 397.938 408 400 408S404.094 407.219 405.656 405.656L480 331.312L554.344 405.656C555.906 407.219 557.938 408 560 408S564.094 407.219 565.656 405.656C568.781 402.531 568.781 397.469 565.656 394.344L491.312 320L565.656 245.656C568.781 242.531 568.781 237.469 565.656 234.344ZM568 32H398.125C367.094 32 339.656 51.781 329.812 81.219L206.75 450.438L120.5 265.562C108.688 240.312 83.094 224 55.25 224H8C3.594 224 0 227.594 0 232S3.594 240 8 240H55.25C76.906 240 96.812 252.688 106 272.312L200.75 475.375C202.062 478.219 204.906 480 208 480H208.469C211.719 479.812 214.562 477.625 215.594 474.531L345 86.281C352.625 63.375 374 48 398.125 48H568C572.406 48 576 44.406 576 40S572.406 32 568 32Z" })
  }
));
SquareRootVariableThin.displayName = "SquareRootVariableThin";
var SquareRootVariable_default = SquareRootVariableThin;
