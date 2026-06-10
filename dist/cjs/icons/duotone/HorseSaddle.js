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
var HorseSaddle_exports = {};
__export(HorseSaddle_exports, {
  default: () => HorseSaddle_default
});
module.exports = __toCommonJS(HorseSaddle_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HorseSaddleDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M575.938 76.65C575.957 68.547 572.883 60.744 567.34 54.834C563.562 50.831 558.758 45.711 553.648 40.324C564.711 33.484 573.148 22.824 575.828 9.647C576.688 5.257 573.824 1.005 569.438 0.149C568.93 0.047 568.414 0 567.898 0H447.898C380.883 0 323.586 60.041 320 121.973V159.761C320 207.332 285.363 246.554 240 254.212V332.484L320 345.813L319.967 479.978C319.967 497.664 334.295 512 351.967 512H383.967C401.641 512 415.967 497.664 415.967 479.978L416 318.435C436.512 297.554 448.008 269.441 448 240.163C448 239.944 447.93 239.741 447.922 239.522V136.984L463.922 144.098L482.82 181.823C490.273 196.696 507.867 203.38 523.313 197.204L555.859 184.195C568.035 179.333 576.016 167.532 576 154.413L575.938 76.65ZM511.922 96.065C503.086 96.065 495.922 88.896 495.922 80.054S503.086 64.043 511.922 64.043S527.922 71.212 527.922 80.054S520.758 96.065 511.922 96.065ZM128 159.761V133.97C90.797 147.205 64 182.386 64 224.152C64 252.148 76.164 277.118 95.262 294.677L68.82 362.723C64.258 374.887 63.508 388.15 66.66 400.749L88.438 487.753C92.002 502.005 104.799 512 119.48 512H152.463C173.273 512 188.549 492.436 183.512 472.229L162.188 387.122L186 323.485L208 327.152V254.212C162.637 246.554 128 207.332 128 159.761Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 248.169V304.207C0 313.048 7.164 320.217 16 320.217H32C40.836 320.217 48 313.048 48 304.207V248.169C48 234.917 54.859 223.734 64.773 216.452C66.52 194.824 75.227 175.314 88.914 160.109H88C39.398 160.109 0 199.534 0 248.169ZM128 133.97V159.761C128 207.332 162.637 246.554 208 254.212V327.152L240 332.484V254.212C285.363 246.554 320 207.332 320 159.761V128.087H160C148.719 128.087 138.055 130.393 128 133.97ZM511.922 64.043C503.086 64.043 495.922 71.212 495.922 80.054S503.086 96.065 511.922 96.065S527.922 88.896 527.922 80.054S520.758 64.043 511.922 64.043Z" })
    ]
  }
));
HorseSaddleDuotone.displayName = "HorseSaddleDuotone";
var HorseSaddle_default = HorseSaddleDuotone;
