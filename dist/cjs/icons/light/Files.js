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
var Files_exports = {};
__export(Files_exports, {
  default: () => Files_default
});
module.exports = __toCommonJS(Files_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FilesLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M336 480H96C60.654 480 32 451.346 32 416V112C32 103.164 24.836 96 16 96S0 103.164 0 112V416C0 469.02 42.98 512 96 512H336C344.836 512 352 504.836 352 496S344.836 480 336 480ZM429.256 113.252L334.746 18.744C322.742 6.742 306.465 0 289.49 0H160C124.654 0 96 28.654 96 64V352C96 387.346 124.654 416 160 416H384C419.348 416 448 387.346 448 352V158.508C448 141.533 441.258 125.256 429.256 113.252ZM320 49.252L398.75 128H336C327.172 128 320 120.828 320 112V49.252ZM416 352C416 369.645 401.645 384 384 384H160C142.355 384 128 369.645 128 352V64C128 46.355 142.355 32 160 32H288V112C288 138.469 309.531 160 336 160H416V352Z" })
  }
));
FilesLight.displayName = "FilesLight";
var Files_default = FilesLight;
