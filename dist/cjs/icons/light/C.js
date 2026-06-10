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
var C_exports = {};
__export(C_exports, {
  default: () => C_default
});
module.exports = __toCommonJS(C_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M222.147 480C162.752 480 106.904 456.688 64.921 414.344C21.64 370.688 0 313.344 0 256C0 198.656 21.64 141.313 64.921 97.656C106.904 55.312 162.752 32 222.147 32C281.527 32 337.374 55.312 379.358 97.656C385.579 103.906 385.547 114.031 379.264 120.281C372.98 126.5 362.852 126.437 356.631 120.156C320.697 83.938 272.93 64 222.147 64C171.348 64 123.582 83.938 87.647 120.156C13.403 195.062 13.403 316.938 87.647 391.844C123.582 428.062 171.348 448 222.147 448C272.93 448 320.697 428.062 356.631 391.844C362.883 385.562 373.012 385.531 379.264 391.719C385.547 397.969 385.579 408.094 379.358 414.344C337.374 456.688 281.527 480 222.147 480Z" })
  }
));
CLight.displayName = "CLight";
var C_default = CLight;
