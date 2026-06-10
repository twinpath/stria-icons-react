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
var MessageCaptions_exports = {};
__export(MessageCaptions_exports, {
  default: () => MessageCaptions_default
});
module.exports = __toCommonJS(MessageCaptions_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MessageCaptionsLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 0H64C28.75 0 0 28.75 0 64V352.002C0 387.252 28.75 416.002 64 416.002H160V500.002C160 509.84 171.025 515.479 179.125 509.627L304 416.002H448C483.25 416.002 512 387.252 512 352.002V64C512 28.75 483.25 0 448 0ZM480 352.002C480 369.602 465.6 384.002 448 384.002H303.924C296.996 384.002 290.254 386.25 284.713 390.408L192 460.002V400.002C192 391.164 184.836 384.002 176 384.002H64C46.4 384.002 32 369.602 32 352.002V64C32 46.4 46.4 32 64 32H448C465.6 32 480 46.4 480 64V352.002ZM432 224H272C263.156 224 256 231.156 256 240S263.156 256 272 256H432C440.844 256 448 248.844 448 240S440.844 224 432 224ZM224 240C224 231.156 216.844 224 208 224H80C71.156 224 64 231.156 64 240S71.156 256 80 256H208C216.844 256 224 248.844 224 240ZM144 288H112C103.156 288 96 295.156 96 304S103.156 320 112 320H144C152.844 320 160 312.844 160 304S152.844 288 144 288ZM400 288H368C359.156 288 352 295.156 352 304S359.156 320 368 320H400C408.844 320 416 312.844 416 304S408.844 288 400 288ZM304 288H208C199.156 288 192 295.156 192 304S199.156 320 208 320H304C312.844 320 320 312.844 320 304S312.844 288 304 288Z" })
  }
));
MessageCaptionsLight.displayName = "MessageCaptionsLight";
var MessageCaptions_default = MessageCaptionsLight;
