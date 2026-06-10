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
var Marker_exports = {};
__export(Marker_exports, {
  default: () => Marker_default
});
module.exports = __toCommonJS(Marker_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MarkerDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M94.006 290.006C41.51 342.502 8.389 411.369 0.139 485.113V485.363C-1.486 500.611 11.389 513.486 26.637 511.861C100.506 503.736 169.375 470.615 221.994 417.994L319.989 320.001L192.001 192.011L94.006 290.006Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M485.656 154.518L320.172 320.004L192.184 192.014L301.988 82.209L271.051 51.396L172.619 149.828C166.371 156.078 156.246 156.078 149.996 149.828L138.688 138.52C132.438 132.27 132.438 122.145 138.688 115.896L242.803 11.779C258.428 -3.844 283.676 -3.844 299.299 11.779L335.92 48.277L357.668 26.529C393.041 -8.844 450.285 -8.844 485.656 26.529C521.029 61.9 521.029 119.146 485.656 154.518Z" })
    ]
  }
));
MarkerDuotone.displayName = "MarkerDuotone";
var Marker_default = MarkerDuotone;
