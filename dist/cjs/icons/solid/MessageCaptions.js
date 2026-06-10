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
const MessageCaptionsSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 0H64C28.75 0 0 28.748 0 63.994V351.971C0 387.219 28.75 415.967 64 415.967H160V499.959C160 509.709 171.25 515.459 179.125 509.709L304 415.967H448C483.25 415.967 512 387.219 512 351.971V63.994C512 28.748 483.25 0 448 0ZM135.994 320H119.996C106.748 320 96 309.25 96 296S106.748 272 119.996 272H135.994C149.242 272 159.992 282.75 159.992 296S149.242 320 135.994 320ZM119.996 240C106.748 240 96 229.25 96 216S106.748 192 119.996 192H215.984C229.232 192 239.98 202.75 239.98 216S229.232 240 215.984 240H119.996ZM295.973 320H215.984C202.736 320 191.986 309.25 191.986 296S202.736 272 215.984 272H295.973C309.221 272 319.971 282.75 319.971 296S309.221 320 295.973 320ZM391.961 320H375.963C362.715 320 351.967 309.25 351.967 296S362.715 272 375.963 272H391.961C405.209 272 415.957 282.75 415.957 296S405.209 320 391.961 320ZM391.961 240H295.973C282.725 240 271.977 229.25 271.977 216S282.725 192 295.973 192H391.961C405.209 192 415.957 202.75 415.957 216S405.209 240 391.961 240Z" })
  }
));
MessageCaptionsSolid.displayName = "MessageCaptionsSolid";
var MessageCaptions_default = MessageCaptionsSolid;
