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
var DisplayMedical_exports = {};
__export(DisplayMedical_exports, {
  default: () => DisplayMedical_default
});
module.exports = __toCommonJS(DisplayMedical_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DisplayMedicalRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M368 176H320V128C320 119.199 312.801 112 304 112H272C263.199 112 256 119.199 256 128V176H208C199.199 176 192 183.195 192 191.996V224C192 232.797 199.199 239.996 208 239.996H256V287.996C256 296.797 263.199 304 272 304H304C312.801 304 320 296.797 320 287.996V239.996H368C376.801 239.996 384 232.797 384 224V191.996C384 183.195 376.801 176 368 176ZM512 0H64C28.654 0 0 28.654 0 64V352C0 387.346 28.654 416 64 416H212.328L202.729 464H152C138.75 464 128 474.75 128 488S138.75 512 152 512H424C437.25 512 448 501.25 448 488S437.25 464 424 464H373.271L363.672 416H512C547.346 416 576 387.346 576 352V64C576 28.654 547.346 0 512 0ZM251.672 464L261.271 416H314.729L324.328 464H251.672ZM528 352C528 360.822 520.822 368 512 368H64C55.178 368 48 360.822 48 352V64C48 55.178 55.178 48 64 48H512C520.822 48 528 55.178 528 64V352Z" })
  }
));
DisplayMedicalRegular.displayName = "DisplayMedicalRegular";
var DisplayMedical_default = DisplayMedicalRegular;
