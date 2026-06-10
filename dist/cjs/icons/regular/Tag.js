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
var Tag_exports = {};
__export(Tag_exports, {
  default: () => Tag_default
});
module.exports = __toCommonJS(Tag_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TagRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M426.363 211.909L268.132 53.674C255.568 41.11 233.566 32 215.815 32H49.004C21.986 32 0 53.987 0 81.005V247.819C0 265.571 9.11 287.574 21.674 300.137L179.89 458.388C194.329 472.796 213.268 480 232.222 480C251.177 480 270.132 472.796 284.555 458.373L426.379 316.577C455.21 287.714 455.21 240.772 426.363 211.909ZM392.423 282.636L250.615 424.416C240.489 434.573 223.956 434.558 213.83 424.432L55.614 266.196C52.051 262.634 48.004 252.851 48.004 247.819V81.005L49.004 80.005H215.815C220.846 80.005 230.628 84.052 234.191 87.615L392.408 245.85C402.549 255.992 402.549 272.494 392.423 282.636ZM136.011 144.012C136.011 157.271 125.26 168.014 112.009 168.014S88.007 157.271 88.007 144.012S98.758 120.009 112.009 120.009S136.011 130.753 136.011 144.012Z" })
  }
));
TagRegular.displayName = "TagRegular";
var Tag_default = TagRegular;
