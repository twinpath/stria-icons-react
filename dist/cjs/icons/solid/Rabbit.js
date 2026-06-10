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
var Rabbit_exports = {};
__export(Rabbit_exports, {
  default: () => Rabbit_default
});
module.exports = __toCommonJS(Rabbit_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RabbitSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M477.503 487.503L384.003 337.894V272.026H391.378C422.628 272.026 448.003 246.654 448.003 215.407C448.003 197.034 439.128 179.911 424.253 169.287L375.627 134.541C374.502 134.041 373.377 133.791 372.252 133.291C380.002 120.792 387.503 103.544 392.753 83.671C404.128 41.426 401.878 4.18 387.753 0.305C373.752 -3.444 353.127 27.802 341.752 70.048C339.127 80.171 337.252 90.045 336.002 99.169C334.877 90.045 333.002 80.171 330.252 70.048C318.877 27.802 298.252 -3.444 284.252 0.305C270.127 4.18 267.877 41.426 279.252 83.671C286.127 109.543 296.627 131.166 306.877 143.29C297.752 151.164 291.002 161.788 288.877 174.786C288.252 178.161 288.002 181.536 288.002 185.035V256.028H275.252C192.001 256.028 122.251 312.771 102.125 389.638C95.5 386.139 88 384.014 80 384.014C53.5 384.014 32 405.511 32 432.009C32 458.506 53.5 480.003 80 480.003C87.875 480.003 95.25 477.879 101.876 474.504C112.001 496.627 134.126 512 160.001 512H304.002C312.877 512 320.002 504.876 320.002 496.002V480.003C320.002 462.38 305.627 448.007 288.002 448.007H265.377L339.752 387.888L412.628 504.501C415.628 509.125 420.753 512 426.253 512H464.003C476.503 512 484.253 498.126 477.503 487.503ZM368.002 208.033C359.127 208.033 352.002 200.909 352.002 192.034S359.127 176.036 368.002 176.036S384.003 183.16 384.003 192.034S376.877 208.033 368.002 208.033Z" })
  }
));
RabbitSolid.displayName = "RabbitSolid";
var Rabbit_default = RabbitSolid;
