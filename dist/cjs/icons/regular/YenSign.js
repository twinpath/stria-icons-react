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
const YenSignRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M315.844 69.5L210.787 224H280C293.25 224 304 234.75 304 248S293.25 272 280 272H184V320H280C293.25 320 304 330.75 304 344S293.25 368 280 368H184V456C184 469.25 173.25 480 160 480S136 469.25 136 456V368H40C26.75 368 16 357.25 16 344S26.75 320 40 320H136V272H40C26.75 272 16 261.25 16 248S26.75 224 40 224H109.213L4.156 69.5C-3.297 58.531 -0.453 43.609 10.5 36.156C21.469 28.734 36.391 31.531 43.844 42.5L160 213.312L276.156 42.5C283.609 31.531 298.547 28.719 309.5 36.156C320.453 43.609 323.297 58.531 315.844 69.5Z" })
  }
));
YenSignRegular.displayName = "YenSignRegular";
var YenSign_default = YenSignRegular;
