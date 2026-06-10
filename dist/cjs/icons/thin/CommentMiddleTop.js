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
var CommentMiddleTop_exports = {};
__export(CommentMiddleTop_exports, {
  default: () => CommentMiddleTop_default
});
module.exports = __toCommonJS(CommentMiddleTop_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CommentMiddleTopThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M323.162 103.475L274.275 10.084C270.758 3.361 263.379 0 256 0S241.242 3.361 237.725 10.084L188.838 103.475C80.076 127.467 0 208.012 0 304C0 418.906 114.594 512 256 512S512 418.906 512 304C512 208.012 431.924 127.467 323.162 103.475ZM256 496C123.664 496 16 409.869 16 304C16 285.732 22.604 156.553 199.559 117.494L251.9 17.504C252.287 16.764 253.926 16 256 16S259.713 16.764 260.1 17.504L312.441 117.494C489.396 156.553 496 285.732 496 304C496 409.869 388.336 496 256 496Z " })
  }
));
CommentMiddleTopThin.displayName = "CommentMiddleTopThin";
var CommentMiddleTop_default = CommentMiddleTopThin;
