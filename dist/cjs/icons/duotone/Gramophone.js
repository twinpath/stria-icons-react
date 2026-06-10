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
const GramophoneDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M376.018 269.118C376.018 314.869 338.893 351.87 293.268 351.87H224.018V384.012H160.018V327.87C160.018 314.619 170.768 303.869 184.018 303.869H293.268C312.393 303.869 328.018 288.369 328.018 269.118C328.018 256.993 319.893 246.367 308.143 243.242C231.393 222.617 132.393 273.993 69.518 317.119C51.393 329.495 27.018 312.619 32.893 290.994L106.017 17.736C111.768 -3.64 141.268 -6.515 150.893 13.611C183.018 80.863 243.143 176.115 320.643 196.866C353.268 205.616 376.018 235.242 376.018 269.118Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 463.999V496C384 504.875 376.875 512 368 512H16C7.125 512 0 504.875 0 496V463.999C0 455.123 7.125 447.998 16 447.998H32V415.997C32 398.372 46.375 383.996 64 383.996H320C337.625 383.996 352 398.372 352 415.997V447.998H368C376.875 447.998 384 455.123 384 463.999Z" })
    ]
  }
));
GramophoneDuotone.displayName = "GramophoneDuotone";
var Gramophone_default = GramophoneDuotone;
