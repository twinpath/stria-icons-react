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
const TemperatureEmptyDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M272 278.501V112.001C272 50.126 221.875 0.001 160 0.001S48 50.126 48 112.001V278.501C28.25 303.251 16 334.001 16 368.001C16 447.501 80.5 512.001 160 512.001S304 447.501 304 368.001C304 334.001 291.75 303.126 272 278.501ZM160 448.001C115.875 448.001 80 412.126 80 368.001C80 342.501 92.25 319.126 112 304.251V112.001C112 85.501 133.5 64.001 160 64.001S208 85.501 208 112.001V304.251C227.75 319.001 240 342.501 240 368.001C240 412.126 204.125 448.001 160 448.001Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M160 320.001C133.49 320.001 112 341.491 112 368.001S133.49 416.001 160 416.001S208 394.51 208 368.001S186.51 320.001 160 320.001Z" })
    ]
  }
));
TemperatureEmptyDuotone.displayName = "TemperatureEmptyDuotone";
var TemperatureEmpty_default = TemperatureEmptyDuotone;
