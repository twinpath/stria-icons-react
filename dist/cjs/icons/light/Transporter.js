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
var Transporter_exports = {};
__export(Transporter_exports, {
  default: () => Transporter_default
});
module.exports = __toCommonJS(Transporter_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TransporterLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M124.297 282.25L175.516 220.781C180.301 215.039 185.977 210.377 192 206.254V400C192 408.844 199.156 416 208 416S224 408.844 224 400V193.426C228.277 192.723 232.559 192 236.969 192H275.031C279.441 192 283.723 192.723 288 193.426V400C288 408.844 295.156 416 304 416S320 408.844 320 400V206.258C326.023 210.383 331.699 215.049 336.484 220.797L387.703 282.25C390.875 286.047 395.422 288 400.016 288C403.625 288 407.25 286.781 410.25 284.297C417.031 278.641 417.953 268.547 412.297 261.75L361.078 200.312C339.734 174.688 308.375 160 275.031 160H236.969C203.625 160 172.266 174.688 150.922 200.297L99.703 261.75C94.047 268.547 94.969 278.641 101.75 284.297C108.578 289.922 118.656 289.031 124.297 282.25ZM256 128C291.346 128 320 99.346 320 64C320 28.652 291.346 0 256 0S192 28.652 192 64C192 99.346 220.654 128 256 128ZM256 32C273.645 32 288 46.355 288 64S273.645 96 256 96S224 81.645 224 64S238.355 32 256 32ZM80 96H64V80C64 71.156 56.844 64 48 64S32 71.156 32 80V96H16C7.156 96 0 103.156 0 112S7.156 128 16 128H32V144C32 152.844 39.156 160 48 160S64 152.844 64 144V128H80C88.844 128 96 120.844 96 112S88.844 96 80 96ZM496 32H480V16C480 7.156 472.844 0 464 0S448 7.156 448 16V32H432C423.156 32 416 39.156 416 48S423.156 64 432 64H448V80C448 88.844 455.156 96 464 96S480 88.844 480 80V64H496C504.844 64 512 56.844 512 48S504.844 32 496 32ZM368 448H144C117.531 448 96 469.531 96 496C96 504.844 103.156 512 112 512S128 504.844 128 496C128 487.172 135.172 480 144 480H368C376.828 480 384 487.172 384 496C384 504.844 391.156 512 400 512S416 504.844 416 496C416 469.531 394.469 448 368 448Z" })
  }
));
TransporterLight.displayName = "TransporterLight";
var Transporter_default = TransporterLight;
