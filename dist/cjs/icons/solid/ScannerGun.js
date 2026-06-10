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
var ScannerGun_exports = {};
__export(ScannerGun_exports, {
  default: () => ScannerGun_default
});
module.exports = __toCommonJS(ScannerGun_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ScannerGunSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M568.001 415.951H424.015C419.64 415.951 416.016 419.576 416.016 423.95V471.944C416.016 476.319 419.64 479.943 424.015 479.943H568.001C572.375 479.943 576 476.319 576 471.944V423.95C576 419.576 572.375 415.951 568.001 415.951ZM568.001 287.968H424.015C419.64 287.968 416.016 291.592 416.016 295.967V311.965C416.016 316.339 419.64 319.964 424.015 319.964H568.001C572.375 319.964 576 316.339 576 311.965V295.967C576 291.592 572.375 287.968 568.001 287.968ZM568.001 351.96H424.015C419.64 351.96 416.016 355.584 416.016 359.959V375.957C416.016 380.331 419.64 383.956 424.015 383.956H568.001C572.375 383.956 576 380.331 576 375.957V359.959C576 355.584 572.375 351.96 568.001 351.96ZM568.001 191.98H424.015C419.64 191.98 416.016 195.604 416.016 199.979V247.973C416.016 252.347 419.64 255.972 424.015 255.972H568.001C572.375 255.972 576 252.347 576 247.973V199.979C576 195.604 572.375 191.98 568.001 191.98ZM568.001 32H424.015C419.64 32 416.016 35.625 416.016 39.999V87.993C416.016 92.367 419.64 95.992 424.015 95.992H568.001C572.375 95.992 576 92.367 576 87.993V39.999C576 35.625 572.375 32 568.001 32ZM568.001 127.988H424.015C419.64 127.988 416.016 131.612 416.016 135.987V151.985C416.016 156.359 419.64 159.984 424.015 159.984H568.001C572.375 159.984 576 156.359 576 151.985V135.987C576 131.612 572.375 127.988 568.001 127.988ZM320.025 32.057H112.046C50.196 32.057 0.057 82.195 0.057 144.042C0.057 194.257 33.331 236.252 78.865 250.461L6.431 375.957C-6.818 398.954 1.057 428.2 24.054 441.573L79.424 473.569C102.422 486.818 131.794 478.943 145.042 455.946L260.408 256.028H320.025C337.697 256.028 352.022 241.704 352.022 224.032V64.053C352.022 46.381 337.697 32.057 320.025 32.057Z" })
  }
));
ScannerGunSolid.displayName = "ScannerGunSolid";
var ScannerGun_default = ScannerGunSolid;
