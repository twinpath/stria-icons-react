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
var Gift_exports = {};
__export(Gift_exports, {
  default: () => Gift_default
});
module.exports = __toCommonJS(Gift_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GiftRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 128H437.875C450.385 103.982 453.379 73.957 434.834 41.93C419.121 14.793 390.348 -0.26 358.99 0.004C317.938 0.348 291.221 21.756 257 68.375C222.77 21.742 195.922 0.334 154.848 0.004C123.502 -0.25 94.746 14.805 79.039 41.934C60.496 73.957 63.492 103.982 76 128H64C28.654 128 0 156.652 0 192V256C0 273.672 14.328 288 32 288V448C32 483.346 60.654 512 96 512H416C451.348 512 480 483.346 480 448V288C497.674 288 512 273.672 512 256V192C512 156.652 483.348 128 448 128ZM360 48C382 48 400 66 400 88S382 128 360 128H273.875C325.25 51.5 339.625 48 360 48ZM153.875 48C173.875 48 188.5 51.25 240 128H153.875C131.875 128 113.875 110 113.875 88S131.875 48 153.875 48ZM224 464H96C87.178 464 80 456.822 80 448V288H224V464ZM432 448C432 456.822 424.822 464 416 464H288V288H432V448ZM464 240H48V192C48 183.178 55.178 176 64 176H448C456.822 176 464 183.178 464 192V240Z" })
  }
));
GiftRegular.displayName = "GiftRegular";
var Gift_default = GiftRegular;
