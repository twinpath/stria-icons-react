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
var CircleInfo_exports = {};
__export(CircleInfo_exports, {
  default: () => CircleInfo_default
});
module.exports = __toCommonJS(CircleInfo_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleInfoThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.449 16 16 123.42 16 256C16 388.49 123.449 496 256 496S496 388.49 496 256C496 123.42 388.551 16 256 16ZM256 480C132.484 480 32 379.514 32 256S132.484 32 256 32S480 132.486 480 256S379.516 480 256 480ZM255.918 176C264.74 176 271.918 168.822 271.918 160S264.74 144 255.918 144S239.918 151.178 239.918 160S247.096 176 255.918 176ZM288 352H263.98V216.047C263.98 216.029 264 216.018 264 216C264 211.594 260.406 208 256 208H224C219.594 208 216 211.594 216 216S219.594 224 224 224H247.98V352H224C219.594 352 216 355.594 216 360S219.594 368 224 368H288C292.406 368 296 364.406 296 360S292.406 352 288 352Z" })
  }
));
CircleInfoThin.displayName = "CircleInfoThin";
var CircleInfo_default = CircleInfoThin;
