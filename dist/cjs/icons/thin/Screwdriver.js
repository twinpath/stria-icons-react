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
var Screwdriver_exports = {};
__export(Screwdriver_exports, {
  default: () => Screwdriver_default
});
module.exports = __toCommonJS(Screwdriver_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ScrewdriverThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M509.633 64.344L447.633 2.344C444.789 -0.5 440.273 -0.812 437.133 1.625L315.133 94.625C313.148 96.156 311.977 98.5 311.977 101V188.688L234.184 266.48C202.635 240.736 156.102 242.186 126.695 271.562L12.852 385.281C-4.289 402.594 -4.289 430.656 12.883 447.844L64.148 499.094C72.742 507.688 84.055 512 95.383 512S118.055 507.688 126.711 499.094L240.414 385.281C269.82 355.875 271.271 309.338 245.498 277.791L323.289 200H410.977C413.477 200 415.82 198.844 417.336 196.844L510.336 74.844C512.773 71.656 512.461 67.188 509.633 64.344ZM229.102 373.969L115.414 487.75C104.383 498.719 86.445 498.75 75.461 487.781L24.195 436.531C13.242 425.563 13.258 407.625 24.195 396.563L138.008 282.875C163.133 257.813 203.977 257.813 229.102 282.875C254.195 308 254.195 348.844 229.102 373.969ZM407.008 184H327.977V104.969L441.258 18.594L493.367 70.719L407.008 184Z" })
  }
));
ScrewdriverThin.displayName = "ScrewdriverThin";
var Screwdriver_default = ScrewdriverThin;
