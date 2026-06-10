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
var SquareD_exports = {};
__export(SquareD_exports, {
  default: () => SquareD_default
});
module.exports = __toCommonJS(SquareD_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareDDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M304 256C304 300.125 267.391 336 222.406 336H176V176H222.406C267.391 176 304 211.891 304 256ZM448 96V416C448 451.346 419.348 480 384 480H64C28.654 480 0 451.346 0 416V96C0 60.654 28.654 32 64 32H384C419.348 32 448 60.654 448 96ZM352 256C352 185.422 293.859 128 222.406 128H152C138.75 128 128 138.75 128 152V360C128 373.25 138.75 384 152 384H222.406C293.859 384 352 326.594 352 256Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M222.406 128H152C138.75 128 128 138.75 128 152V360C128 373.25 138.75 384 152 384H222.406C293.859 384 352 326.594 352 256C352 185.422 293.859 128 222.406 128ZM222.406 336H176V176H222.406C267.391 176 304 211.891 304 256C304 300.125 267.391 336 222.406 336Z" })
    ]
  }
));
SquareDDuotone.displayName = "SquareDDuotone";
var SquareD_default = SquareDDuotone;
