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
var CommentMiddle_exports = {};
__export(CommentMiddle_exports, {
  default: () => CommentMiddle_default
});
module.exports = __toCommonJS(CommentMiddle_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CommentMiddleThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 0C114.594 0 0 93.094 0 208C0 303.988 80.076 384.533 188.838 408.525L237.725 501.916C241.242 508.639 248.621 512 256 512S270.758 508.639 274.275 501.916L323.162 408.525C431.924 384.533 512 303.988 512 208C512 93.094 397.406 0 256 0ZM312.441 394.506L260.1 494.496C259.713 495.236 258.074 496 256 496S252.287 495.236 251.9 494.496L199.559 394.506C22.604 355.447 16 226.268 16 208C16 102.131 123.664 16 256 16S496 102.131 496 208C496 226.268 489.396 355.447 312.441 394.506Z" })
  }
));
CommentMiddleThin.displayName = "CommentMiddleThin";
var CommentMiddle_default = CommentMiddleThin;
