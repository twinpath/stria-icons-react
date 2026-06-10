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
var DownToLine_exports = {};
__export(DownToLine_exports, {
  default: () => DownToLine_default
});
module.exports = __toCommonJS(DownToLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DownToLineSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352 416H32C14.327 416 0 430.327 0 448V448C0 465.673 14.327 480 32 480H352C369.673 480 384 465.673 384 448V448C384 430.327 369.673 416 352 416ZM328 192.114H256V64.023C256 46.336 241.672 32 224 32H160C142.326 32 128 46.336 128 64.023V192.114H56C46.422 192.114 37.75 197.822 33.953 206.625C30.172 215.428 31.969 225.654 38.547 232.628L174.547 376.731C183.609 386.331 200.391 386.331 209.453 376.731L345.453 232.628C352.031 225.654 353.828 215.428 350.047 206.625C346.25 197.822 337.578 192.114 328 192.114Z" })
  }
));
DownToLineSolid.displayName = "DownToLineSolid";
var DownToLine_default = DownToLineSolid;
