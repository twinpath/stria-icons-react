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
var Reply_exports = {};
__export(Reply_exports, {
  default: () => Reply_default
});
module.exports = __toCommonJS(Reply_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ReplyThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 367.999V440C512 444.406 508.422 448 504 448S496 444.406 496 440V367.999C496 301.841 442.172 247.997 376 247.997H29.299L205.266 401.968C208.594 404.874 208.938 409.937 206.016 413.281C204.438 415.062 202.219 415.999 200 415.999C198.125 415.999 196.25 415.343 194.734 414.031L2.734 246.028C1 244.497 0 242.309 0 239.997C0 237.684 1 235.496 2.734 233.965L194.734 65.962C198.047 63.087 203.094 63.4 206.016 66.712C208.938 70.056 208.594 75.119 205.266 78.025L29.299 231.996H376C450.984 231.996 512 292.997 512 367.999Z" })
  }
));
ReplyThin.displayName = "ReplyThin";
var Reply_default = ReplyThin;
