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
var CaravanSimple_exports = {};
__export(CaravanSimple_exports, {
  default: () => CaravanSimple_default
});
module.exports = __toCommonJS(CaravanSimple_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CaravanSimpleDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 224V160C256 142.327 241.673 128 224 128H96C78.327 128 64 142.327 64 160V224C64 241.673 78.327 256 96 256H224C241.673 256 256 241.673 256 224ZM416 128H352C334.327 128 320 142.327 320 160V224C320 241.673 334.327 256 352 256H416C433.673 256 448 241.673 448 224V160C448 142.327 433.673 128 416 128ZM192 336C143.399 336 104 375.399 104 424S143.399 512 192 512S280 472.601 280 424S240.601 336 192 336Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M624 352H576V192C576 103.634 504.366 32 416 32H64C28.654 32 0 60.654 0 96V352C0 387.346 28.654 416 64 416H72.81C77 353.53 128.47 304 192 304S307 353.53 311.19 416H624C632.837 416 640 408.837 640 400V368C640 359.163 632.837 352 624 352ZM256 224C256 241.673 241.673 256 224 256H96C78.327 256 64 241.673 64 224V160C64 142.327 78.327 128 96 128H224C241.673 128 256 142.327 256 160V224ZM448 224C448 241.673 433.673 256 416 256H352C334.327 256 320 241.673 320 224V160C320 142.327 334.327 128 352 128H416C433.673 128 448 142.327 448 160V224Z" })
    ]
  }
));
CaravanSimpleDuotone.displayName = "CaravanSimpleDuotone";
var CaravanSimple_default = CaravanSimpleDuotone;
