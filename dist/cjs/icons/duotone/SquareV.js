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
var SquareV_exports = {};
__export(SquareV_exports, {
  default: () => SquareV_default
});
module.exports = __toCommonJS(SquareV_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareVDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.348 480 448 451.346 448 416V96C448 60.654 419.348 32 384 32ZM349.469 162.734L245.469 370.734C241.406 378.859 233.094 384 224 384S206.594 378.859 202.531 370.734L98.531 162.734C92.609 150.875 97.406 136.469 109.266 130.531C121.188 124.641 135.547 129.406 141.469 141.266L224 306.328L306.531 141.266C312.469 129.406 326.875 124.641 338.734 130.531C350.594 136.469 355.391 150.875 349.469 162.734Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M338.74 130.531C326.881 124.641 312.474 129.406 306.537 141.266L224.006 306.328L141.474 141.266C135.552 129.406 121.193 124.641 109.271 130.531C97.412 136.469 92.615 150.875 98.537 162.734L202.537 370.734C206.599 378.859 214.912 384 224.006 384S241.412 378.859 245.474 370.734L349.474 162.734C355.396 150.875 350.599 136.469 338.74 130.531Z" })
    ]
  }
));
SquareVDuotone.displayName = "SquareVDuotone";
var SquareV_default = SquareVDuotone;
