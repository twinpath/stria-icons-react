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
const InboxFullSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M508.285 304.918L447.031 56.25C443.469 42 430.688 32 416 32H96C81.312 32 68.531 42 64.969 56.25L3.715 304.918C1.248 314.936 0 325.215 0 335.533V432C0 458.51 21.49 480 48 480H464C490.51 480 512 458.51 512 432V335.533C512 325.215 510.754 314.936 508.285 304.918ZM384 288L352 352H160L128 288H72.975L121 96H391L439.025 288H384ZM368 224H144C135.164 224 128 231.164 128 240S135.164 256 144 256H368C376.838 256 384 248.836 384 240S376.838 224 368 224ZM176 176H336C344.838 176 352 168.836 352 160S344.838 144 336 144H176C167.164 144 160 151.164 160 160S167.164 176 176 176Z" })
  }
));
InboxFullSolid.displayName = "InboxFullSolid";
var InboxFull_default = InboxFullSolid;
