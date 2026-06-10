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
var UniversalAccess_exports = {};
__export(UniversalAccess_exports, {
  default: () => UniversalAccess_default
});
module.exports = __toCommonJS(UniversalAccess_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UniversalAccessSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.42 16 16 123.418 16 256C16 388.58 123.42 496 256 496S496 388.58 496 256C496 123.418 388.58 16 256 16ZM256 80C278.092 80 296 97.908 296 120S278.092 160 256 160S216 142.092 216 120S233.908 80 256 80ZM374.594 215.062L315.344 232C311.607 233.072 307.783 233.615 304 234.402V296.719L334.641 384.062C339.031 396.562 332.453 410.25 319.953 414.656C317.312 415.562 314.641 416 312 416C302.094 416 292.812 409.812 289.359 399.938L263.514 329.287C260.951 322.285 251.049 322.285 248.486 329.287L222.641 399.938C219.188 409.812 209.906 416 200 416C197.359 416 194.688 415.562 192.047 414.656C179.547 410.25 172.969 396.562 177.359 384.062L208 296.719V234.424C204.215 233.637 200.395 233.096 196.656 232.031L137.406 215.062C124.656 211.438 117.281 198.156 120.922 185.406S137.891 165.188 150.594 168.938L209.844 185.875C240.01 194.498 271.99 194.498 302.156 185.875L361.406 168.938C374.109 165.156 387.422 172.656 391.078 185.406C394.719 198.156 387.344 211.438 374.594 215.062Z" })
  }
));
UniversalAccessSolid.displayName = "UniversalAccessSolid";
var UniversalAccess_default = UniversalAccessSolid;
