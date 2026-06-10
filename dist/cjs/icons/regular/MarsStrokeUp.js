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
var MarsStrokeUp_exports = {};
__export(MarsStrokeUp_exports, {
  default: () => MarsStrokeUp_default
});
module.exports = __toCommonJS(MarsStrokeUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MarsStrokeUpRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M216 157.007V147.183H248C261.25 147.183 272 136.433 272 123.184S261.25 99.184 248 99.184H216V67.182L241.594 86.372C245.922 89.622 250.969 91.185 255.984 91.185C263.281 91.185 270.484 87.872 275.203 81.591C283.156 70.967 281 55.936 270.406 47.999L206.406 0C197.875 -6.437 186.125 -6.437 177.594 0L113.594 47.999C103 55.936 100.844 70.967 108.797 81.591C116.766 92.216 131.812 94.372 142.406 86.372L168 67.182V99.184H136C122.75 99.184 112 109.934 112 123.184S122.75 147.183 136 147.183H168V157.007C82.182 168.739 16 242.141 16 331.177C16 428.376 94.799 507.172 192 507.172C289.203 507.172 368 428.376 368 331.177C368 242.141 301.818 168.737 216 157.007ZM192 459.173C121.42 459.173 64 401.755 64 331.177S121.42 203.181 192 203.181S320 260.599 320 331.177S262.58 459.173 192 459.173Z" })
  }
));
MarsStrokeUpRegular.displayName = "MarsStrokeUpRegular";
var MarsStrokeUp_default = MarsStrokeUpRegular;
