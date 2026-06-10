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
var KipSign_exports = {};
__export(KipSign_exports, {
  default: () => KipSign_default
});
module.exports = __toCommonJS(KipSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const KipSignLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 256C384 264.844 376.844 272 368 272H125.066L346.094 451.594C352.938 457.156 354 467.219 348.406 474.094C345.25 477.969 340.656 480 336 480C332.438 480 328.875 478.844 325.906 476.406L96 289.607V464C96 472.844 88.844 480 80 480S64 472.844 64 464V272H16C7.156 272 0 264.844 0 256S7.156 240 16 240H64V48C64 39.156 71.156 32 80 32S96 39.156 96 48V222.393L325.906 35.594C332.719 30 342.812 31.062 348.406 37.906C354 44.781 352.938 54.844 346.094 60.406L125.066 240H368C376.844 240 384 247.156 384 256Z" })
  }
));
KipSignLight.displayName = "KipSignLight";
var KipSign_default = KipSignLight;
