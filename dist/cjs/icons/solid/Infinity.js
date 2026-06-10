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
var Infinity_exports = {};
__export(Infinity_exports, {
  default: () => Infinity_default
});
module.exports = __toCommonJS(Infinity_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const InfinitySolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480.828 96C436.297 96 393.578 114.906 363.609 147.906L319.547 196.469L275.484 147.875C245.531 114.906 202.812 96 158.281 96C71 96 0 167 0 254.281V257.719C0 345 71 416 158.281 416C202.813 416 245.531 397.094 275.5 364.094L319.562 315.531L363.625 364.125C393.578 397.094 436.297 416 481.719 416C569 416 640 345 640 257.719V254.281C640 167 569 96 480.828 96ZM216.266 310.312C201.453 326.656 180.312 336 158.281 336C115.109 336 80 300.875 80 257.719V254.281C80 211.125 115.109 176 158.281 176C180.313 176 201.453 185.344 216.25 201.656L265.547 256L216.266 310.312ZM560 257.719C560 300.875 524.891 336 480.828 336C458.797 336 437.656 326.656 422.859 310.344L373.562 256L422.844 201.688C437.656 185.344 458.797 176 481.719 176C524.891 176 560 211.125 560 254.281V257.719Z" })
  }
));
InfinitySolid.displayName = "InfinitySolid";
var Infinity_default = InfinitySolid;
