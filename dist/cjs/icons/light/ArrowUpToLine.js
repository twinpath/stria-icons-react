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
var ArrowUpToLine_exports = {};
__export(ArrowUpToLine_exports, {
  default: () => ArrowUpToLine_default
});
module.exports = __toCommonJS(ArrowUpToLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowUpToLineLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M203.312 116.688C200.188 113.562 196.094 112 192 112S183.812 113.562 180.688 116.688L36.688 260.688C30.438 266.938 30.438 277.063 36.688 283.312S53.063 289.562 59.312 283.312L176 166.625V464C176 472.844 183.156 480 192 480S208 472.844 208 464V166.625L324.688 283.312C330.938 289.562 341.063 289.562 347.312 283.312S353.562 266.937 347.312 260.688L203.312 116.688ZM368 32H16C7.156 32 0 39.156 0 48S7.156 64 16 64H368C376.844 64 384 56.844 384 48S376.844 32 368 32Z" })
  }
));
ArrowUpToLineLight.displayName = "ArrowUpToLineLight";
var ArrowUpToLine_default = ArrowUpToLineLight;
