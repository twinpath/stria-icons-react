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
const VoicemailDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M144.001 192C117.491 192 96 213.49 96 240S117.491 288 144.001 288S192.002 266.51 192.002 240S170.511 192 144.001 192ZM496.009 192C469.498 192 448.008 213.49 448.008 240S469.498 288 496.009 288C522.519 288 544.01 266.51 544.01 240S522.519 192 496.009 192Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M495.997 96.001C442.871 96.001 393.995 125.251 368.994 172.126C343.994 219.001 346.744 275.876 376.244 320.001H263.742C300.368 265.126 294.993 192.251 250.742 143.251C206.366 94.376 134.364 81.876 76.113 113.001S-11.764 210.876 4.361 275.001C20.362 339.001 77.988 384.001 143.989 384.001H495.997C575.499 384.001 640 319.501 640 240.001S575.499 96.001 495.997 96.001ZM63.988 240.001C63.988 195.876 99.863 160.001 143.989 160.001S223.991 195.876 223.991 240.001S188.115 320.001 143.989 320.001S63.988 284.126 63.988 240.001ZM495.997 320.001C451.871 320.001 415.995 284.126 415.995 240.001S451.871 160.001 495.997 160.001S575.999 195.876 575.999 240.001S540.123 320.001 495.997 320.001Z" })
    ]
  }
));
VoicemailDuotone.displayName = "VoicemailDuotone";
var Voicemail_default = VoicemailDuotone;
