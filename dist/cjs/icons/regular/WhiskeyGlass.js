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
var WhiskeyGlass_exports = {};
__export(WhiskeyGlass_exports, {
  default: () => WhiskeyGlass_default
});
module.exports = __toCommonJS(WhiskeyGlass_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WhiskeyGlassRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M479.955 32H32.045C12.549 32 -2.324 49.254 0.301 68.51L56.289 425.109C60.789 456.617 87.783 480 119.778 480H392.723C424.467 480 451.586 456.617 456.086 425.109L511.699 68.51C514.324 49.254 499.451 32 479.955 32ZM392.723 432H119.778C111.656 432 104.94 426.248 103.709 417.664L90.885 336H421.406L408.569 418.322C407.455 426.119 400.643 432 392.723 432ZM428.891 288H83.348L50.684 80H461.328L428.891 288Z" })
  }
));
WhiskeyGlassRegular.displayName = "WhiskeyGlassRegular";
var WhiskeyGlass_default = WhiskeyGlassRegular;
