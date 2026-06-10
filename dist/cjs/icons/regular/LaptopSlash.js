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
var LaptopSlash_exports = {};
__export(LaptopSlash_exports, {
  default: () => LaptopSlash_default
});
module.exports = __toCommonJS(LaptopSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LaptopSlashRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M64 146.396V320H112V184.018L64 146.396ZM88 432C68.688 432 52.516 418.234 48.797 400H387.566L326.324 352H24C10.75 352 0 362.75 0 376V392C0 440.531 39.469 480 88 480H489.637L428.395 432H88ZM640 376C640 362.75 629.25 352 616 352H481.396L134.359 80H520C524.406 80 528 83.594 528 88V320H576V88C576 57.125 550.875 32 520 32H120C107.65 32 96.377 36.186 87.145 42.996L38.812 5.113C28.344 -3.059 13.312 -1.246 5.109 9.191C-3.062 19.629 -1.234 34.723 9.188 42.895L601.188 506.891C605.594 510.328 610.797 512 615.984 512C623.109 512 630.156 508.844 634.891 502.812C643.062 492.375 641.234 477.281 630.812 469.109L612.736 454.941C629.387 439.01 640 416.859 640 392V376ZM574.176 424.719L542.639 400H591.203C589.084 410.393 582.662 418.951 574.176 424.719Z" })
  }
));
LaptopSlashRegular.displayName = "LaptopSlashRegular";
var LaptopSlash_default = LaptopSlashRegular;
