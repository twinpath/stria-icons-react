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
const MessageCaptionsRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M135.994 272H119.996C106.748 272 96 282.75 96 296S106.748 320 119.996 320H135.994C149.242 320 159.992 309.25 159.992 296S149.242 272 135.994 272ZM295.973 272H215.984C202.736 272 191.986 282.75 191.986 296S202.736 320 215.984 320H295.973C309.221 320 319.971 309.25 319.971 296S309.221 272 295.973 272ZM119.996 240H215.984C229.232 240 239.98 229.25 239.98 216S229.232 192 215.984 192H119.996C106.748 192 96 202.75 96 216S106.748 240 119.996 240ZM391.961 272H375.963C362.715 272 351.967 282.75 351.967 296S362.715 320 375.963 320H391.961C405.209 320 415.957 309.25 415.957 296S405.209 272 391.961 272ZM391.961 192H295.973C282.725 192 271.977 202.75 271.977 216S282.725 240 295.973 240H391.961C405.209 240 415.957 229.25 415.957 216S405.209 192 391.961 192ZM448 0H64C28.75 0 0 28.75 0 64V352.002C0 387.252 28.75 416.002 64 416.002H160V500.002C160 509.838 171.023 515.479 179.125 509.627L304 416.002H448C483.25 416.002 512 387.252 512 352.002V64C512 28.75 483.25 0 448 0ZM464 352.002C464 360.752 456.75 368.002 448 368.002H288L208 428.002V368.002H64C55.25 368.002 48 360.752 48 352.002V64C48 55.25 55.25 48 64 48H448C456.75 48 464 55.25 464 64V352.002Z" })
  }
));
MessageCaptionsRegular.displayName = "MessageCaptionsRegular";
var MessageCaptions_default = MessageCaptionsRegular;
