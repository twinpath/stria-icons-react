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
var ArrowDownFromLine_exports = {};
__export(ArrowDownFromLine_exports, {
  default: () => ArrowDownFromLine_default
});
module.exports = __toCommonJS(ArrowDownFromLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowDownFromLineLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M324.688 308.688L208 425.375V128C208 119.156 200.844 112 192 112S176 119.156 176 128V425.375L59.312 308.688C53.062 302.438 42.937 302.438 36.688 308.688S30.438 325.063 36.688 331.312L180.688 475.312C183.812 478.438 187.906 480 192 480S200.188 478.438 203.312 475.312L347.312 331.312C353.562 325.062 353.562 314.937 347.312 308.688S330.938 302.438 324.688 308.688ZM368 32H16C7.156 32 0 39.156 0 48S7.156 64 16 64H368C376.844 64 384 56.844 384 48S376.844 32 368 32Z" })
  }
));
ArrowDownFromLineLight.displayName = "ArrowDownFromLineLight";
var ArrowDownFromLine_default = ArrowDownFromLineLight;
