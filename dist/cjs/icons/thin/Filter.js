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
var Filter_exports = {};
__export(Filter_exports, {
  default: () => Filter_default
});
module.exports = __toCommonJS(Filter_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FilterThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M479.297 48C486.024 48 491.696 51.523 494.469 57.426C495.727 60.102 498.032 67.07 492.309 73.972L307.684 296.609L304.001 301.051V306.822V455.984C304.001 461.513 299.266 464 295.907 464C294.325 464 292.817 463.506 291.422 462.532L211.395 406.528C209.27 405.047 208.001 402.606 208.001 400V306.822V301.051L204.317 296.609L19.692 73.973C13.969 67.07 16.274 60.102 17.532 57.426C20.305 51.523 25.977 48 32.704 48H479.297M479.297 32H32.704C5.211 32 -9.964 63.275 7.376 84.186L192.001 306.822V400C192.001 407.828 195.813 415.172 202.251 419.656L282.251 475.641C286.536 478.639 291.274 480 295.907 480C308.34 480 320.001 470.203 320.001 455.984V306.822L504.626 84.186C521.965 63.275 506.79 32 479.297 32L479.297 32Z" })
  }
));
FilterThin.displayName = "FilterThin";
var Filter_default = FilterThin;
