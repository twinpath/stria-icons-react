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
var FilterList_exports = {};
__export(FilterList_exports, {
  default: () => FilterList_default
});
module.exports = __toCommonJS(FilterList_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FilterListLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M329.518 64H22.482C3.582 64 -6.85 85.5 5.07 99.877L112 225.793V368C112 375.828 115.812 383.172 122.252 387.656L202.25 443.641C206.533 446.639 211.273 448 215.906 448C228.34 448 240 438.201 240 423.98V225.793L346.93 99.877C358.85 85.5 348.416 64 329.518 64ZM215.609 205.078L208 214.039V408.607L144 363.818V214.039L136.393 205.078L43.758 96H308.24L215.609 205.078ZM432 112H496C504.797 112 512 104.797 512 96S504.797 80 496 80H432C423.203 80 416 87.203 416 96S423.203 112 432 112ZM496 240H336C327.203 240 320 247.203 320 256S327.203 272 336 272H496C504.797 272 512 264.797 512 256S504.797 240 496 240ZM496 400H336C327.203 400 320 407.203 320 416S327.203 432 336 432H496C504.797 432 512 424.797 512 416S504.797 400 496 400Z" })
  }
));
FilterListLight.displayName = "FilterListLight";
var FilterList_default = FilterListLight;
