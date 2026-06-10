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
var Filter_exports = {};
__export(Filter_exports, {
  default: () => Filter_default
});
module.exports = __toCommonJS(Filter_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FilterRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M507.71 58.707C500.023 42.232 483.786 32 465.337 32H46.654C28.204 32 11.968 42.232 4.283 58.707C-3.196 74.734 -0.758 93.158 10.644 106.787L175.995 309.912V377.619C175.995 390.166 182.173 401.922 192.519 409.066L274.835 472.617C281.997 477.613 289.578 480 297.408 480C318.685 480 335.995 462.807 335.995 441.67V309.912L501.486 106.623C512.749 93.158 515.187 74.734 507.71 58.707ZM295.187 283.986C290.535 289.699 287.995 296.844 287.995 304.215V422.113L223.995 372.725V304.215C223.995 296.844 221.456 289.699 216.804 283.986L50.773 80.037H461.214L295.187 283.986Z" })
  }
));
FilterRegular.displayName = "FilterRegular";
var Filter_default = FilterRegular;
