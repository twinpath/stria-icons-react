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
var UpFromLine_exports = {};
__export(UpFromLine_exports, {
  default: () => UpFromLine_default
});
module.exports = __toCommonJS(UpFromLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UpFromLineLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M69.594 240H128V355.172C128 379.891 148.094 400 172.812 400H211.188C235.906 400 256 379.891 256 355.172V240H314.406C329.406 240 342.938 231.094 348.938 217.25C354.875 203.453 352.062 187.469 341.875 176.703L219.344 43.5C212.469 36.188 202.5 32 192 32S171.531 36.188 164.5 43.656L42.281 176.547C31.938 187.469 29.125 203.453 35.062 217.312C41.062 231.094 54.594 240 69.594 240ZM65.688 198.359L187.906 65.469C189.656 63.656 194.5 63.813 195.938 65.313L318.469 198.516C320 200.156 320.438 202.547 319.562 204.562C318.656 206.656 316.625 208 314.406 208H224V355.172C224 362.25 218.25 368 211.188 368H172.812C165.75 368 160 362.25 160 355.172V208H69.594C67.375 208 65.344 206.656 64.438 204.625C63.562 202.547 64 200.156 65.688 198.359ZM16 480H368C376.844 480 384 472.844 384 464S376.844 448 368 448H16C7.156 448 0 455.156 0 464S7.156 480 16 480Z" })
  }
));
UpFromLineLight.displayName = "UpFromLineLight";
var UpFromLine_default = UpFromLineLight;
