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
const MartiniGlassCitrusSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288.002 464H240.002V338.75L408.752 170C424.252 154.5 413.252 128 391.377 128H24.627C2.752 128 -8.248 154.5 7.252 170L176.002 338.75V464H128.002C110.328 464 96.002 478.326 96.002 496C96.002 504.836 103.166 512 112.002 512H304.002C312.838 512 320.002 504.836 320.002 496C320.002 478.326 305.676 464 288.002 464ZM432.002 0C369.377 0 316.627 40.25 296.877 96H349.377C366.002 67.5 396.627 48 432.002 48C484.877 48 528.002 91 528.002 144S484.877 240 432.002 240C418.002 240 404.752 236.75 392.627 231.375L357.377 266.625C379.252 279.875 404.627 288 432.002 288C511.502 288 576.002 223.5 576.002 144S511.502 0 432.002 0Z" })
  }
));
MartiniGlassCitrusSolid.displayName = "MartiniGlassCitrusSolid";
var MartiniGlassCitrus_default = MartiniGlassCitrusSolid;
