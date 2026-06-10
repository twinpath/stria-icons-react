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
var CircleDown_exports = {};
__export(CircleDown_exports, {
  default: () => CircleDown_default
});
module.exports = __toCommonJS(CircleDown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleDownLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M227.719 388.281C242.844 403.406 268.969 403.609 284.469 388.078L376.969 292.281C388.437 280.797 391.844 263.688 385.656 248.688C379.438 233.688 364.938 224 348.688 224H320V152C320 129.938 302.062 112 280 112H232C209.938 112 192 129.938 192 152V224H163.312C147.062 224 132.562 233.688 126.344 248.688C120.156 263.641 123.531 280.688 134.906 292.172L227.719 388.281ZM163.312 256H224V152C224 147.594 227.594 144 232 144H280C284.406 144 288 147.594 288 152V256H348.688C355.102 256 359.943 264.047 354.156 269.859L261.656 365.656C257.494 369.861 252.123 367.453 250.531 365.859L157.844 269.859L157.656 269.656C152.805 264.805 155.879 256 163.312 256ZM256 496C388.549 496 496 388.549 496 256S388.549 16 256 16S16 123.451 16 256S123.451 496 256 496ZM256 48C370.691 48 464 141.309 464 256S370.691 464 256 464S48 370.691 48 256S141.309 48 256 48Z" })
  }
));
CircleDownLight.displayName = "CircleDownLight";
var CircleDown_default = CircleDownLight;
