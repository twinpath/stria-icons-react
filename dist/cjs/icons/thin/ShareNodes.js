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
var ShareNodes_exports = {};
__export(ShareNodes_exports, {
  default: () => ShareNodes_default
});
module.exports = __toCommonJS(ShareNodes_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ShareNodesThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 352C361.812 352 342.281 363.305 330.801 380.455L124.146 277.127C126.482 270.482 128 263.443 128 256S126.482 241.518 124.146 234.873L330.801 131.545C342.281 148.695 361.812 160 384 160C419.348 160 448 131.346 448 96S419.348 32 384 32C348.654 32 320 60.654 320 96C320 103.443 321.518 110.482 323.854 117.127L117.199 220.455C105.719 203.305 86.189 192 64 192C28.654 192 0 220.654 0 256S28.654 320 64 320C86.189 320 105.719 308.695 117.199 291.545L323.854 394.873C321.518 401.518 320 408.557 320 416C320 451.346 348.654 480 384 480C419.348 480 448 451.346 448 416S419.348 352 384 352ZM384 48C410.467 48 432 69.533 432 96S410.467 144 384 144S336 122.467 336 96S357.533 48 384 48ZM64 304C37.533 304 16 282.467 16 256S37.533 208 64 208S112 229.533 112 256S90.467 304 64 304ZM384 464C357.533 464 336 442.467 336 416S357.533 368 384 368S432 389.533 432 416S410.467 464 384 464Z" })
  }
));
ShareNodesThin.displayName = "ShareNodesThin";
var ShareNodes_default = ShareNodesThin;
