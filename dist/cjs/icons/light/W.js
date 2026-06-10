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
var W_exports = {};
__export(W_exports, {
  default: () => W_default
});
module.exports = __toCommonJS(W_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M406.999 480C406.812 480 406.609 480 406.406 480C399.484 479.719 393.515 475.062 391.609 468.406L288 106.164L184.391 468.406C182.485 475.062 176.516 479.719 169.594 480C161.923 479.469 156.376 476.031 153.985 469.531L0.986 53.504C-2.061 45.191 2.189 36.003 10.486 32.941C18.767 30.003 27.97 34.159 31.017 42.441L167.094 412.465L272.61 43.566C276.547 29.815 299.453 29.815 303.391 43.566L408.906 412.465L544.983 42.441C548.045 34.159 557.28 30.003 565.514 32.941C573.811 36.003 578.061 45.191 575.014 53.504L422.015 469.531C419.687 475.843 413.687 480 406.999 480Z" })
  }
));
WLight.displayName = "WLight";
var W_default = WLight;
