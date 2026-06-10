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
var HandHoldingSkull_exports = {};
__export(HandHoldingSkull_exports, {
  default: () => HandHoldingSkull_default
});
module.exports = __toCommonJS(HandHoldingSkull_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HandHoldingSkullDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M559.729 392.211L424.676 491.727C406.896 504.812 385.006 512 362.977 512H15.998C7.25 512 0 504.75 0 496V400.023C0 391.273 7.25 384.023 15.998 384.023H71.369L117.867 346.281C138.865 329.281 164.988 320.031 191.986 320.031H351.977C371.475 320.031 386.848 337.406 383.598 357.406C380.975 373.148 366.225 384.023 350.227 384.023H271.98C263.232 384.023 255.982 391.273 255.982 400.023C255.982 408.766 263.232 416.016 271.98 416.016H392.592L512.264 327.844C530.059 314.656 555.072 318.5 568.197 336.312C581.305 354.094 577.51 379.117 559.729 392.211Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M432.045 128C432.045 57.25 367.535 0 288.021 0C208.51 0 144 57.25 144 128C144 174.5 172.254 214.875 214.01 237.25L208.51 263.125C205.885 275.75 214.01 288 225.012 288H351.031C362.158 288 370.16 275.75 367.535 263.125L362.033 237.25C403.791 214.875 432.045 174.5 432.045 128ZM232.014 176.012C214.385 176.012 200.008 161.637 200.008 144.01S214.385 112.008 232.014 112.008C249.641 112.008 264.018 126.383 264.018 144.01S249.641 176.012 232.014 176.012ZM344.031 176.012C326.402 176.012 312.025 161.637 312.025 144.01S326.402 112.008 344.031 112.008C361.658 112.008 376.035 126.383 376.035 144.01S361.658 176.012 344.031 176.012Z" })
    ]
  }
));
HandHoldingSkullDuotone.displayName = "HandHoldingSkullDuotone";
var HandHoldingSkull_default = HandHoldingSkullDuotone;
