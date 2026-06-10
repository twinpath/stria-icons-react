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
var LeftToLine_exports = {};
__export(LeftToLine_exports, {
  default: () => LeftToLine_default
});
module.exports = __toCommonJS(LeftToLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LeftToLineRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M105.375 233.75C99.125 240 96 248.188 96 256.375S99.125 272.75 105.375 279L255.824 414.908C286.691 442.793 336 420.887 336 379.289V336.375H400C426.508 336.375 448 314.885 448 288.375V224.375C448 197.865 426.508 176.375 400 176.375H336V133.088C336 91.457 286.629 69.564 255.773 97.512L105.375 233.75ZM288 224.375H400V288.375H288V377.742L150.633 256.375L288 135.008V224.375ZM48 424V88C48 74.75 37.25 64 24 64S0 74.75 0 88V424C0 437.25 10.75 448 24 448S48 437.25 48 424Z" })
  }
));
LeftToLineRegular.displayName = "LeftToLineRegular";
var LeftToLine_default = LeftToLineRegular;
