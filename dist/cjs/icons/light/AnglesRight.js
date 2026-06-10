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
var AnglesRight_exports = {};
__export(AnglesRight_exports, {
  default: () => AnglesRight_default
});
module.exports = __toCommonJS(AnglesRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AnglesRightLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M75.888 85.291C69.982 78.729 59.857 78.197 53.295 84.104C46.746 90.041 46.23 100.135 52.107 106.729L186.474 256L52.107 405.271C46.511 411.502 46.377 421.625 53.295 427.896C59.857 433.803 69.982 433.271 75.888 426.709L219.898 266.719C225.367 260.594 225.367 251.406 219.898 245.281L75.888 85.291ZM411.898 245.281L267.888 85.291C261.982 78.729 251.857 78.197 245.295 84.104C238.746 90.041 238.23 100.135 244.107 106.729L378.474 256L244.107 405.271C238.511 411.502 238.377 421.625 245.295 427.896C251.857 433.803 261.982 433.271 267.888 426.709L411.898 266.719C417.367 260.594 417.367 251.406 411.898 245.281Z" })
  }
));
AnglesRightLight.displayName = "AnglesRightLight";
var AnglesRight_default = AnglesRightLight;
