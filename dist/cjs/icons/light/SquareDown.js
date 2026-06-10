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
var SquareDown_exports = {};
__export(SquareDown_exports, {
  default: () => SquareDown_default
});
module.exports = __toCommonJS(SquareDown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareDownLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M64 480H384C419.346 480 448 451.346 448 416V96C448 60.654 419.346 32 384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480ZM32 96C32 78.355 46.355 64 64 64H384C401.645 64 416 78.355 416 96V416C416 433.645 401.645 448 384 448H64C46.355 448 32 433.645 32 416V96ZM195.719 388.281C210.844 403.406 236.969 403.609 252.469 388.078L344.969 292.281C356.437 280.797 359.844 263.688 353.656 248.688C347.438 233.688 332.938 224 316.688 224H288V152C288 129.938 270.062 112 248 112H200C177.938 112 160 129.938 160 152V224H131.312C115.062 224 100.562 233.688 94.344 248.688C88.156 263.641 91.531 280.688 102.906 292.172L195.719 388.281ZM131.312 256H192V152C192 147.594 195.594 144 200 144H248C252.406 144 256 147.594 256 152V256H316.688C323.102 256 327.943 264.048 322.156 269.859L229.656 365.656C225.495 369.861 220.124 367.452 218.531 365.859L125.844 269.859L125.656 269.656C120.806 264.806 123.879 256 131.312 256Z" })
  }
));
SquareDownLight.displayName = "SquareDownLight";
var SquareDown_default = SquareDownLight;
