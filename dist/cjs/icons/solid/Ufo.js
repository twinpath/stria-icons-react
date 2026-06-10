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
var Ufo_exports = {};
__export(Ufo_exports, {
  default: () => Ufo_default
});
module.exports = __toCommonJS(Ufo_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UfoSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M494.75 212.875C481.5 128.625 408.375 64 320 64S158.5 128.625 145.25 212.875C57.875 235.75 0 275.125 0 320C0 390.75 143.25 448 320 448S640 390.75 640 320C640 275.125 582.125 235.75 494.75 212.875ZM128 360C114.75 360 104 349.25 104 336S114.75 312 128 312S152 322.75 152 336S141.25 360 128 360ZM320 392C306.75 392 296 381.25 296 368S306.75 344 320 344S344 354.75 344 368S333.25 392 320 392ZM447.375 256.75C367.5 298.375 272.5 298.375 192.625 256.75C191.875 251.25 190.875 245.75 190.875 240C190.875 169.25 248.75 112 320 112S449.125 169.25 449.125 240C449.125 245.75 448.125 251.25 447.375 256.75ZM512 360C498.75 360 488 349.25 488 336S498.75 312 512 312S536 322.75 536 336S525.25 360 512 360Z" })
  }
));
UfoSolid.displayName = "UfoSolid";
var Ufo_default = UfoSolid;
