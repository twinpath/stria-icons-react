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
var UmbrellaBeach_exports = {};
__export(UmbrellaBeach_exports, {
  default: () => UmbrellaBeach_default
});
module.exports = __toCommonJS(UmbrellaBeach_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UmbrellaBeachThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M396.781 4.461C274.125 -16.629 155.688 38.393 101.939 141.25C99.727 145.541 101.732 150.871 106.375 152.529L624.031 333.936C630.629 336.057 634.027 330.334 634.5 328.062C665.999 181.627 558.939 32.309 396.781 4.461ZM120.562 140.531C171.945 50.887 277.5 3.24 387.334 19.543C335.451 38.531 281.283 99.422 243.918 183.758L120.562 140.531ZM482.18 267.248L259 188.648C301.064 94.539 366.344 29.176 419.5 28.676C518.285 33.135 500.223 199.361 482.18 267.248ZM620.594 315.752L497.213 272.516C521.615 181.578 517.211 100.732 488.604 54.168C584.152 108.621 638.527 212.744 620.594 315.752ZM568 496.002H275.555L355.5 282.812C357.031 278.688 354.938 274.062 350.812 272.5C346.594 270.938 342.062 273.031 340.5 277.188L258.445 496.002H8C3.594 496.002 0 499.58 0 504C0 508.422 3.594 512 8 512H568C572.406 512 576 508.422 576 504C576 499.58 572.406 496.002 568 496.002Z" })
  }
));
UmbrellaBeachThin.displayName = "UmbrellaBeachThin";
var UmbrellaBeach_default = UmbrellaBeachThin;
