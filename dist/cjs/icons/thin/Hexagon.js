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
var Hexagon_exports = {};
__export(Hexagon_exports, {
  default: () => Hexagon_default
});
module.exports = __toCommonJS(Hexagon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HexagonThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M505.824 233.367L400.437 54.164C392.32 40.516 377.5 32 361.387 32H150.613C134.5 32 119.68 40.516 111.563 54.164L6.176 233.367C-2.059 247.367 -2.059 264.633 6.176 278.633L111.563 457.832C119.68 471.484 134.5 480 150.613 480H361.387C377.5 480 392.32 471.484 400.437 457.832L505.824 278.633C514.059 264.633 514.059 247.367 505.824 233.367ZM492.031 270.523L386.684 449.656C381.426 458.504 371.73 464 361.387 464H150.613C140.27 464 130.574 458.504 125.355 449.723L19.969 270.52C14.699 261.562 14.699 250.437 19.969 241.477L125.313 62.344C130.574 53.496 140.27 48 150.613 48H361.387C371.73 48 381.426 53.496 386.645 62.273L492.031 241.48C497.301 250.438 497.301 261.562 492.031 270.523Z" })
  }
));
HexagonThin.displayName = "HexagonThin";
var Hexagon_default = HexagonThin;
