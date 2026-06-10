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
var CasetteVhs_exports = {};
__export(CasetteVhs_exports, {
  default: () => CasetteVhs_default
});
module.exports = __toCommonJS(CasetteVhs_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CasetteVhsThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M111.125 400H464.875C469.41 400 473.732 398.074 476.768 394.703C499.488 369.459 512 337.246 512 304S499.488 238.541 476.768 213.297C473.732 209.926 469.41 208 464.875 208H111.125C106.59 208 102.268 209.926 99.232 213.297C76.512 238.541 64 270.754 64 304S76.512 369.459 99.232 394.703C102.268 398.074 106.59 400 111.125 400ZM368 224H464.875C484 245.25 496 273.125 496 304S484 362.75 464.875 384H368V224ZM224 224H352V384H224V224ZM111.125 224H208V384H111.125C92 362.75 80 334.875 80 304S92 245.25 111.125 224ZM400 248C395.594 248 392 251.594 392 256S395.594 264 400 264C422.062 264 440 281.938 440 304S422.062 344 400 344C395.594 344 392 347.594 392 352S395.594 360 400 360C430.875 360 456 334.875 456 304S430.875 248 400 248ZM528 32H48C21.49 32 0 53.492 0 80V432C0 458.508 21.49 480 48 480H528C554.51 480 576 458.508 576 432V80C576 53.492 554.51 32 528 32ZM560 432C560 449.645 545.645 464 528 464H48C30.355 464 16 449.645 16 432V160H560V432ZM560 144H16V80C16 62.355 30.355 48 48 48H528C545.645 48 560 62.355 560 80V144ZM176 360C180.406 360 184 356.406 184 352S180.406 344 176 344C153.938 344 136 326.062 136 304S153.938 264 176 264C180.406 264 184 260.406 184 256S180.406 248 176 248C145.125 248 120 273.125 120 304S145.125 360 176 360Z" })
  }
));
CasetteVhsThin.displayName = "CasetteVhsThin";
var CasetteVhs_default = CasetteVhsThin;
