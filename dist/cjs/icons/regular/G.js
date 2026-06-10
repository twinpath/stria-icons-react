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
var G_exports = {};
__export(G_exports, {
  default: () => G_default
});
module.exports = __toCommonJS(G_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224 480C164.172 480 107.922 456.688 65.609 414.375S0 315.844 0 256S23.297 139.938 65.609 97.625S164.172 32 224 32S340.078 55.312 382.391 97.625C394.891 110.125 394.891 130.375 382.391 142.875S349.641 155.375 337.141 142.875C306.922 112.656 266.734 96 224 96S141.078 112.656 110.859 142.875S64 213.281 64 256S80.641 338.906 110.859 369.125S181.266 416 224 416S306.922 399.344 337.141 369.125C356.484 349.781 370.891 327.75 378.953 305.469H224C206.328 305.469 192 291.156 192 273.469S206.328 241.469 224 241.469H416C433.672 241.469 448 255.781 448 273.469V290.906C448 292.844 447.828 294.781 447.469 296.688C439.812 338.281 416.703 380.094 382.391 414.375C340.078 456.688 283.828 480 224 480Z" })
  }
));
GRegular.displayName = "GRegular";
var G_default = GRegular;
