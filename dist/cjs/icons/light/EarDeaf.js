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
var EarDeaf_exports = {};
__export(EarDeaf_exports, {
  default: () => EarDeaf_default
});
module.exports = __toCommonJS(EarDeaf_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const EarDeafLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M240 64C141.312 64 64 141.312 64 240C64 248.844 71.156 256 80 256S96 248.844 96 240C96 159.25 159.25 96 240 96C319.406 96 384 162.125 384 243.438C384 292.625 366.203 334.969 329.609 372.875L325.797 376.844L325.219 382.312C319.453 436.156 274.047 480 224 480C215.156 480 208 487.156 208 496S215.156 512 224 512C288.156 512 346.422 458.312 356.328 391.219C396.469 348.031 416 299.625 416 243.438C416 144.5 337.047 64 240 64ZM160 240C160 195.875 195.891 160 240 160S320 195.875 320 240C320 248.844 327.156 256 336 256S352 248.844 352 240C352 178.25 301.75 128 240 128S128 178.25 128 240C128 248.844 135.156 256 144 256S160 248.844 160 240ZM176 320C171.906 320 167.812 321.562 164.688 324.688L4.688 484.688C1.562 487.812 0 491.906 0 496C0 504.527 6.865 512 16 512C20.094 512 24.188 510.438 27.312 507.312L187.312 347.312C190.438 344.188 192 340.094 192 336C192 327.473 185.135 320 176 320ZM512 16C512 7.473 505.135 0 496 0C491.906 0 487.812 1.562 484.688 4.688L420.688 68.688C417.562 71.812 416 75.906 416 80C416 88.527 422.865 96 432 96C436.094 96 440.188 94.438 443.312 91.312L507.312 27.312C510.438 24.188 512 20.094 512 16Z " })
  }
));
EarDeafLight.displayName = "EarDeafLight";
var EarDeaf_default = EarDeafLight;
