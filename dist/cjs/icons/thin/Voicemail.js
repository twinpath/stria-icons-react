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
const VoicemailThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M144 160C99.818 160 64 195.816 64 240S99.818 320 144 320C188.184 320 224 284.184 224 240S188.184 160 144 160ZM144 304C108.711 304 80 275.289 80 240S108.711 176 144 176C179.291 176 208 204.711 208 240S179.291 304 144 304ZM496 96C416.594 96 352 160.594 352 240C352 296.07 384.527 344.229 431.414 368H208.586C255.473 344.229 288 296.07 288 240C288 160.594 223.406 96 144 96S0 160.594 0 240S64.594 384 144 384H496C575.406 384 640 319.406 640 240S575.406 96 496 96ZM16 240C16 169.406 73.422 112 144 112S272 169.406 272 240S214.578 368 144 368S16 310.594 16 240ZM496 368C425.422 368 368 310.594 368 240S425.422 112 496 112S624 169.406 624 240S566.578 368 496 368ZM496 160C451.818 160 416 195.816 416 240S451.818 320 496 320C540.184 320 576 284.184 576 240S540.184 160 496 160ZM496 304C460.711 304 432 275.289 432 240S460.711 176 496 176C531.291 176 560 204.711 560 240S531.291 304 496 304Z" })
  }
));
VoicemailThin.displayName = "VoicemailThin";
var Voicemail_default = VoicemailThin;
