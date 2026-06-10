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
var LiraSign_exports = {};
__export(LiraSign_exports, {
  default: () => LiraSign_default
});
module.exports = __toCommonJS(LiraSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LiraSignDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 320C0 337.688 14.312 352 32 352H40.9C45.195 336.779 48 321.119 48 305.156V288H32C14.312 288 0 302.312 0 320ZM256 224C256 206.312 241.688 192 224 192H128V256H224C241.688 256 256 241.688 256 224ZM224 288H128V305.156C128 320.936 126.439 336.613 123.531 352H224C241.688 352 256 337.688 256 320S241.688 288 224 288ZM0 224C0 241.688 14.312 256 32 256H48V192H32C14.312 192 0 206.312 0 224Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M319.993 440C319.993 462.094 302.086 480 279.993 480H39.993C24.555 480 10.493 471.125 3.868 457.156C-2.757 443.219 -0.757 426.719 8.993 414.75C34.149 383.844 47.993 344.938 47.993 305.156V161.438C47.993 90.062 106.055 32 177.43 32C191.399 32 205.211 34.25 218.493 38.688L292.68 63.5C313.618 70.5 324.93 93.188 317.93 114.125S288.399 146.406 267.305 139.375L193.118 114.562C188.055 112.875 182.774 112 177.43 112C150.18 112 127.993 134.188 127.993 161.438V305.156C127.993 337.781 121.618 370.031 109.524 400H279.993C302.086 400 319.993 417.906 319.993 440Z" })
    ]
  }
));
LiraSignDuotone.displayName = "LiraSignDuotone";
var LiraSign_default = LiraSignDuotone;
