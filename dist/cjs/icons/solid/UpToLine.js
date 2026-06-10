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
var UpToLine_exports = {};
__export(UpToLine_exports, {
  default: () => UpToLine_default
});
module.exports = __toCommonJS(UpToLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UpToLineSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M56 319.887H128V447.977C128 465.664 142.328 480 160 480H224C241.674 480 256 465.664 256 447.977V319.887H328C337.578 319.887 346.25 314.178 350.047 305.375C353.828 296.572 352.031 286.346 345.453 279.373L209.453 135.27C200.391 125.668 183.609 125.668 174.547 135.27L38.547 279.373C31.969 286.346 30.172 296.572 33.953 305.375C37.75 314.178 46.422 319.887 56 319.887ZM352 32H32C14.327 32 0 46.327 0 64V64C0 81.673 14.327 96 32 96H352C369.673 96 384 81.673 384 64V64C384 46.327 369.673 32 352 32Z" })
  }
));
UpToLineSolid.displayName = "UpToLineSolid";
var UpToLine_default = UpToLineSolid;
