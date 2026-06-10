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
var Share_exports = {};
__export(Share_exports, {
  default: () => Share_default
});
module.exports = __toCommonJS(Share_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ShareThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M136 231.996H482.701L306.734 78.025C303.406 75.119 303.062 70.056 305.984 66.712C308.906 63.4 313.953 63.087 317.266 65.962L509.266 233.965C511 235.496 512 237.684 512 239.997C512 242.309 511 244.497 509.266 246.028L317.266 414.031C315.75 415.343 313.875 415.999 312 415.999C309.781 415.999 307.562 415.062 305.984 413.281C303.062 409.937 303.406 404.874 306.734 401.968L482.701 247.997H136C69.828 247.997 16 301.841 16 367.999V440C16 444.406 12.422 448 8 448S0 444.406 0 440V367.999C0 292.997 61.016 231.996 136 231.996Z" })
  }
));
ShareThin.displayName = "ShareThin";
var Share_default = ShareThin;
