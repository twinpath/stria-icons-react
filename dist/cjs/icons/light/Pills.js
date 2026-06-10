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
var Pills_exports = {};
__export(Pills_exports, {
  default: () => Pills_default
});
module.exports = __toCommonJS(Pills_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PillsLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M112 32C50.25 32 0 82.25 0 144V368C0 429.75 50.25 480 112 480S224 429.75 224 368V144C224 82.25 173.75 32 112 32ZM192 368C192 412.125 156.125 448 112 448S32 412.125 32 368V288H192V368ZM192 256H32V144C32 99.875 67.875 64 112 64S192 99.875 192 144V256ZM416 160C327.625 160 256 231.625 256 320S327.625 480 416 480S576 408.375 576 320S504.375 160 416 160ZM416 448C345.25 448 288 390.75 288 320C288 290.375 298.375 263.625 315.25 241.875L494.25 420.75C472.375 437.625 445.625 448 416 448ZM516.75 398.125L337.875 219.25C359.625 202.5 386.375 192 416 192C486.75 192 544 249.25 544 320C544 349.625 533.625 376.375 516.75 398.125Z" })
  }
));
PillsLight.displayName = "PillsLight";
var Pills_default = PillsLight;
