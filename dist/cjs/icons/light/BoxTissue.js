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
var BoxTissue_exports = {};
__export(BoxTissue_exports, {
  default: () => BoxTissue_default
});
module.exports = __toCommonJS(BoxTissue_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BoxTissueLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M144 320H368C378.328 320 387.484 313.422 390.844 303.375L446.781 127.578C449.203 120.281 447.969 112.203 443.469 105.969C438.969 99.719 431.688 96 424 96H338.594C318.672 96 301.062 83.312 294.766 64.406C281.938 25.891 246.031 0 205.406 0H88C80.672 0 73.844 3.281 69.281 8.984C64.688 14.703 62.969 22.094 64.516 28.969L120.562 301.203C123.031 312.266 132.656 320 144 320ZM205.406 32C232.219 32 255.938 49.094 264.406 74.516C275.062 106.516 304.875 128 338.594 128H413.062L362.156 288H150.516L97.812 32H205.406ZM464 224H448C439.156 224 432 231.156 432 240S439.156 256 448 256H464C472.812 256 480 263.172 480 272V384H32V272C32 263.172 39.188 256 48 256H64C72.844 256 80 248.844 80 240S72.844 224 64 224H48C21.531 224 0 245.531 0 272V464C0 490.469 21.531 512 48 512H464C490.469 512 512 490.469 512 464V272C512 245.531 490.469 224 464 224ZM480 464C480 472.828 472.812 480 464 480H48C39.188 480 32 472.828 32 464V416H480V464Z" })
  }
));
BoxTissueLight.displayName = "BoxTissueLight";
var BoxTissue_default = BoxTissueLight;
