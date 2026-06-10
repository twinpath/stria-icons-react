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
var Laptop_exports = {};
__export(Laptop_exports, {
  default: () => Laptop_default
});
module.exports = __toCommonJS(Laptop_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LaptopThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M72 352C76.418 352 80 348.418 80 344V80C80 62.326 94.326 48 112 48H528C545.674 48 560 62.326 560 80V344C560 348.418 563.582 352 568 352S576 348.418 576 344V80C576 53.599 554.4 32 528 32H112C85.6 32 64 53.599 64 80V344C64 348.418 67.582 352 72 352ZM624 384H16C7.188 384 0 391.203 0 400V416C0 451.203 28.812 480 64 480H576C611.188 480 640 451.203 640 416V400C640 391.203 632.812 384 624 384ZM624 416C624 442.467 602.467 464 576 464H64C37.533 464 16 442.467 16 416V400H624V416Z" })
  }
));
LaptopThin.displayName = "LaptopThin";
var Laptop_default = LaptopThin;
