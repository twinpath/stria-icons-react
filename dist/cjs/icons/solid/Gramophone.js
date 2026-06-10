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
var Gramophone_exports = {};
__export(Gramophone_exports, {
  default: () => Gramophone_default
});
module.exports = __toCommonJS(Gramophone_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GramophoneSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M69.5 317.119C132.375 273.993 231.375 222.617 308.125 243.242C319.875 246.367 328 256.993 328 269.118C328 288.369 312.375 303.869 293.25 303.869H184C170.75 303.869 160 314.619 160 327.87V351.87H293.25C338.875 351.87 376 314.869 376 269.118C376 235.242 353.25 205.616 320.625 196.866C243.125 176.115 183 80.863 150.875 13.611C141.25 -6.515 111.75 -3.64 105.999 17.736L32.875 290.994C27 312.619 51.375 329.495 69.5 317.119ZM368 447.998H352V415.997C352 398.372 337.625 383.996 320 383.996H64C46.375 383.996 32 398.372 32 415.997V447.998H16C7.125 447.998 0 455.123 0 463.999V496C0 504.875 7.125 512 16 512H368C376.875 512 384 504.875 384 496V463.999C384 455.123 376.875 447.998 368 447.998Z" })
  }
));
GramophoneSolid.displayName = "GramophoneSolid";
var Gramophone_default = GramophoneSolid;
