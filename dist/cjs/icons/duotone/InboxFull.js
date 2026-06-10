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
var InboxFull_exports = {};
__export(InboxFull_exports, {
  default: () => InboxFull_default
});
module.exports = __toCommonJS(InboxFull_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const InboxFullDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M391.025 96H121.025L73 288H128.025L160.025 352H352.025L384.025 288H439.051L391.025 96ZM176.025 144H336.025C344.861 144 352.025 151.162 352.025 160C352.025 168.836 344.861 176 336.025 176H176.025C167.189 176 160.025 168.836 160.025 160C160.025 151.162 167.189 144 176.025 144ZM368.025 256H144.025C135.189 256 128.025 248.836 128.025 240C128.025 231.162 135.189 224 144.025 224H368.025C376.861 224 384.025 231.162 384.025 240C384.025 248.836 376.861 256 368.025 256Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M447.031 56.25C443.469 42 430.688 32 416 32H96C81.312 32 68.531 42 64.969 56.25L3.715 304.918C1.247 314.936 0 325.215 0 335.533V432C0 458.51 21.49 480 48 480H464C490.51 480 512 458.51 512 432V335.533C512 325.215 510.753 314.936 508.285 304.918L447.031 56.25ZM352 352H160L128 288H72.975L121 96H391L439.025 288H384L352 352Z" })
    ]
  }
));
InboxFullDuotone.displayName = "InboxFullDuotone";
var InboxFull_default = InboxFullDuotone;
