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
const XRayDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M208 320C199.164 320 192 327.162 192 336C192 344.836 199.164 352 208 352S224 344.836 224 336C224 327.162 216.836 320 208 320ZM304 352C312.836 352 320 344.836 320 336C320 327.162 312.836 320 304 320S288 327.162 288 336C288 344.836 295.164 352 304 352ZM32 96V416H480V96H32ZM416 184C416 188.398 412.4 192 408 192H272V224H376C380.4 224 384 227.6 384 232V248C384 252.398 380.4 256 376 256H272V288H341.334C366.893 288 382.137 316.484 367.959 337.75L346.625 369.75C340.689 378.652 330.699 384 320 384H192C181.303 384 171.311 378.652 165.377 369.75L144.041 337.75C129.863 316.484 145.107 288 170.666 288H240V256H136C131.6 256 128 252.398 128 248V232C128 227.6 131.6 224 136 224H240V192H104C99.6 192 96 188.398 96 184V168C96 163.6 99.6 160 104 160H240V136C240 131.58 243.582 128 248 128H264C268.418 128 272 131.58 272 136V160H408C412.4 160 416 163.6 416 168V184Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M496 416H16C7.164 416 0 423.162 0 432V464C0 472.836 7.164 480 16 480H496C504.836 480 512 472.836 512 464V432C512 423.162 504.836 416 496 416ZM496 32H16C7.164 32 0 39.162 0 48V80C0 88.836 7.164 96 16 96H496C504.836 96 512 88.836 512 80V48C512 39.162 504.836 32 496 32Z" })
    ]
  }
));
XRayDuotone.displayName = "XRayDuotone";
var XRay_default = XRayDuotone;
