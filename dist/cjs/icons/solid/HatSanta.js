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
var HatSanta_exports = {};
__export(HatSanta_exports, {
  default: () => HatSanta_default
});
module.exports = __toCommonJS(HatSanta_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HatSantaSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 384H64C28.654 384 0 412.654 0 448V448C0 465.673 14.327 480 32 480H480C497.673 480 512 465.673 512 448V448C512 412.654 483.346 384 448 384ZM384 192L455.75 211.5C458 207.375 460.625 203.5 463.875 200.125C464.25 185.625 470.125 171.5 480.875 160.75C483.125 158.5 485.625 156.625 488.125 154.75L435 92.125C402.625 54 355.25 32 305.25 32C236.625 32 174.75 73.25 148.375 136.5L64 352H448L384 192ZM640 240C640 227.875 631.75 218.125 620.75 214.75C626.25 204.75 625.25 192 616.625 183.375C608 174.75 595.25 173.75 585.25 179.25C581.875 168.25 572.125 160 560 160S538.125 168.25 534.75 179.25C524.75 173.75 512 174.75 503.375 183.375C494.75 192 493.75 204.75 499.25 214.75C488.25 218.125 480 227.875 480 240S488.25 261.875 499.25 265.25C493.75 275.25 494.75 288 503.375 296.625C508.625 301.75 515.375 304.375 522.25 304.375C526.75 304.375 530.875 302.875 534.75 300.75C538.125 311.75 547.875 320 560 320S581.875 311.75 585.25 300.75C589.25 302.875 593.375 304.375 597.75 304.375C604.5 304.375 611.25 301.75 616.625 296.625C625.25 288 626.25 275.25 620.75 265.25C631.75 261.875 640 252.125 640 240Z" })
  }
));
HatSantaSolid.displayName = "HatSantaSolid";
var HatSanta_default = HatSantaSolid;
