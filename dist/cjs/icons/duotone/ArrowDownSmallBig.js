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
const ArrowDownSmallBigDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 192H416C433.674 192 448 177.672 448 160V64C448 46.398 433.6 32 416 32H320C302.326 32 288 46.328 288 64V160C288 177.672 302.326 192 320 192ZM480 256H320C302.326 256 288 270.328 288 288V448C288 465.672 302.326 480 320 480H480C497.674 480 512 465.672 512 448V288C512 270.328 497.674 256 480 256Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M237.623 328.695C250.652 340.648 251.527 360.914 239.591 373.961L151.593 470.055C139.468 483.312 116.531 483.312 104.406 470.055L16.408 373.961C4.472 360.914 5.347 340.648 18.377 328.695C24.517 323.062 32.267 320.281 39.986 320.281C48.658 320.281 57.283 323.781 63.595 330.664L96 366.062V64.031C96 46.328 110.328 32 128 32S160 46.328 160 64.031V366.063L192.404 330.664C204.357 317.656 224.607 316.75 237.623 328.695Z" })
    ]
  }
));
ArrowDownSmallBigDuotone.displayName = "ArrowDownSmallBigDuotone";
var ArrowDownSmallBig_default = ArrowDownSmallBigDuotone;
