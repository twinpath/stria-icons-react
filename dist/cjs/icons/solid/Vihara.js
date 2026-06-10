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
var Vihara_exports = {};
__export(Vihara_exports, {
  default: () => Vihara_default
});
module.exports = __toCommonJS(Vihara_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ViharaSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M632.866 400.75L543.993 352V288L599.116 270.25C610.991 264.375 610.991 247.625 599.116 241.75L479.995 192V128L507.245 111.75C514.995 104 512.87 91 503.12 86.125L320 0L136.881 86.125C127.131 91 125.006 104 132.756 111.75L160.006 128V192L40.885 241.75C29.01 247.625 29.01 264.375 40.885 270.25L96.008 288V352L7.135 400.75C1.76 404.375 -0.615 410.375 0.135 416C0.76 421 3.76 425.75 8.885 428.375L64.008 448V496C64.008 504.875 71.133 512 80.008 512H112.006C120.881 512 128.006 504.875 128.006 496V448H288.002V496C288.002 504.875 295.125 512 304 512H336C344.875 512 351.998 504.875 351.998 496V448H511.995V496C511.995 504.875 519.12 512 527.995 512H559.993C568.868 512 575.993 504.875 575.993 496V448L631.116 428.375C636.241 425.75 639.241 421 639.866 416C640.616 410.375 638.241 404.375 632.866 400.75ZM224.004 128H415.997V192H224.004V128ZM479.995 352H160.006V288H479.995V352Z" })
  }
));
ViharaSolid.displayName = "ViharaSolid";
var Vihara_default = ViharaSolid;
