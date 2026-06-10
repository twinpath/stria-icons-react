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
var ShareNodes_exports = {};
__export(ShareNodes_exports, {
  default: () => ShareNodes_default
});
module.exports = __toCommonJS(ShareNodes_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ShareNodesLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M368 320C342.477 320 320.008 332.176 305.359 350.789L156.984 276.602C158.754 269.99 160 263.17 160 256S158.754 242.01 156.984 235.398L305.359 161.211C320.008 179.824 342.477 192 368 192C412.184 192 448 156.184 448 112S412.184 32 368 32S288 67.816 288 112C288 119.17 289.246 125.99 291.016 132.602L142.641 206.789C127.992 188.176 105.523 176 80 176C35.816 176 0 211.816 0 256S35.816 336 80 336C105.523 336 127.992 323.824 142.641 305.211L291.016 379.398C289.246 386.01 288 392.83 288 400C288 444.184 323.816 480 368 480S448 444.184 448 400S412.184 320 368 320ZM368 64C394.467 64 416 85.533 416 112S394.467 160 368 160S320 138.467 320 112S341.533 64 368 64ZM80 304C53.533 304 32 282.467 32 256S53.533 208 80 208S128 229.533 128 256S106.467 304 80 304ZM368 448C341.533 448 320 426.467 320 400S341.533 352 368 352S416 373.533 416 400S394.467 448 368 448Z" })
  }
));
ShareNodesLight.displayName = "ShareNodesLight";
var ShareNodes_default = ShareNodesLight;
