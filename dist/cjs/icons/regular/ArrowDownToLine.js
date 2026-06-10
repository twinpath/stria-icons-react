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
var ArrowDownToLine_exports = {};
__export(ArrowDownToLine_exports, {
  default: () => ArrowDownToLine_default
});
module.exports = __toCommonJS(ArrowDownToLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowDownToLineRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M360 431.968H24C10.75 431.968 0 442.725 0 455.984C0 469.243 10.75 480 24 480H360C373.25 480 384 469.243 384 455.984C384 442.725 373.25 431.968 360 431.968ZM302.531 207.679L216 299.654V56.016C216 42.757 205.25 32 192 32S168 42.757 168 56.016V299.654L81.469 207.679C76.75 202.644 70.375 200.111 64 200.111C58.094 200.111 52.188 202.269 47.562 206.647C37.906 215.716 37.438 230.913 46.531 240.576L174.531 376.666C183.594 386.36 200.406 386.36 209.469 376.666L337.469 240.576C346.562 230.913 346.094 215.716 336.437 206.647C326.812 197.547 311.625 197.985 302.531 207.679Z" })
  }
));
ArrowDownToLineRegular.displayName = "ArrowDownToLineRegular";
var ArrowDownToLine_default = ArrowDownToLineRegular;
