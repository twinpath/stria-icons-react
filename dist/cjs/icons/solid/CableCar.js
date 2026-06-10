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
var CableCar_exports = {};
__export(CableCar_exports, {
  default: () => CableCar_default
});
module.exports = __toCommonJS(CableCar_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CableCarSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M191.959 96C209.709 96 223.959 81.75 223.959 64S209.709 32 191.959 32S159.958 46.25 159.958 64S174.208 96 191.959 96ZM287.96 64C305.71 64 319.96 49.75 319.96 32S305.71 0 287.96 0S255.959 14.25 255.959 32S270.209 64 287.96 64ZM511.462 51.875C509.212 43.25 500.462 38.25 491.837 40.625L11.832 168.625C3.332 170.875 -1.793 179.625 0.582 188.25C2.457 195.25 8.832 200 15.957 200C17.332 200 18.707 199.75 20.082 199.5L239.959 140.75V224H95.958C60.612 224 31.957 252.652 31.957 288V448C31.957 483.346 60.612 512 95.958 512H415.961C451.307 512 479.962 483.346 479.962 448V288C479.962 252.652 451.307 224 415.961 224H271.959V132.25L500.087 71.5C508.712 69.25 513.712 60.375 511.462 51.875ZM175.958 384H79.957V288H175.958V384ZM335.96 288H431.961V384H335.96V288ZM303.96 288V384H207.959V288H303.96Z" })
  }
));
CableCarSolid.displayName = "CableCarSolid";
var CableCar_default = CableCarSolid;
