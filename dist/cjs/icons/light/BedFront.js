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
var BedFront_exports = {};
__export(BedFront_exports, {
  default: () => BedFront_default
});
module.exports = __toCommonJS(BedFront_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BedFrontLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 240.402V96C480 60.703 451.281 32 416 32H96C60.719 32 32 60.703 32 96V240.402C12.686 255.02 0 277.967 0 304V464C0 472.844 7.156 480 16 480S32 472.844 32 464V416H480V464C480 472.844 487.156 480 496 480S512 472.844 512 464V304C512 277.967 499.314 255.02 480 240.402ZM432 224H272V192C272 174.359 286.344 160 304 160H416C433.656 160 448 174.359 448 192V225.619C442.828 224.564 437.48 224 432 224ZM96 64H416C433.656 64 448 78.359 448 96V136.904C438.547 131.391 427.707 128 416 128H304C284.799 128 267.742 136.678 256 150.119C244.258 136.678 227.201 128 208 128H96C84.293 128 73.453 131.391 64 136.904V96C64 78.359 78.344 64 96 64ZM64 192C64 174.359 78.344 160 96 160H208C225.656 160 240 174.359 240 192V224H80C74.52 224 69.172 224.564 64 225.619V192ZM480 384H32V304C32 277.531 53.531 256 80 256H432C458.469 256 480 277.531 480 304V384Z" })
  }
));
BedFrontLight.displayName = "BedFrontLight";
var BedFront_default = BedFrontLight;
