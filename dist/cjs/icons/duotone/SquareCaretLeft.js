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
var SquareCaretLeft_exports = {};
__export(SquareCaretLeft_exports, {
  default: () => SquareCaretLeft_default
});
module.exports = __toCommonJS(SquareCaretLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareCaretLeftDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64C28.654 32 0 60.652 0 96V416C0 451.344 28.654 480 64 480H384C419.346 480 448 451.344 448 416V96C448 60.652 419.346 32 384 32ZM288 360C288 369.531 282.344 378.188 273.594 382C270.5 383.344 267.25 384 264 384C258.062 384 252.188 381.781 247.656 377.594L135.656 273.594C130.781 269.031 128 262.688 128 256S130.781 242.969 135.656 238.406L247.656 134.406C254.688 127.938 264.875 126.25 273.594 130C282.344 133.812 288 142.469 288 152V360Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288 360C288 369.531 282.344 378.188 273.594 382C270.5 383.344 267.25 384 264 384C258.062 384 252.188 381.781 247.656 377.594L135.656 273.594C130.781 269.031 128 262.688 128 256S130.781 242.969 135.656 238.406L247.656 134.406C254.688 127.938 264.875 126.25 273.594 130C282.344 133.812 288 142.469 288 152V360Z" })
    ]
  }
));
SquareCaretLeftDuotone.displayName = "SquareCaretLeftDuotone";
var SquareCaretLeft_default = SquareCaretLeftDuotone;
