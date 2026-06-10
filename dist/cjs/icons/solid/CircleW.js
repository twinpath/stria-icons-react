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
var CircleW_exports = {};
__export(CircleW_exports, {
  default: () => CircleW_default
});
module.exports = __toCommonJS(CircleW_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleWSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM398.938 175.062L334.938 383.062C331.844 393.141 322.516 400 312 400H311.578C300.875 399.812 291.609 392.562 288.828 382.234L256 260.312L223.172 382.234C220.391 392.562 211.125 399.812 200.422 400C189.688 399.984 180.203 393.266 177.062 383.062L113.062 175.062C109.156 162.391 116.266 148.953 128.938 145.062C141.594 141.203 155.031 148.266 158.938 160.938L198.469 289.391L232.828 161.766C235.641 151.281 245.141 144 256 144S276.359 151.281 279.172 161.766L313.531 289.391L353.063 160.937C356.953 148.266 370.406 141.234 383.063 145.062C395.734 148.953 402.844 162.391 398.938 175.062Z" })
  }
));
CircleWSolid.displayName = "CircleWSolid";
var CircleW_default = CircleWSolid;
