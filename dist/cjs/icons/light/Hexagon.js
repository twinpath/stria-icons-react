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
const HexagonLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M505.824 233.367L400.437 54.164C392.32 40.516 377.5 32 361.387 32H150.613C134.5 32 119.68 40.516 111.563 54.164L6.176 233.367C-2.059 247.367 -2.059 264.633 6.176 278.633L111.563 457.832C119.68 471.484 134.5 480 150.613 480H361.387C377.5 480 392.32 471.484 400.437 457.832L505.824 278.633C514.059 264.633 514.059 247.367 505.824 233.367ZM478.24 262.41L372.932 441.479C370.541 445.5 366.115 448 361.387 448H150.613C145.885 448 141.459 445.5 139.146 441.609L33.758 262.41C31.398 258.396 31.398 253.604 33.76 249.588L139.066 70.521C141.459 66.498 145.883 64 150.613 64H361.387C366.117 64 370.541 66.498 372.854 70.385L478.242 249.59C480.602 253.604 480.602 258.396 478.24 262.41Z" })
  }
));
HexagonLight.displayName = "HexagonLight";
var Hexagon_default = HexagonLight;
