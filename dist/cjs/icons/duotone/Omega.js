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
var Omega_exports = {};
__export(Omega_exports, {
  default: () => Omega_default
});
module.exports = __toCommonJS(Omega_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const OmegaDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 440C448 462.094 430.094 480 408 480H296C273.906 480 256 462.094 256 440V407.562C256 391.844 265.219 377.562 279.547 371.094C328.422 349.062 360 300.719 360 248C360 173 298.984 112 224 112S88 173 88 248C88 300.719 119.578 349.062 168.453 371.094C182.781 377.562 192 391.844 192 407.562V440C192 462.094 174.094 480 152 480H40C17.906 480 0 462.094 0 440S17.906 400 40 400H71.625C31.656 360.25 8 305.812 8 248C8 128.906 104.891 32 224 32S440 128.906 440 248C440 305.812 416.344 360.25 376.375 400H408C430.094 400 448 417.906 448 440Z", className: "stria-secondary", style: { opacity: 0.4 } })
  }
));
OmegaDuotone.displayName = "OmegaDuotone";
var Omega_default = OmegaDuotone;
