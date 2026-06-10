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
const MessageCaptionsThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 0H64C28.75 0 0 28.748 0 63.995V351.972C0 387.219 28.75 415.967 64 415.967H160V499.96C160 507.032 165.92 512 172.178 512C174.547 512 176.963 511.287 179.125 509.709L304 415.967H448C483.25 415.967 512 387.219 512 351.972V63.995C512 28.748 483.25 0 448 0ZM496 351.972C496 378.436 474.467 399.968 448 399.968H298.662L294.395 403.173L176 492.052V399.968H64C37.533 399.968 16 378.436 16 351.972V63.995C16 37.53 37.533 15.999 64 15.999H448C474.467 15.999 496 37.53 496 63.995V351.972ZM224 247.98C224 243.574 220.406 239.981 216 239.981H72C67.594 239.981 64 243.574 64 247.98S67.594 255.979 72 255.979H216C220.406 255.979 224 252.386 224 247.98ZM440 239.981H264C259.594 239.981 256 243.574 256 247.98S259.594 255.979 264 255.979H440C444.406 255.979 448 252.386 448 247.98S444.406 239.981 440 239.981ZM152 303.976H72C67.594 303.976 64 307.569 64 311.975C64 316.381 67.594 319.974 72 319.974H152C156.406 319.974 160 316.381 160 311.975C160 307.569 156.406 303.976 152 303.976ZM440 303.976H360C355.594 303.976 352 307.569 352 311.975C352 316.381 355.594 319.974 360 319.974H440C444.406 319.974 448 316.381 448 311.975C448 307.569 444.406 303.976 440 303.976ZM312 303.976H200C195.594 303.976 192 307.569 192 311.975C192 316.381 195.594 319.974 200 319.974H312C316.406 319.974 320 316.381 320 311.975C320 307.569 316.406 303.976 312 303.976Z" })
  }
));
MessageCaptionsThin.displayName = "MessageCaptionsThin";
var MessageCaptions_default = MessageCaptionsThin;
