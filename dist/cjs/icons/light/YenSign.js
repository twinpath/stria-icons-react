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
var YenSign_exports = {};
__export(YenSign_exports, {
  default: () => YenSign_default
});
module.exports = __toCommonJS(YenSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const YenSignLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 336C320 344.844 312.844 352 304 352H176V464C176 472.844 168.844 480 160 480S144 472.844 144 464V352H16C7.156 352 0 344.844 0 336S7.156 320 16 320H144V256H16C7.156 256 0 248.844 0 240S7.156 224 16 224H130.104L18.688 56.875C13.781 49.516 15.766 39.594 23.125 34.688C30.453 29.766 40.391 31.766 45.312 39.125L160.766 212.312L291.203 38.406C296.5 31.344 306.531 29.906 313.594 35.203C320.672 40.5 322.109 50.531 316.797 57.594L191.992 224H304C312.844 224 320 231.156 320 240S312.844 256 304 256H176V320H304C312.844 320 320 327.156 320 336Z" })
  }
));
YenSignLight.displayName = "YenSignLight";
var YenSign_default = YenSignLight;
