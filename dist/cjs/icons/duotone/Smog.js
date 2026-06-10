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
var Smog_exports = {};
__export(Smog_exports, {
  default: () => Smog_default
});
module.exports = __toCommonJS(Smog_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SmogDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M136 464H24C10.8 464 0 474.8 0 488V488C0 501.2 10.8 512 24 512H136C149.2 512 160 501.2 160 488V488C160 474.8 149.2 464 136 464ZM616 368H88C74.8 368 64 378.8 64 392V392C64 405.2 74.8 416 88 416H616C629.2 416 640 405.2 640 392V392C640 378.8 629.2 368 616 368ZM552 464H232C218.8 464 208 474.8 208 488V488C208 501.2 218.8 512 232 512H552C565.2 512 576 501.2 576 488V488C576 474.8 565.2 464 552 464Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M144 288H300.125C322.625 307.75 351.75 320 384 320S445.25 307.75 467.875 288H528C589.875 288 640 237.875 640 176S589.875 64 528 64C510 64 493.25 68.625 478.25 76.125C454 31 406.75 0 352 0C311 0 274.25 17.25 248 44.75C221.75 17.25 185 0 144 0C64.5 0 0 64.5 0 144S64.5 288 144 288Z" })
    ]
  }
));
SmogDuotone.displayName = "SmogDuotone";
var Smog_default = SmogDuotone;
