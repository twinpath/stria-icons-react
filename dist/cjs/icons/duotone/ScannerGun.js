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
const ScannerGunDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320.025 32.057H112.046C50.196 32.057 0.057 82.195 0.057 144.042C0.057 194.257 33.331 236.252 78.865 250.461L6.431 375.957C-6.818 398.954 1.057 428.2 24.054 441.573L79.424 473.569C102.422 486.818 131.794 478.943 145.042 455.946L260.408 256.028H320.025C337.697 256.028 352.022 241.704 352.022 224.032V64.053C352.022 46.381 337.697 32.057 320.025 32.057Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M567.985 351.96H423.999C419.625 351.96 416 355.584 416 359.959V375.957C416 380.331 419.625 383.956 423.999 383.956H567.985C572.36 383.956 575.984 380.331 575.984 375.957V359.959C575.984 355.584 572.36 351.96 567.985 351.96ZM567.985 287.968H423.999C419.625 287.968 416 291.592 416 295.967V311.965C416 316.339 419.625 319.964 423.999 319.964H567.985C572.36 319.964 575.984 316.339 575.984 311.965V295.967C575.984 291.592 572.36 287.968 567.985 287.968ZM567.985 415.951H423.999C419.625 415.951 416 419.576 416 423.95V471.944C416 476.319 419.625 479.943 423.999 479.943H567.985C572.36 479.943 575.984 476.319 575.984 471.944V423.95C575.984 419.576 572.36 415.951 567.985 415.951ZM567.985 127.988H423.999C419.625 127.988 416 131.612 416 135.987V151.985C416 156.359 419.625 159.984 423.999 159.984H567.985C572.36 159.984 575.984 156.359 575.984 151.985V135.987C575.984 131.612 572.36 127.988 567.985 127.988ZM567.985 191.98H423.999C419.625 191.98 416 195.604 416 199.979V247.973C416 252.347 419.625 255.972 423.999 255.972H567.985C572.36 255.972 575.984 252.347 575.984 247.973V199.979C575.984 195.604 572.36 191.98 567.985 191.98ZM567.985 32H423.999C419.625 32 416 35.625 416 39.999V87.993C416 92.367 419.625 95.992 423.999 95.992H567.985C572.36 95.992 575.984 92.367 575.984 87.993V39.999C575.984 35.625 572.36 32 567.985 32Z" })
    ]
  }
));
ScannerGunDuotone.displayName = "ScannerGunDuotone";
var ScannerGun_default = ScannerGunDuotone;
