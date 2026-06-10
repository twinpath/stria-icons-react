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
var PlayPause_exports = {};
__export(PlayPause_exports, {
  default: () => PlayPause_default
});
module.exports = __toCommonJS(PlayPause_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PlayPauseSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M52.508 71.406C31.879 54.283 0 68.656 0 96.027V415.973C0 443.344 31.879 457.715 52.508 440.594L244.531 280.621C259.781 267.748 259.781 244.252 244.531 231.379L52.508 71.406ZM352 64H351.969C334.297 64 319.969 78.326 319.969 96V416C319.969 433.672 334.297 448 351.969 448H352C369.674 448 384 433.672 384 416V96C384 78.326 369.674 64 352 64ZM480 64H479.969C462.297 64 447.969 78.326 447.969 96V416C447.969 433.672 462.297 448 479.969 448H480C497.674 448 512 433.672 512 416V96C512 78.326 497.674 64 480 64Z" })
  }
));
PlayPauseSolid.displayName = "PlayPauseSolid";
var PlayPause_default = PlayPauseSolid;
