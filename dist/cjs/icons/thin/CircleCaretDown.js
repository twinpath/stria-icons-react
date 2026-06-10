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
var CircleCaretDown_exports = {};
__export(CircleCaretDown_exports, {
  default: () => CircleCaretDown_default
});
module.exports = __toCommonJS(CircleCaretDown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleCaretDownThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 480C132.486 480 32 379.514 32 256S132.486 32 256 32S480 132.486 480 256S379.514 480 256 480ZM345.6 192H166.4C155.123 192 144.83 198.631 140.178 208.893C135.506 219.201 137.309 231.332 144.771 239.803L234.334 342.16C239.797 348.41 247.695 352 256 352S272.203 348.41 277.672 342.154L367.266 239.76C374.691 231.332 376.494 219.201 371.822 208.893C367.17 198.631 356.877 192 345.6 192ZM355.225 229.225L265.625 331.625C263.199 334.4 259.699 336 256 336S248.801 334.4 246.375 331.625L156.775 229.225C153.449 225.449 152.676 220.074 154.75 215.5C156.824 210.924 161.375 208 166.4 208H345.6C350.625 208 355.176 210.924 357.25 215.5C359.324 220.074 358.551 225.449 355.225 229.225Z" })
  }
));
CircleCaretDownThin.displayName = "CircleCaretDownThin";
var CircleCaretDown_default = CircleCaretDownThin;
