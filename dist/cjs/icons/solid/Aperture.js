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
const ApertureSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M63.016 113.754C33.602 153.59 16 202.68 16 256C16 278.199 19.254 299.596 24.895 320H182.096L63.016 113.754ZM282.801 17.584C273.992 16.604 265.07 16 256 16C189.014 16 128.502 43.502 84.965 87.758L163.625 223.996L282.801 17.584ZM475.898 160C446.682 93.18 387.91 42.449 316.113 23.895L237.531 160H475.898ZM487.105 192H329.904L448.984 398.246C478.398 358.41 496 309.32 496 256C496 233.801 492.746 212.404 487.105 192ZM36.102 352C65.318 418.82 124.09 469.551 195.887 488.105L274.469 352H36.102ZM229.199 494.416C238.008 495.396 246.93 496 256 496C322.986 496 383.498 468.498 427.035 424.242L348.375 288.004L229.199 494.416Z" })
  }
));
ApertureSolid.displayName = "ApertureSolid";
var Aperture_default = ApertureSolid;
