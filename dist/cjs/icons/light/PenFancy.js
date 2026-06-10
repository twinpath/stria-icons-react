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
var PenFancy_exports = {};
__export(PenFancy_exports, {
  default: () => PenFancy_default
});
module.exports = __toCommonJS(PenFancy_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PenFancyLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M424.875 0C401.375 0 378 9.625 361.125 28.75L169.875 240L84.112 268.629C73.967 272.016 66.008 279.979 62.625 290.125L1.996 460.803C-2.662 474.779 0.977 490.189 11.393 500.605C21.813 511.025 37.225 514.662 51.203 510L221.75 449.375C231.903 445.988 239.868 438.021 243.252 427.869L271.875 342L483.125 150.75C544.5 96.375 500.125 0 424.875 0ZM212.875 417.75C212.75 418.375 67.5 467.125 67.5 467.125L126.766 407.75C127.198 407.773 127.563 408 128 408C141.254 408 152 397.254 152 384C152 370.744 141.254 360 128 360S104 370.744 104 384C104 384.373 104.196 384.686 104.213 385.055L44.875 444.5C44.875 444.5 93.625 299.125 94.25 299L182.75 269.5L242.375 329.125L212.875 417.75ZM461.625 127L264.25 305.75L206.125 247.625L385.125 49.875C395.125 38.5 409.625 32 424.875 32C454 32 480.75 57.5 479.75 88.625C479.375 103.375 473 116.875 461.625 127Z" })
  }
));
PenFancyLight.displayName = "PenFancyLight";
var PenFancy_default = PenFancyLight;
