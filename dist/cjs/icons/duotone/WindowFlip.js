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
var WindowFlip_exports = {};
__export(WindowFlip_exports, {
  default: () => WindowFlip_default
});
module.exports = __toCommonJS(WindowFlip_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WindowFlipDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 224V416C0 451.346 28.654 480 64 480H448C483.346 480 512 451.346 512 416V224H0ZM416 160C433.75 160 448 145.75 448 128S433.75 96 416 96S384 110.25 384 128S398.25 160 416 160ZM320 160C337.75 160 352 145.75 352 128S337.75 96 320 96S288 110.25 288 128S302.25 160 320 160Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 224V96C512 60.654 483.346 32 448 32H64C28.654 32 0 60.654 0 96V224H512ZM416 96C433.75 96 448 110.25 448 128S433.75 160 416 160S384 145.75 384 128S398.25 96 416 96ZM320 96C337.75 96 352 110.25 352 128S337.75 160 320 160S288 145.75 288 128S302.25 96 320 96ZM224 96C241.75 96 256 110.25 256 128S241.75 160 224 160S192 145.75 192 128S206.25 96 224 96Z" })
    ]
  }
));
WindowFlipDuotone.displayName = "WindowFlipDuotone";
var WindowFlip_default = WindowFlipDuotone;
