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
var SquareChevronDown_exports = {};
__export(SquareChevronDown_exports, {
  default: () => SquareChevronDown_default
});
module.exports = __toCommonJS(SquareChevronDown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareChevronDownDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64C28.656 32 0 60.652 0 96V416C0 451.344 28.656 480 64 480H384C419.344 480 448 451.344 448 416V96C448 60.652 419.344 32 384 32ZM358.625 230.625L246.625 342.625C240.375 348.875 232.188 352 224 352S207.625 348.875 201.375 342.625L89.375 230.625C76.875 218.125 76.875 197.875 89.375 185.375S122.125 172.875 134.625 185.375L224 274.75L313.375 185.375C325.875 172.875 346.125 172.875 358.625 185.375S371.125 218.125 358.625 230.625Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M358.625 230.625L246.625 342.625C240.375 348.875 232.187 352 224 352S207.625 348.875 201.375 342.625L89.375 230.625C76.875 218.125 76.875 197.875 89.375 185.375S122.125 172.875 134.625 185.375L224 274.75L313.375 185.375C325.875 172.875 346.125 172.875 358.625 185.375S371.125 218.125 358.625 230.625Z" })
    ]
  }
));
SquareChevronDownDuotone.displayName = "SquareChevronDownDuotone";
var SquareChevronDown_default = SquareChevronDownDuotone;
