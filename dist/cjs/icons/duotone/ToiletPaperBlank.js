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
var ToiletPaperBlank_exports = {};
__export(ToiletPaperBlank_exports, {
  default: () => ToiletPaperBlank_default
});
module.exports = __toCommonJS(ToiletPaperBlank_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ToiletPaperBlankDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M479.997 0H127.981C74.979 0 31.977 86 31.977 192V364.125C31.977 405.25 22.227 426.875 0.85 491C-2.65 501.25 5.1 512 15.977 512H328.874C342.749 512 354.874 503.25 359.249 490.125C372.126 451.625 384.001 417.75 384.001 364.125V192.309C384.001 192.205 383.993 192.104 383.993 192C383.993 86 426.995 0 479.997 0Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M479.586 0C426.584 0 383.582 86 383.582 192C383.582 192.104 383.59 192.205 383.59 192.309V364.125C383.59 371.072 383.375 377.662 383 384H479.59C532.59 383.996 575.59 297.998 575.59 192C575.59 86 532.588 0 479.586 0ZM479.586 256C461.959 256 447.584 227.375 447.584 192S461.959 128 479.586 128C497.211 128 511.588 156.625 511.588 192S497.211 256 479.586 256Z" })
    ]
  }
));
ToiletPaperBlankDuotone.displayName = "ToiletPaperBlankDuotone";
var ToiletPaperBlank_default = ToiletPaperBlankDuotone;
