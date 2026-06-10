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
const InfinityDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M481.719 416C436.297 416 393.578 397.094 363.625 364.125L319.562 315.531L275.5 364.094C245.531 397.094 202.812 416 158.281 416C71 416 0 345 0 257.719V254.281C0 167 71 96 158.281 96C202.813 96 245.531 114.906 275.484 147.875L319.547 196.469L363.609 147.906C393.578 114.906 436.297 96 480.828 96C569 96 640 167 640 254.281V257.719C640 345 569 416 481.719 416ZM373.562 256L422.859 310.344C437.656 326.656 458.797 336 480.828 336C524.891 336 560 300.875 560 257.719V254.281C560 211.125 524.891 176 481.719 176C458.797 176 437.656 185.344 422.844 201.688L373.562 256ZM158.281 176C115.109 176 80 211.125 80 254.281V257.719C80 300.875 115.109 336 158.281 336C180.313 336 201.453 326.656 216.266 310.312L265.547 256L216.25 201.656C201.453 185.344 180.312 176 158.281 176Z", className: "stria-secondary", style: { opacity: 0.4 } })
  }
));
InfinityDuotone.displayName = "InfinityDuotone";
var Infinity_default = InfinityDuotone;
