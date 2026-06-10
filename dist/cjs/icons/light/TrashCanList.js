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
var TrashCanList_exports = {};
__export(TrashCanList_exports, {
  default: () => TrashCanList_default
});
module.exports = __toCommonJS(TrashCanList_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TrashCanListLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M272 400V176C272 167.156 264.844 160 256 160S240 167.156 240 176V400C240 408.844 247.156 416 256 416S272 408.844 272 400ZM400 64H320L286.375 19.25C277.375 7.125 263.125 0 248 0H168C152.875 0 138.625 7.125 129.625 19.25L96 64H16C7.201 64 0 71.199 0 80C0 88.799 7.201 96 16 96H400C408.801 96 416 88.799 416 80C416 71.199 408.801 64 400 64ZM136 64L155.25 38.375C158.25 34.375 163 32 168 32H248C253 32 257.75 34.375 260.75 38.375L280 64H136ZM176 400V176C176 167.156 168.844 160 160 160S144 167.156 144 176V400C144 408.844 151.156 416 160 416S176 408.844 176 400ZM368 128C359.156 128 352 135.156 352 144V432C352 458.469 330.469 480 304 480H112C85.531 480 64 458.469 64 432V144C64 135.156 56.844 128 48 128S32 135.156 32 144V432C32 476.109 67.891 512 112 512H304C348.109 512 384 476.109 384 432V144C384 135.156 376.844 128 368 128ZM624 160H464C455.156 160 448 167.156 448 176S455.156 192 464 192H624C632.844 192 640 184.844 640 176S632.844 160 624 160ZM528 416H464C455.156 416 448 423.156 448 432S455.156 448 464 448H528C536.844 448 544 440.844 544 432S536.844 416 528 416ZM592 288H464C455.156 288 448 295.156 448 304S455.156 320 464 320H592C600.844 320 608 312.844 608 304S600.844 288 592 288Z" })
  }
));
TrashCanListLight.displayName = "TrashCanListLight";
var TrashCanList_default = TrashCanListLight;
