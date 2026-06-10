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
var Aperture_exports = {};
__export(Aperture_exports, {
  default: () => Aperture_default
});
module.exports = __toCommonJS(Aperture_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ApertureDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 256C16 278.199 19.254 299.596 24.895 320H182.096L63.016 113.754C33.602 153.59 16 202.68 16 256ZM316.113 23.895L237.531 160H475.898C446.682 93.18 387.91 42.449 316.113 23.895ZM229.199 494.416C238.008 495.396 246.93 496 256 496C322.986 496 383.498 468.498 427.035 424.242L348.375 288.004L229.199 494.416Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M282.699 17.584C273.891 16.604 264.969 16 255.898 16C188.912 16 128.4 43.502 84.863 87.758L163.523 223.996L282.699 17.584ZM487.004 192H329.803L448.883 398.246C478.297 358.41 495.898 309.32 495.898 256C495.898 233.801 492.645 212.404 487.004 192ZM36 352C65.217 418.82 123.988 469.551 195.785 488.105L274.367 352H36Z" })
    ]
  }
));
ApertureDuotone.displayName = "ApertureDuotone";
var Aperture_default = ApertureDuotone;
