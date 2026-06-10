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
var AlignLeft_exports = {};
__export(AlignLeft_exports, {
  default: () => AlignLeft_default
});
module.exports = __toCommonJS(AlignLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AlignLeftRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20.875 88H267.125C278.654 88 288 78.654 288 67.125V60.875C288 49.346 278.654 40 267.125 40H20.875C9.346 40 0 49.346 0 60.875V67.125C0 78.654 9.346 88 20.875 88ZM20.875 344H267.125C278.654 344 288 334.654 288 323.125V316.875C288 305.346 278.654 296 267.125 296H20.875C9.346 296 0 305.346 0 316.875V323.125C0 334.654 9.346 344 20.875 344ZM424 168H24C10.745 168 0 178.745 0 192V192C0 205.255 10.745 216 24 216H424C437.255 216 448 205.255 448 192V192C448 178.745 437.255 168 424 168ZM424 424H24C10.745 424 0 434.745 0 448V448C0 461.255 10.745 472 24 472H424C437.255 472 448 461.255 448 448V448C448 434.745 437.255 424 424 424Z" })
  }
));
AlignLeftRegular.displayName = "AlignLeftRegular";
var AlignLeft_default = AlignLeftRegular;
