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
var MessageMusic_exports = {};
__export(MessageMusic_exports, {
  default: () => MessageMusic_default
});
module.exports = __toCommonJS(MessageMusic_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MessageMusicSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 0.018H64C28.625 0.018 0 28.641 0 64.013V351.99C0 387.362 28.625 415.985 64 415.985H160V499.978C160 504.478 162.5 508.603 166.625 510.727C170.625 512.727 175.5 512.352 179.125 509.728L304 415.985H448C483.375 415.985 512 387.362 512 351.99V64.013C512 28.641 483.375 0.018 448 0.018ZM352 255.998C352 273.621 330.5 287.995 304 287.995S256 273.621 256 255.998S277.5 224 304 224C309.375 224 314.75 224.75 320 226V149.631L224 187.128V287.995C224 305.619 202.5 319.993 176 319.993S128 305.619 128 287.995C128 270.372 149.5 255.998 176 255.998C181.375 255.998 186.75 256.748 192 257.998V143.257C192 136.257 196.5 130.133 203.25 128.008L331.25 80.762C336 79.262 341.375 80.137 345.5 83.136C349.625 86.136 352 90.886 352 96.01V255.998Z" })
  }
));
MessageMusicSolid.displayName = "MessageMusicSolid";
var MessageMusic_default = MessageMusicSolid;
