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
var MessageMedical_exports = {};
__export(MessageMedical_exports, {
  default: () => MessageMedical_default
});
module.exports = __toCommonJS(MessageMedical_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MessageMedicalDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 0H64C28.625 0 0 28.623 0 63.998V351.99C0 387.365 28.625 415.988 64 415.988H160V499.986C160 504.486 162.5 508.611 166.625 510.736C170.625 512.736 175.5 512.361 179.125 509.611L304 415.988H448C483.375 415.988 512 387.365 512 351.99V63.998C512 28.623 483.375 0 448 0ZM368 234C368 242.836 360.836 250 352 250H297.999V304C297.999 312.836 290.836 320 281.999 320H229.999C221.164 320 213.999 312.836 213.999 304V250H160C151.164 250 144 242.836 144 234V182C144 173.162 151.164 166 160 166H213.999V112C213.999 103.162 221.164 96 229.999 96H281.999C290.836 96 297.999 103.162 297.999 112V166H352C360.836 166 368 173.162 368 182V234Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M368 234C368 242.836 360.836 250 352 250H297.999V304C297.999 312.836 290.836 320 281.999 320H229.999C221.164 320 213.999 312.836 213.999 304V250H160C151.164 250 144 242.836 144 234V182C144 173.162 151.164 166 160 166H213.999V112C213.999 103.162 221.164 96 229.999 96H281.999C290.836 96 297.999 103.162 297.999 112V166H352C360.836 166 368 173.162 368 182V234Z" })
    ]
  }
));
MessageMedicalDuotone.displayName = "MessageMedicalDuotone";
var MessageMedical_default = MessageMedicalDuotone;
