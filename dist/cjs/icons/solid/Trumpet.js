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
var Trumpet_exports = {};
__export(Trumpet_exports, {
  default: () => Trumpet_default
});
module.exports = __toCommonJS(Trumpet_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TrumpetSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M624 64C618.875 64 614 66.5 611 70.625C591.125 96.5 568.875 120.5 544.75 142.375C529.375 155.375 511.875 168 492.25 178.375C486.75 181.25 466.5 192 432.25 192H400V160C400 151.125 392.875 144 384 144H368C359.125 144 352 151.125 352 160V192H312V160C312 151.125 304.875 144 296 144H280C271.125 144 264 151.125 264 160V192H224V160C224 151.125 216.875 144 208 144H192C183.125 144 176 151.125 176 160V192H48C48 183.125 40.875 176 32 176H16C7.125 176 0 183.125 0 192V256C0 264.875 7.125 272 16 272H32C40.875 272 48 264.875 48 256H81.75C70.75 274.875 64 296.625 64 320C64.125 390.625 121.375 447.875 192 448H416C469 448 512 405 512 352V320.625C501.125 312.125 489.5 304.5 477.375 297.875C468.75 293.375 458.625 290.875 448 289.5V352C448 369.625 433.625 384 416 384H400V256H432C466.5 256 486.625 266.625 492.25 269.625C509.75 279 526.25 290.125 541.5 302.875C580.875 337.5 610.5 376.625 610.75 376.875C613.625 381.375 618.625 384 624 384C636.125 384 640 373 640 368V80C640 68 629.25 64 624 64ZM176 381.75C147.75 374.5 128 349.125 128 320S147.75 265.5 176 258.25V381.75ZM264 384H224V256H264V384ZM352 384H312V256H352V384Z" })
  }
));
TrumpetSolid.displayName = "TrumpetSolid";
var Trumpet_default = TrumpetSolid;
