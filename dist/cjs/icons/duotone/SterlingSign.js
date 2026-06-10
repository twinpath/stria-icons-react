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
var SterlingSign_exports = {};
__export(SterlingSign_exports, {
  default: () => SterlingSign_default
});
module.exports = __toCommonJS(SterlingSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SterlingSignDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224 224H128V288H224C241.688 288 256 273.672 256 256S241.688 224 224 224ZM0 256C0 273.672 14.312 288 32 288H48V224H32C14.312 224 0 238.328 0 256Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M279.991 480H39.992C24.555 480 10.493 471.125 3.868 457.156C-2.757 443.219 -0.757 426.719 8.993 414.75C34.149 383.844 47.992 344.938 47.992 305.156V161.438C47.992 90.062 106.054 32 177.429 32C191.398 32 205.21 34.25 218.491 38.688L292.678 63.5C313.616 70.516 324.928 93.172 317.928 114.125C310.928 135.047 288.397 146.375 267.303 139.375L193.116 114.562C188.054 112.859 182.773 112 177.429 112C150.179 112 127.992 134.172 127.992 161.438V305.156C127.992 337.781 121.617 370.016 109.523 400H279.991C302.084 400 319.99 417.906 319.99 440S302.084 480 279.991 480Z" })
    ]
  }
));
SterlingSignDuotone.displayName = "SterlingSignDuotone";
var SterlingSign_default = SterlingSignDuotone;
