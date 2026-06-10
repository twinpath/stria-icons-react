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
var ClothesHanger_exports = {};
__export(ClothesHanger_exports, {
  default: () => ClothesHanger_default
});
module.exports = __toCommonJS(ClothesHanger_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ClothesHangerLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M608.5 387.281L341.188 218.438L373.25 197.062C400.031 179.219 416 149.344 416 117.188V96C416 43.062 372.938 0 320 0S224 43.062 224 96C224 104.844 231.156 112 240 112S256 104.844 256 96C256 60.719 284.719 32 320 32S384 60.719 384 96V117.188C384 138.625 373.344 158.531 355.5 170.438L30.094 387.375C11.25 399.938 0 420.969 0 444.438C0 481.688 30.312 512 67.562 512H572.438C609.688 512 640 481.688 640 444.438C640 421.125 628.219 399.75 608.5 387.281ZM572.438 480H67.562C47.969 480 32 464.031 32 443.594C32 431.688 37.938 420.625 47.844 414L312.031 237.875L591.406 414.344C601.812 420.906 608 432.156 608 444.438C608 464.031 592.031 480 572.438 480Z" })
  }
));
ClothesHangerLight.displayName = "ClothesHangerLight";
var ClothesHanger_default = ClothesHangerLight;
