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
var LeftToLine_exports = {};
__export(LeftToLine_exports, {
  default: () => LeftToLine_default
});
module.exports = __toCommonJS(LeftToLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LeftToLineSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M32 64H32C14.327 64 0 78.327 0 96V416C0 433.673 14.327 448 32 448H32C49.673 448 64 433.673 64 416V96C64 78.327 49.673 64 32 64ZM103.268 273.453L247.372 409.453C254.346 416.031 264.571 417.828 273.375 414.047C282.178 410.25 287.885 401.578 287.885 392V320H415.977C433.663 320 448 305.672 448 288V224C448 206.326 433.663 192 415.977 192H287.885V120C287.885 110.422 282.178 101.75 273.375 97.953C264.571 94.172 254.346 95.969 247.372 102.547L103.268 238.547C93.668 247.609 93.668 264.391 103.268 273.453Z" })
  }
));
LeftToLineSolid.displayName = "LeftToLineSolid";
var LeftToLine_default = LeftToLineSolid;
