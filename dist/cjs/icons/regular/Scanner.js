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
var Scanner_exports = {};
__export(Scanner_exports, {
  default: () => Scanner_default
});
module.exports = __toCommonJS(Scanner_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ScannerRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M527.359 264.842L66.734 34.527C54.906 28.621 40.484 33.418 34.531 45.262C28.609 57.121 33.406 71.528 45.266 77.465L466.328 287.998H64C28.654 287.998 0 316.651 0 351.999V415.999C0 451.345 28.654 480 64 480H512C547.348 480 576 451.345 576 415.999V343.546C576 310.014 557.359 279.858 527.359 264.842ZM528 415.999C528 424.822 520.822 432 512 432H64C55.178 432 48 424.822 48 415.999V351.999C48 343.177 55.178 335.999 64 335.999H512C520.822 335.999 528 343.177 528 351.999V415.999ZM96 359.999C82.746 359.999 72 370.743 72 383.999C72 397.253 82.746 407.999 96 407.999S120 397.253 120 383.999C120 370.743 109.254 359.999 96 359.999ZM176 359.999C162.746 359.999 152 370.743 152 383.999C152 397.253 162.746 407.999 176 407.999S200 397.253 200 383.999C200 370.743 189.254 359.999 176 359.999Z" })
  }
));
ScannerRegular.displayName = "ScannerRegular";
var Scanner_default = ScannerRegular;
