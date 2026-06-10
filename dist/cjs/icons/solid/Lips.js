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
var Lips_exports = {};
__export(Lips_exports, {
  default: () => Lips_default
});
module.exports = __toCommonJS(Lips_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LipsSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M568.017 201.664C521.554 124.598 419.628 64 375.976 64C375.976 64 346.615 64 288.001 109C229.388 64 200.025 64 200.025 64C156.374 64 54.447 124.598 7.984 201.664C-1.354 217.074 -2.479 235.859 4.495 252.398C29.697 312.25 105.861 448 251.325 448H324.675C470.14 448 546.304 312.25 571.505 252.398C578.48 235.859 577.355 217.074 568.017 201.664ZM288.005 320C138.708 320 64.005 224 64.005 224S120.005 192 204.005 192L234.958 200.875C251.474 205.5 269.63 208 288.005 208S324.536 205.5 341.052 200.875L372.005 192C456.005 192 512.005 224 512.005 224S437.302 320 288.005 320Z" })
  }
));
LipsSolid.displayName = "LipsSolid";
var Lips_default = LipsSolid;
