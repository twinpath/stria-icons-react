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
var ReplyAll_exports = {};
__export(ReplyAll_exports, {
  default: () => ReplyAll_default
});
module.exports = __toCommonJS(ReplyAll_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ReplyAllThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20.156 239.997L205.266 78.025C208.594 75.119 208.938 70.056 206.016 66.712C203.109 63.4 198.062 63.087 194.734 65.962L2.734 233.965C1 235.496 0 237.684 0 239.997C0 242.309 1 244.497 2.734 246.028L194.734 414.031C196.25 415.343 198.125 415.999 200 415.999C202.219 415.999 204.438 415.062 206.016 413.281C208.938 409.937 208.594 404.874 205.266 401.968L20.156 239.997ZM440 231.996H157.299L333.266 78.025C336.594 75.119 336.938 70.056 334.016 66.712C331.109 63.4 326.062 63.087 322.734 65.962L130.734 233.965C129 235.496 128 237.684 128 239.997C128 242.309 129 244.497 130.734 246.028L322.734 414.031C324.25 415.343 326.125 415.999 328 415.999C330.219 415.999 332.438 415.062 334.016 413.281C336.938 409.937 336.594 404.874 333.266 401.968L157.299 247.997H440C506.172 247.997 560 301.841 560 367.999V440C560 444.406 563.578 448 568 448S576 444.406 576 440V367.999C576 292.997 514.984 231.996 440 231.996Z" })
  }
));
ReplyAllThin.displayName = "ReplyAllThin";
var ReplyAll_default = ReplyAllThin;
