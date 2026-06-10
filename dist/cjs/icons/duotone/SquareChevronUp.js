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
var SquareChevronUp_exports = {};
__export(SquareChevronUp_exports, {
  default: () => SquareChevronUp_default
});
module.exports = __toCommonJS(SquareChevronUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareChevronUpDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64C28.656 32 0 60.656 0 96V416C0 451.348 28.656 480 64 480H384C419.344 480 448 451.348 448 416V96C448 60.656 419.344 32 384 32ZM358.625 326.625C346.125 339.125 325.875 339.125 313.375 326.625L224 237.25L134.625 326.625C122.125 339.125 101.875 339.125 89.375 326.625S76.875 293.875 89.375 281.375L201.375 169.375C207.625 163.125 215.812 160 224 160S240.375 163.125 246.625 169.375L358.625 281.375C371.125 293.875 371.125 314.125 358.625 326.625Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M358.625 326.625C346.125 339.125 325.875 339.125 313.375 326.625L224 237.25L134.625 326.625C122.125 339.125 101.875 339.125 89.375 326.625S76.875 293.875 89.375 281.375L201.375 169.375C207.625 163.125 215.813 160 224 160S240.375 163.125 246.625 169.375L358.625 281.375C371.125 293.875 371.125 314.125 358.625 326.625Z" })
    ]
  }
));
SquareChevronUpDuotone.displayName = "SquareChevronUpDuotone";
var SquareChevronUp_default = SquareChevronUpDuotone;
