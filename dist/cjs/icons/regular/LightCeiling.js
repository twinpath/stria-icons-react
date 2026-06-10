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
var LightCeiling_exports = {};
__export(LightCeiling_exports, {
  default: () => LightCeiling_default
});
module.exports = __toCommonJS(LightCeiling_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LightCeilingRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320.023 448H192.002C192.002 483.375 220.632 512 256.013 512S320.023 483.375 320.023 448ZM0.345 379.625C-2.531 398.75 12.972 416 32.475 416H479.55C499.053 416 514.431 398.75 511.681 379.625C495.053 263.25 399.287 172 280.017 161.125V24C280.017 10.745 269.27 0 256.013 0H256.013C242.756 0 232.009 10.745 232.009 24V161.125C112.739 172 16.972 263.25 0.345 379.625ZM51.353 368C73.482 275.625 158.371 208 256.013 208S438.543 275.625 460.672 368H51.353Z" })
  }
));
LightCeilingRegular.displayName = "LightCeilingRegular";
var LightCeiling_default = LightCeilingRegular;
