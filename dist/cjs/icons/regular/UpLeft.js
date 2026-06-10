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
var UpLeft_exports = {};
__export(UpLeft_exports, {
  default: () => UpLeft_default
});
module.exports = __toCommonJS(UpLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UpLeftRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M249.367 112L213.253 148.113L179.311 182.055L213.252 215.996L336.002 338.746L290.745 383.996L167.997 261.254L134.056 227.312L100.116 261.254L64 297.367V112H249.367M288 64H48C30.328 64 16 78.312 16 96V336C16 348.938 23.797 360.625 35.75 365.562C39.717 367.234 43.883 368.043 48.013 368.043C56.326 368.043 64.497 364.762 70.625 358.625L134.057 295.195L256.804 417.938C266.177 427.312 278.461 432 290.745 432C303.03 432 315.314 427.312 324.687 417.938L369.941 372.688C388.687 353.938 388.685 323.547 369.941 304.805L247.193 182.055L310.625 118.625C319.781 109.469 322.516 95.719 317.563 83.75C312.609 71.781 300.937 64 288 64L288 64Z" })
  }
));
UpLeftRegular.displayName = "UpLeftRegular";
var UpLeft_default = UpLeftRegular;
