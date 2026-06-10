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
var MessageSlash_exports = {};
__export(MessageSlash_exports, {
  default: () => MessageSlash_default
});
module.exports = __toCommonJS(MessageSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MessageSlashSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M63.999 351.972C63.999 387.219 92.749 415.967 127.999 415.967H223.998V499.96C223.998 509.709 235.248 515.459 243.123 509.709L367.997 415.967H407.37L63.999 146.857V351.972ZM630.811 469.105L548.053 404.247C564.823 392.779 575.996 373.781 575.996 351.972V63.995C575.996 28.748 547.247 0 511.997 0H127.999C104.485 0 83.938 12.821 72.841 31.81L38.814 5.142C34.407 1.705 29.189 0.033 24.032 0.033C16.907 0.033 9.845 3.189 5.126 9.22C-3.061 19.657 -1.249 34.749 9.189 42.92L601.186 506.883C611.686 515.086 626.748 513.211 634.873 502.805C643.061 492.369 641.248 477.276 630.811 469.105Z" })
  }
));
MessageSlashSolid.displayName = "MessageSlashSolid";
var MessageSlash_default = MessageSlashSolid;
