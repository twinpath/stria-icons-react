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
var TemperatureEmpty_exports = {};
__export(TemperatureEmpty_exports, {
  default: () => TemperatureEmpty_default
});
module.exports = __toCommonJS(TemperatureEmpty_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TemperatureEmptySolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M272 278.5V112C272 50.125 221.875 0 160 0S48 50.125 48 112V278.5C28.25 303.25 16 334 16 368C16 447.5 80.5 512 160 512S304 447.5 304 368C304 334 291.75 303.125 272 278.5ZM160 448C115.875 448 80 412.125 80 368C80 342.5 92.25 319.125 112 304.25V112C112 85.5 133.5 64 160 64S208 85.5 208 112V304.25C227.75 319 240 342.5 240 368C240 412.125 204.125 448 160 448ZM160 320C133.49 320 112 341.49 112 368S133.49 416 160 416S208 394.51 208 368S186.51 320 160 320Z" })
  }
));
TemperatureEmptySolid.displayName = "TemperatureEmptySolid";
var TemperatureEmpty_default = TemperatureEmptySolid;
