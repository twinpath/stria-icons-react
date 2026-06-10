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
var ArrowLeftToLine_exports = {};
__export(ArrowLeftToLine_exports, {
  default: () => ArrowLeftToLine_default
});
module.exports = __toCommonJS(ArrowLeftToLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowLeftToLineDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M32 64C14.312 64 0 78.312 0 96V416C0 433.688 14.312 448 32 448S64 433.688 64 416V96C64 78.312 49.688 64 32 64Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M310.625 150.625L237.25 224H416C433.688 224 448 238.312 448 256S433.688 288 416 288H237.25L310.625 361.375C316.875 367.625 320 375.812 320 384S316.875 400.375 310.625 406.625C298.125 419.125 277.875 419.125 265.375 406.625L137.375 278.625C124.875 266.125 124.875 245.875 137.375 233.375L265.375 105.375C277.875 92.875 298.125 92.875 310.625 105.375S323.125 138.125 310.625 150.625Z" })
    ]
  }
));
ArrowLeftToLineDuotone.displayName = "ArrowLeftToLineDuotone";
var ArrowLeftToLine_default = ArrowLeftToLineDuotone;
