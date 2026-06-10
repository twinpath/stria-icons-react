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
var FireFlameSimple_exports = {};
__export(FireFlameSimple_exports, {
  default: () => FireFlameSimple_default
});
module.exports = __toCommonJS(FireFlameSimple_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FireFlameSimpleThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M197.391 0C194.328 -2.781 189.672 -2.781 186.609 0C73.25 103.345 0 219.941 0 297.02C0 422.366 78.953 509.914 192 509.914S384 422.366 384 297.02C384 220.019 310.75 103.439 197.391 0ZM104 389.553C104 352.412 139.125 293.395 192 241.082C244.875 293.442 280 352.458 280 389.553C280 450.991 243.812 493.914 192 493.914S104 450.991 104 389.553ZM264.072 479.017C284.051 457.665 296 426.673 296 389.553C296 346.443 257.344 281.504 197.531 224.128C194.438 221.16 189.563 221.16 186.469 224.128C126.656 281.457 88 346.38 88 389.553C88 426.673 99.949 457.665 119.928 479.017C56.363 450.583 16 383.564 16 297.02C16 226.535 86.484 114.533 192 16.781C297.516 114.627 368 226.628 368 297.02C368 383.564 327.637 450.583 264.072 479.017Z" })
  }
));
FireFlameSimpleThin.displayName = "FireFlameSimpleThin";
var FireFlameSimple_default = FireFlameSimpleThin;
