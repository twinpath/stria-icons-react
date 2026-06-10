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
const LightCeilingLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M271.929 160.75V16C271.929 7.164 264.763 0 255.923 0S239.918 7.164 239.918 16V160.75C117.394 168.225 17.855 260.018 0.363 378.451C-2.547 398.156 12.402 416 32.33 416H479.517C499.025 416 514.531 398.875 511.656 379.625C494.648 260.625 394.857 168.25 271.929 160.75ZM31.83 384.125C47.586 274.625 143.877 192 255.923 192S464.261 274.625 479.517 384L31.83 384.125ZM324.109 432.531C315.64 430.219 306.797 435.344 304.531 443.906C298.89 465.156 278.937 480 256 480S213.109 465.156 207.468 443.906C205.187 435.344 196.422 430.219 187.89 432.531C179.359 434.812 174.265 443.562 176.531 452.094C185.906 487.375 218.578 512 256 512S326.093 487.375 335.468 452.094C337.734 443.562 332.64 434.812 324.109 432.531Z" })
  }
));
LightCeilingLight.displayName = "LightCeilingLight";
var LightCeiling_default = LightCeilingLight;
