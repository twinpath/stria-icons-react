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
var RotateForward_exports = {};
__export(RotateForward_exports, {
  default: () => RotateForward_default
});
module.exports = __toCommonJS(RotateForward_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RotateForwardRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M496 72V200C496 213.25 485.25 224 472 224H344C334.281 224 325.531 218.156 321.812 209.188C318.125 200.219 320.156 189.906 327.031 183.031L379.176 130.887C346.926 99.289 303.076 80 256 80C158.969 80 80 158.969 80 256S158.969 432 256 432C297.094 432 337.094 417.531 368.625 391.25C378.812 382.75 393.906 384.094 402.437 394.312C410.937 404.5 409.562 419.625 399.375 428.125C359.219 461.562 308.312 480 256 480C132.5 480 32 379.5 32 256S132.5 32 256 32C316.031 32 371.967 56.652 413.035 97.027L455.031 55.031C461.906 48.156 472.219 46.156 481.187 49.813C490.156 53.531 496 62.281 496 72Z" })
  }
));
RotateForwardRegular.displayName = "RotateForwardRegular";
var RotateForward_default = RotateForwardRegular;
