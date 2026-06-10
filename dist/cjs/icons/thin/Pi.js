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
var Pi_exports = {};
__export(Pi_exports, {
  default: () => Pi_default
});
module.exports = __toCommonJS(Pi_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PiThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M445.656 370.344C448.781 373.469 448.781 378.531 445.656 381.656L394.906 432.406C385.031 442.312 371.281 448 357.25 448C327.875 448 304 424.109 304 394.75V96H144V228.625C144 305.672 121.406 380.297 78.656 444.437C77.125 446.75 74.562 448 72 448C70.469 448 68.938 447.562 67.562 446.656C63.875 444.203 62.906 439.234 65.344 435.562C106.344 374.062 128 302.5 128 228.625V96H8C3.594 96 0 92.422 0 88S3.594 80 8 80H440C444.406 80 448 83.578 448 88S444.406 96 440 96H320V394.75C320 415.297 336.719 432 357.25 432C367.062 432 376.688 428.031 383.594 421.094L434.344 370.344C437.469 367.219 442.531 367.219 445.656 370.344Z" })
  }
));
PiThin.displayName = "PiThin";
var Pi_default = PiThin;
