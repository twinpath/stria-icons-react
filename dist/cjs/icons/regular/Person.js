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
var Person_exports = {};
__export(Person_exports, {
  default: () => Person_default
});
module.exports = __toCommonJS(Person_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PersonRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M308.685 275.828L247.248 171.375C231.498 144.625 202.437 128 171.406 128H148.593C117.564 128 88.502 144.625 72.752 171.375L11.316 275.828C4.597 287.25 8.41 301.969 19.847 308.688C23.648 310.934 27.828 312 31.959 312C40.185 312 48.216 307.766 52.689 300.172L96.002 226.533V488C96.002 501.254 106.746 512 120.002 512S144 501.254 144 488V352H176V488C176 501.254 186.744 512 200 512S224 501.254 224 488V226.533L267.31 300.172C271.779 307.766 279.779 312 288.029 312C292.154 312 296.341 310.938 300.154 308.688C311.591 301.969 315.404 287.25 308.685 275.828ZM176 304H144.002V176.268C145.517 176.09 147.05 176 148.593 176H171.406C172.951 176 174.484 176.09 176 176.268V304ZM160 96C186.5 96 208 74.5 208 48S186.5 0 160 0C133.502 0 112.002 21.5 112.002 48S133.502 96 160 96Z" })
  }
));
PersonRegular.displayName = "PersonRegular";
var Person_default = PersonRegular;
