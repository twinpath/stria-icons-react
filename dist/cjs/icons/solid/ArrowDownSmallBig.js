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
var ArrowDownSmallBig_exports = {};
__export(ArrowDownSmallBig_exports, {
  default: () => ArrowDownSmallBig_default
});
module.exports = __toCommonJS(ArrowDownSmallBig_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowDownSmallBigSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 192H416C433.673 192 448 177.672 448 160V64C448 46.398 433.599 32 416 32H320C302.326 32 288 46.328 288 64V160C288 177.672 302.326 192 320 192ZM480 256H320C302.326 256 288 270.328 288 288V448C288 465.672 302.326 480 320 480H480C497.673 480 512 465.672 512 448V288C512 270.328 497.673 256 480 256ZM192.404 330.664L160 366.062V64.031C160 46.328 145.671 32 128 32S96 46.328 96 64.031V366.063L63.595 330.664C57.283 323.781 48.658 320.281 39.986 320.281C32.267 320.281 24.517 323.063 18.377 328.695C5.347 340.648 4.472 360.914 16.408 373.961L104.406 470.055C116.531 483.313 139.468 483.313 151.593 470.055L239.591 373.961C251.527 360.914 250.652 340.648 237.623 328.695C224.607 316.75 204.357 317.656 192.404 330.664Z" })
  }
));
ArrowDownSmallBigSolid.displayName = "ArrowDownSmallBigSolid";
var ArrowDownSmallBig_default = ArrowDownSmallBigSolid;
