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
var WagonCovered_exports = {};
__export(WagonCovered_exports, {
  default: () => WagonCovered_default
});
module.exports = __toCommonJS(WagonCovered_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WagonCoveredDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224.002 256L223.995 58.982C223.995 43.395 212.762 30.076 197.4 27.443L39.507 0.391C13.508 -3.609 -6.992 23.766 2.258 50.141L83.387 256H224.002ZM383.998 56.016C383.998 33.891 366.124 16.016 343.999 16.016H296.001C273.876 16.016 256.002 33.891 256.002 56.016V256H383.998V56.016ZM175.996 288C114.142 288 63.999 338.145 63.999 400S114.142 512 175.996 512S287.993 461.855 287.993 400S237.85 288 175.996 288ZM159.996 461.727C137.618 455.91 120.087 438.379 114.271 416H159.996V461.727ZM159.996 384H114.271C120.087 361.621 137.618 344.09 159.996 338.273V384ZM191.995 461.727V416H237.721C231.905 438.379 214.374 455.91 191.995 461.727ZM191.995 384V338.273C214.374 344.09 231.905 361.621 237.721 384H191.995ZM600.493 0.391L442.587 27.443C427.222 30.074 415.99 43.396 415.99 58.984L415.998 256H556.599L637.742 50.141C646.992 23.766 626.492 -3.609 600.493 0.391ZM463.989 288C402.135 288 351.991 338.145 351.991 400S402.135 512 463.989 512S575.986 461.855 575.986 400S525.842 288 463.989 288ZM447.989 461.727C425.611 455.91 408.08 438.379 402.264 416H447.989V461.727ZM447.989 384H402.264C408.08 361.621 425.611 344.09 447.989 338.273V384ZM479.988 461.727V416H525.714C519.897 438.379 502.366 455.91 479.988 461.727ZM479.988 384V338.273C502.366 344.09 519.897 361.621 525.714 384H479.988Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M575.987 272V304C575.987 312.836 568.823 320 559.987 320H542.209C522.016 300.256 494.462 288 463.99 288C402.136 288 351.993 338.145 351.993 400C351.993 405.48 352.846 410.73 353.606 416H286.381C287.141 410.73 287.994 405.48 287.994 400C287.994 338.145 237.851 288 175.997 288C145.525 288 117.971 300.256 97.778 320H80C71.164 320 64 312.836 64 304V272C64 263.162 71.164 256 80 256H223.996V40C223.996 35.58 227.578 32 231.996 32H247.995C252.413 32 255.995 35.58 255.995 40V256H383.992V40C383.992 35.58 387.574 32 391.992 32H407.991C412.409 32 415.991 35.58 415.991 40V256H559.987C568.823 256 575.987 263.162 575.987 272Z" })
    ]
  }
));
WagonCoveredDuotone.displayName = "WagonCoveredDuotone";
var WagonCovered_default = WagonCoveredDuotone;
