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
var Splotch_exports = {};
__export(Splotch_exports, {
  default: () => Splotch_default
});
module.exports = __toCommonJS(Splotch_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SplotchDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M481.235 292.666L419.235 324.418C401.36 333.544 389.985 349.67 388.61 367.421L383.86 429.3C380.485 474.054 318.735 496.055 279.485 466.553L225.11 425.675C209.485 413.924 188.11 409.549 168.11 413.924L98.11 429.3C47.485 440.301 3.985 396.673 24.61 355.42L52.985 298.416C61.235 282.04 59.485 263.289 48.36 248.163L9.86 195.784C-18.015 157.781 16.86 108.903 68.86 112.903L140.735 118.528C161.485 120.154 181.735 113.028 194.985 99.277L241.11 51.649C274.485 17.021 339.485 30.397 351.11 74.275L367.11 134.655C371.735 152.031 385.985 166.407 405.235 173.032L472.235 195.909C520.86 212.535 526.11 269.789 481.235 292.666Z", className: "stria-secondary", style: { opacity: 0.4 } })
  }
));
SplotchDuotone.displayName = "SplotchDuotone";
var Splotch_default = SplotchDuotone;
