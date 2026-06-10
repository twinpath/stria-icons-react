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
var Dolphin_exports = {};
__export(Dolphin_exports, {
  default: () => Dolphin_default
});
module.exports = __toCommonJS(Dolphin_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DolphinSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M438.367 129.523L424.463 117.605C433.479 93.357 450.693 63.469 476.771 27.713C482.082 20.381 480.053 12.676 476.338 7.895C471.719 1.912 464.508 -1.012 456.002 0.318C404.248 8.437 362.387 24.953 332.08 40.402C296.578 14.678 254.174 0 210.045 0H176C96.471 0 32 64.471 32 144C32 162.381 35.771 179.807 42.049 195.969L14.25 214.502C5.348 220.438 0 230.428 0 241.127V256.002C0 273.676 14.326 288.002 32 288.002H192L191.998 288H192.943L295.768 349.695C306.432 356.094 320 348.412 320 335.975V288H322.902C323.736 288 324.492 288.213 325.314 288.248C326.221 288.205 327.082 288 328 288C358.928 288 384 313.072 384 344S358.928 400 328 400H265.779L252.712 378.688C248.306 372.033 240.808 368 232.745 368H171.993C162.433 368 156.728 378.654 162.029 386.611L197.581 439.986V440.012L162.056 493.342C156.743 501.32 162.462 512 172.046 512H232.743C240.808 511.998 248.306 507.969 252.712 501.311L265.779 480H320C425.92 480 512.41 393.918 512 288C512 202.269 460.314 148.335 438.367 129.523ZM128 148.316C129.838 136.887 139.309 128 151.256 128C164.51 128 175.256 138.744 175.256 152C175.256 165.254 164.51 176 151.256 176C139.309 176 129.838 167.113 128 155.684V148.316Z" })
  }
));
DolphinSolid.displayName = "DolphinSolid";
var Dolphin_default = DolphinSolid;
