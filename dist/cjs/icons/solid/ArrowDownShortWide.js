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
var ArrowDownShortWide_exports = {};
__export(ArrowDownShortWide_exports, {
  default: () => ArrowDownShortWide_default
});
module.exports = __toCommonJS(ArrowDownShortWide_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowDownShortWideSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 224H415.998C433.671 224 447.998 209.672 447.998 192S433.671 160 415.998 160H320C302.326 160 288 174.328 288 192S302.326 224 320 224ZM320 352H479.998C497.671 352 511.998 337.672 511.998 320S497.671 288 479.998 288H320C302.326 288 288 302.328 288 320S302.326 352 320 352ZM320 96H352C369.673 96 384 81.672 384 64S369.673 32 352 32H320C302.326 32 288 46.328 288 64S302.326 96 320 96ZM543.998 416H320C302.326 416 288 430.328 288 448S302.326 480 320 480H543.998C561.671 480 575.998 465.672 575.998 448S561.671 416 543.998 416ZM192.404 330.664L160 366.062V64.031C160 46.328 145.671 32 128 32S96 46.328 96 64.031V366.063L63.595 330.664C57.283 323.781 48.658 320.281 39.986 320.281C32.267 320.281 24.517 323.063 18.377 328.695C5.347 340.648 4.472 360.914 16.408 373.961L104.406 470.055C116.531 483.313 139.468 483.313 151.593 470.055L239.591 373.961C251.527 360.914 250.652 340.648 237.623 328.695C224.607 316.75 204.357 317.656 192.404 330.664Z" })
  }
));
ArrowDownShortWideSolid.displayName = "ArrowDownShortWideSolid";
var ArrowDownShortWide_default = ArrowDownShortWideSolid;
