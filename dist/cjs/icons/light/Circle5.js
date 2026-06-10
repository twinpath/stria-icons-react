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
var Circle5_exports = {};
__export(Circle5_exports, {
  default: () => Circle5_default
});
module.exports = __toCommonJS(Circle5_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const Circle5Light = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 464C141.309 464 48 370.691 48 256S141.309 48 256 48S464 141.309 464 256S370.691 464 256 464ZM285.891 233.469L204.047 223.625L220.406 160H320C328.844 160 336 152.844 336 144S328.844 128 320 128H208C200.703 128 194.328 132.938 192.5 140.031L168.5 233.344C167.359 237.812 168.188 242.562 170.797 246.375C173.391 250.188 177.516 252.688 182.094 253.219L281.953 265.219C303.641 268 320 286.562 320 308.438C320 332.469 300.453 352 276.438 352H218.375C206.016 352 195.094 344.125 191.172 332.406C188.375 324 179.281 319.438 170.938 322.281C162.547 325.094 158.031 334.156 160.828 342.531C169.094 367.344 192.219 384 218.375 384H276.438C318.109 384 352 350.094 352 308.438C352 270.531 323.641 238.281 285.891 233.469Z" })
  }
));
Circle5Light.displayName = "Circle5Light";
var Circle5_default = Circle5Light;
