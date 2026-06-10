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
var CircleSortUp_exports = {};
__export(CircleSortUp_exports, {
  default: () => CircleSortUp_default
});
module.exports = __toCommonJS(CircleSortUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleSortUpSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M255.947 378.469L314.65 320H197.318L255.947 378.469ZM256 16C123.418 16 16 123.42 16 256S123.418 496 256 496C388.58 496 496 388.58 496 256S388.58 16 256 16ZM360.625 319.375L269 410.625C265.5 414 260.875 416 256 416S246.375 414 242.875 410.625L151.375 319.375C139.875 307.875 148 288 164.5 288H347.5C364 288 372.125 307.875 360.625 319.375ZM347.5 224H164.5C148 224 139.875 204.125 151.375 192.625L242.875 101.375C246.375 98 251.125 96 256 96S265.5 98 269 101.375L360.625 192.625C372.125 204.125 364 224 347.5 224Z" })
  }
));
CircleSortUpSolid.displayName = "CircleSortUpSolid";
var CircleSortUp_default = CircleSortUpSolid;
