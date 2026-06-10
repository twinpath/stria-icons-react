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
var ArrowsRotate_exports = {};
__export(ArrowsRotate_exports, {
  default: () => ArrowsRotate_default
});
module.exports = __toCommonJS(ArrowsRotate_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowsRotateRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M454.781 288.969C442 285.219 428.719 292.562 425.031 305.281C403.312 379.906 333.781 432 256 432C189.475 432 129.262 393.719 99.564 336H200C213.25 336 224 325.25 224 312S213.25 288 200 288H40C26.75 288 16 298.75 16 312V472C16 485.25 26.75 496 40 496S64 485.25 64 472V369.883C103.736 436.426 176.133 480 256 480C355 480 443.469 413.688 471.094 318.719C474.812 305.969 467.5 292.656 454.781 288.969ZM472.062 16C458.812 16 448.062 26.75 448.062 40V142.07C408.314 75.555 335.912 32 256.062 32C157.062 32 68.594 98.312 40.969 193.281C37.25 206.031 44.562 219.344 57.281 223.031C70.125 226.813 83.375 219.406 87.031 206.719C108.75 132.094 178.281 80 256.062 80C322.588 80 382.826 118.281 412.527 176H312.062C298.812 176 288.062 186.75 288.062 200S298.812 224 312.062 224H472.062C485.312 224 496.062 213.25 496.062 200V40C496.062 26.75 485.312 16 472.062 16Z" })
  }
));
ArrowsRotateRegular.displayName = "ArrowsRotateRegular";
var ArrowsRotate_default = ArrowsRotateRegular;
