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
var Code_exports = {};
__export(Code_exports, {
  default: () => Code_default
});
module.exports = __toCommonJS(Code_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CodeRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M169.5 119.594C160.469 109.906 145.25 109.438 135.594 118.5L7.594 238.5C2.75 243.031 0 249.375 0 256S2.75 268.969 7.594 273.5L135.594 393.5C140.219 397.844 146.125 400 152 400C158.406 400 164.781 397.469 169.5 392.406C178.562 382.75 178.094 367.562 168.406 358.5L59.094 256L168.406 153.5C178.094 144.438 178.562 129.25 169.5 119.594ZM390.375 0.875C377.563 -2.656 364.406 4.844 360.875 17.625L232.875 481.625C229.344 494.406 236.844 507.625 249.625 511.125C251.75 511.719 253.906 512 256 512C266.531 512 276.188 505.031 279.125 494.375L407.125 30.375C410.656 17.594 403.156 4.375 390.375 0.875ZM632.406 238.5L504.406 118.5C494.75 109.438 479.531 109.906 470.5 119.594C461.438 129.25 461.906 144.438 471.594 153.5L580.906 256L471.594 358.5C461.906 367.562 461.438 382.75 470.5 392.406C475.219 397.469 481.594 400 488 400C493.875 400 499.781 397.844 504.406 393.5L632.406 273.5C637.25 268.969 640 262.625 640 256S637.25 243.031 632.406 238.5Z" })
  }
));
CodeRegular.displayName = "CodeRegular";
var Code_default = CodeRegular;
