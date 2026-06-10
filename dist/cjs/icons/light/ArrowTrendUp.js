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
var ArrowTrendUp_exports = {};
__export(ArrowTrendUp_exports, {
  default: () => ArrowTrendUp_default
});
module.exports = __toCommonJS(ArrowTrendUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowTrendUpLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M576 112V288C576 296.844 568.844 304 560 304S544 296.844 544 288V150.625L331.312 363.312C328.188 366.438 324.094 368 320 368S311.812 366.438 308.688 363.312L192 246.625L27.312 411.312C24.188 414.438 20.094 416 16 416C6.861 416 0 408.527 0 400C0 395.906 1.562 391.812 4.688 388.688L180.688 212.688C183.812 209.562 187.906 208 192 208S200.188 209.562 203.312 212.688L320 329.375L521.375 128H384C375.156 128 368 120.844 368 112S375.156 96 384 96H560C568.844 96 576 103.156 576 112Z" })
  }
));
ArrowTrendUpLight.displayName = "ArrowTrendUpLight";
var ArrowTrendUp_default = ArrowTrendUpLight;
