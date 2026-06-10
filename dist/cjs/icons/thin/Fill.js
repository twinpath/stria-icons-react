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
var Fill_exports = {};
__export(Fill_exports, {
  default: () => Fill_default
});
module.exports = __toCommonJS(Fill_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FillThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M502.625 217.056L294.937 9.375C288.688 3.125 280.5 0 272.313 0S255.938 3.125 249.688 9.375L151.191 107.876L45.656 2.344C42.531 -0.781 37.469 -0.781 34.344 2.344S31.219 10.531 34.344 13.656L139.879 119.188L28.125 230.946C-9.375 268.429 -9.375 329.193 28.125 366.692L145.313 483.876C164.063 502.61 188.625 512 213.188 512S262.313 502.625 281.063 483.876L502.625 262.305C515.125 249.805 515.125 229.555 502.625 217.056ZM269.75 472.562C254.633 487.677 234.547 496 213.188 496C191.84 496 171.75 487.675 156.625 472.562L39.438 355.378C25.57 341.507 17.754 323.379 16.508 303.991H438.313L269.75 472.562ZM491.313 250.99L454.313 287.991H17.059C19.391 270.759 26.922 254.768 39.438 242.258L151.191 130.5L242.344 221.649C243.906 223.212 245.938 223.993 248 223.993S252.094 223.212 253.656 221.649C256.781 218.525 256.781 213.462 253.656 210.337L162.504 119.188L261 20.687C264.023 17.664 268.043 16 272.313 16S280.602 17.664 283.625 20.687L491.313 228.368C494.336 231.391 496 235.409 496 239.68C496 243.95 494.336 247.967 491.313 250.99Z" })
  }
));
FillThin.displayName = "FillThin";
var Fill_default = FillThin;
