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
var KeySkeleton_exports = {};
__export(KeySkeleton_exports, {
  default: () => KeySkeleton_default
});
module.exports = __toCommonJS(KeySkeleton_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const KeySkeletonSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 0H320C266.981 0 224 42.981 224 96V242.75L9.375 457.375C-3.125 469.875 -3.125 490.125 9.375 502.625C15.625 508.875 23.812 512 32 512S48.375 508.875 54.625 502.625L90.342 466.908L119.432 495.999C131.929 508.495 152.19 508.496 164.687 496L187.314 473.373C187.316 473.371 187.316 473.369 187.318 473.367L208 452.686C220.498 440.19 220.498 419.928 208.001 407.431L178.91 378.34L269.25 288H416C469.019 288 512 245.019 512 192V96C512 42.981 469.019 0 416 0ZM416 172.8C416 183.403 407.404 192 396.8 192H339.2C328.596 192 320 183.403 320 172.8V115.2C320 104.596 328.596 96 339.2 96H396.8C407.404 96 416 104.596 416 115.2V172.8Z" })
  }
));
KeySkeletonSolid.displayName = "KeySkeletonSolid";
var KeySkeleton_default = KeySkeletonSolid;
