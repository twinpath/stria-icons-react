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
var PaperPlaneTop_exports = {};
__export(PaperPlaneTop_exports, {
  default: () => PaperPlaneTop_default
});
module.exports = __toCommonJS(PaperPlaneTop_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PaperPlaneTopSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 255.999C512 268.795 504.375 280.374 492.594 285.405L44.595 477.405C40.533 479.155 36.252 479.999 32.002 479.999C23.377 479.999 14.908 476.499 8.721 469.952C-0.498 460.186 -2.623 445.702 3.377 433.686L77.035 286.37L320.001 255.999L77.035 225.627L3.377 78.311C-2.623 66.295 -0.498 51.811 8.721 42.045C17.971 32.28 32.283 29.295 44.595 34.592L492.594 226.592C504.375 231.624 512 243.202 512 255.999Z" })
  }
));
PaperPlaneTopSolid.displayName = "PaperPlaneTopSolid";
var PaperPlaneTop_default = PaperPlaneTopSolid;
