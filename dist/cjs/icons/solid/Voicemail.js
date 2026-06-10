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
var Voicemail_exports = {};
__export(Voicemail_exports, {
  default: () => Voicemail_default
});
module.exports = __toCommonJS(Voicemail_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const VoicemailSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M495.997 96C442.871 96 393.995 125.25 368.994 172.125C343.994 219 346.744 275.875 376.244 320H263.742C300.368 265.125 294.993 192.25 250.742 143.25C206.366 94.375 134.364 81.875 76.113 113S-11.764 210.875 4.361 275C20.362 339 77.988 384 143.989 384H495.997C575.499 384 640 319.5 640 240S575.499 96 495.997 96ZM63.988 240C63.988 195.875 99.863 160 143.989 160S223.991 195.875 223.991 240S188.115 320 143.989 320S63.988 284.125 63.988 240ZM495.997 320C451.871 320 415.995 284.125 415.995 240S451.871 160 495.997 160S575.999 195.875 575.999 240S540.123 320 495.997 320Z" })
  }
));
VoicemailSolid.displayName = "VoicemailSolid";
var Voicemail_default = VoicemailSolid;
