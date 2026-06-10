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
var XRay_exports = {};
__export(XRay_exports, {
  default: () => XRay_default
});
module.exports = __toCommonJS(XRay_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const XRaySolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M208 352C199.164 352 192 359.162 192 368C192 376.836 199.164 384 208 384S224 376.836 224 368C224 359.162 216.836 352 208 352ZM304 384C312.836 384 320 376.836 320 368C320 359.162 312.836 352 304 352S288 359.162 288 368C288 376.836 295.164 384 304 384ZM496 96C504.836 96 512 88.836 512 80V48C512 39.164 504.836 32 496 32H16C7.164 32 0 39.164 0 48V80C0 88.836 7.164 96 16 96H32V416H16C7.164 416 0 423.164 0 432V464C0 472.836 7.164 480 16 480H496C504.836 480 512 472.836 512 464V432C512 423.164 504.836 416 496 416H480V96H496ZM416 216C416 220.4 412.4 224 408 224H272V256H376C380.4 256 384 259.6 384 264V280C384 284.4 380.4 288 376 288H272V320H341.334C366.891 320 382.137 348.484 367.959 369.75L346.625 401.75C340.691 410.652 330.699 416 320 416H192C181.301 416 171.309 410.652 165.375 401.75L144.041 369.75C129.863 348.484 145.109 320 170.666 320H240V288H136C131.6 288 128 284.4 128 280V264C128 259.6 131.6 256 136 256H240V224H104C99.6 224 96 220.4 96 216V200C96 195.6 99.6 192 104 192H240V160H136C131.6 160 128 156.4 128 152V136C128 131.6 131.6 128 136 128H240V104C240 99.6 243.6 96 248 96H264C268.4 96 272 99.6 272 104V128H376C380.4 128 384 131.6 384 136V152C384 156.4 380.4 160 376 160H272V192H408C412.4 192 416 195.6 416 200V216Z" })
  }
));
XRaySolid.displayName = "XRaySolid";
var XRay_default = XRaySolid;
