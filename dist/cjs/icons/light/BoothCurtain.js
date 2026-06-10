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
var BoothCurtain_exports = {};
__export(BoothCurtain_exports, {
  default: () => BoothCurtain_default
});
module.exports = __toCommonJS(BoothCurtain_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BoothCurtainLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 32V496C0 504.8 7.2 512 16 512H16C24.8 512 32 504.8 32 496V32H96L96 381.523C96 416.815 123.491 447.31 158.777 447.988C178.529 448.368 196.002 439.533 208 425.875C219.75 439.25 236.75 448 256 448S292.25 439.25 304 425.875C315.75 439.25 332.75 448 352 448S388.25 439.25 400 425.875C411.75 439.25 428.75 448 448 448C459.75 448 470.5 444.625 480 439.125V496C480 504.8 487.2 512 496 512L496 512C504.8 512 512 504.8 512 496V32C512 14.327 497.673 0 480 0H32C14.327 0 0 14.327 0 32ZM416 32H480V384C480 401.75 465.75 416 448 416C430.25 416 416 401.75 416 384V32ZM320 32H384V384C384 401.75 369.75 416 352 416S320 401.75 320 384V32ZM224 32H288V384C288 401.75 273.75 416 256 416S224 401.75 224 384V32ZM128 32H192V384C192 401.75 177.75 416 160 416S128 401.75 128 384V32Z" })
  }
));
BoothCurtainLight.displayName = "BoothCurtainLight";
var BoothCurtain_default = BoothCurtainLight;
