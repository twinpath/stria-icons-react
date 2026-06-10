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
const WRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M400.028 480.018C399.622 480.018 399.216 480.018 398.81 479.987C385.044 479.487 373.153 470.206 369.294 456.987L288.013 178.299L206.732 456.987C202.872 470.206 190.982 479.487 177.216 479.987C163.466 480.612 150.888 472.143 146.044 459.268L2.044 75.268C-4.159 58.706 4.232 40.268 20.778 34.049C37.325 27.956 55.763 36.237 61.982 52.768L172.216 346.768L257.294 55.049C261.278 41.393 273.794 32.018 288.013 32.018S314.747 41.393 318.732 55.049L403.81 346.768L514.044 52.768C520.263 36.237 538.716 27.956 555.247 34.049C571.794 40.268 580.185 58.706 573.982 75.268L429.982 459.268C425.278 471.768 413.31 480.018 400.028 480.018Z" })
  }
));
WRegular.displayName = "WRegular";
var W_default = WRegular;
