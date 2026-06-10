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
const SquareChevronUpRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M64 480H384C419.346 480 448 451.344 448 416V96C448 60.656 419.346 32 384 32H64C28.654 32 0 60.656 0 96V416C0 451.344 28.654 480 64 480ZM48 96C48 87.18 55.178 80 64 80H384C392.822 80 400 87.18 400 96V416C400 424.82 392.822 432 384 432H64C55.178 432 48 424.82 48 416V96ZM128.969 304.969L224 209.938L319.031 304.969C328.406 314.344 343.594 314.344 352.969 304.969S362.344 280.406 352.969 271.031L240.969 159.031C236.281 154.344 230.156 152 224 152S211.719 154.344 207.031 159.031L95.031 271.031C85.656 280.406 85.656 295.594 95.031 304.969S119.594 314.344 128.969 304.969Z" })
  }
));
SquareChevronUpRegular.displayName = "SquareChevronUpRegular";
var SquareChevronUp_default = SquareChevronUpRegular;
