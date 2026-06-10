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
var MartiniGlassCitrus_exports = {};
__export(MartiniGlassCitrus_exports, {
  default: () => MartiniGlassCitrus_default
});
module.exports = __toCommonJS(MartiniGlassCitrus_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MartiniGlassCitrusDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M296.242 192L208.001 280.24L119.761 192H296.242M391.376 128H24.627C2.752 128 -8.248 154.5 7.252 170L176.001 338.75V464H128.001C110.328 464 96.002 478.326 96.002 496C96.002 504.836 103.166 512 112.002 512H304.001C312.837 512 320.001 504.836 320.001 496C320.001 478.326 305.675 464 288.001 464H240.001V338.75L408.751 170C424.25 154.5 413.251 128 391.376 128L391.376 128Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M432.239 0C369.615 0 316.865 40.25 297.115 96H349.615C366.239 67.5 396.864 48 432.239 48C485.114 48 528.239 91 528.239 144S485.114 240 432.239 240C418.239 240 404.989 236.75 392.864 231.375L357.615 266.625C379.489 279.875 404.864 288 432.239 288C511.739 288 576.239 223.5 576.239 144S511.739 0 432.239 0ZM208.24 280.24L264.48 224H152L208.24 280.24Z" })
    ]
  }
));
MartiniGlassCitrusDuotone.displayName = "MartiniGlassCitrusDuotone";
var MartiniGlassCitrus_default = MartiniGlassCitrusDuotone;
