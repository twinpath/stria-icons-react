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
var ClipboardCheck_exports = {};
__export(ClipboardCheck_exports, {
  default: () => ClipboardCheck_default
});
module.exports = __toCommonJS(ClipboardCheck_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ClipboardCheckSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M336 64H282.121C268.896 26.797 233.738 0 192 0S115.104 26.797 101.879 64H48C21.5 64 0 85.484 0 112V464C0 490.516 21.5 512 48 512H336C362.5 512 384 490.516 384 464V112C384 85.484 362.5 64 336 64ZM192 64C209.674 64 224 78.328 224 96S209.674 128 192 128S160 113.672 160 96S174.326 64 192 64ZM282.875 262.812L194.875 374.812C190.828 379.969 184.859 383.25 178.344 383.875C177.562 383.969 176.781 384 176 384C170.297 384 164.75 381.969 160.375 378.219L104.375 330.219C94.313 321.594 93.156 306.437 101.781 296.375C110.391 286.312 125.547 285.156 135.625 293.781L172.609 325.469L245.125 233.187C253.313 222.75 268.422 220.969 278.828 229.125C289.25 237.312 291.062 252.406 282.875 262.812Z" })
  }
));
ClipboardCheckSolid.displayName = "ClipboardCheckSolid";
var ClipboardCheck_default = ClipboardCheckSolid;
