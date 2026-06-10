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
var CaretUp_exports = {};
__export(CaretUp_exports, {
  default: () => CaretUp_default
});
module.exports = __toCommonJS(CaretUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CaretUpThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M313.449 279.52L177.449 135.52C172.916 130.721 166.604 128 160 128S147.086 130.721 142.553 135.52L6.553 279.52C2.26 284.064 0 289.99 0 296.004C0 309.162 10.668 320 24 320H296C309.316 320 320 309.18 320 296.004C320 289.99 317.74 284.064 313.449 279.52ZM296 304H24C19.59 304 16 300.412 16 296.004C16 293.949 16.775 291.998 18.184 290.506L154.184 146.506C155.689 144.914 157.809 144 160 144S164.312 144.914 165.816 146.506L301.816 290.506C303.225 291.998 304 293.949 304 296.004C304 300.412 300.412 304 296 304Z" })
  }
));
CaretUpThin.displayName = "CaretUpThin";
var CaretUp_default = CaretUpThin;
