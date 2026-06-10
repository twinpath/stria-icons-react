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
var ArrowDownToLine_exports = {};
__export(ArrowDownToLine_exports, {
  default: () => ArrowDownToLine_default
});
module.exports = __toCommonJS(ArrowDownToLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowDownToLineLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M180.688 395.312C183.812 398.438 187.906 400 192 400S200.188 398.438 203.312 395.312L347.312 251.312C353.562 245.062 353.562 234.937 347.312 228.688S330.937 222.438 324.688 228.688L208 345.375V48C208 39.156 200.844 32 192 32S176 39.156 176 48V345.375L59.312 228.688C53.062 222.438 42.937 222.438 36.688 228.688S30.438 245.063 36.688 251.312L180.688 395.312ZM368 448H16C7.156 448 0 455.156 0 464S7.156 480 16 480H368C376.844 480 384 472.844 384 464S376.844 448 368 448Z" })
  }
));
ArrowDownToLineLight.displayName = "ArrowDownToLineLight";
var ArrowDownToLine_default = ArrowDownToLineLight;
