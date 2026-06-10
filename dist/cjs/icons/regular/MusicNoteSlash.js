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
var MusicNoteSlash_exports = {};
__export(MusicNoteSlash_exports, {
  default: () => MusicNoteSlash_default
});
module.exports = __toCommonJS(MusicNoteSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MusicNoteSlashRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M630.812 469.109L351.999 250.582V195.352L489.624 161.975C502.999 157.725 511.999 145.473 511.999 131.473V31.965C511.999 21.715 507.124 12.215 498.874 6.213C490.624 0.088 480.124 -1.537 470.374 1.463L326.374 36.842C313.124 41.092 303.999 53.342 303.999 67.344V212.961L38.812 5.113C28.343 -3.059 13.312 -1.246 5.109 9.191C-3.063 19.629 -1.235 34.723 9.187 42.895L601.187 506.891C605.593 510.328 610.796 512 615.984 512C623.109 512 630.156 508.844 634.89 502.812C643.062 492.375 641.234 477.281 630.812 469.109ZM351.999 79.094L463.999 53.842V119.723L351.999 144.973V79.094ZM303.999 366.488C285.874 357.363 263.874 351.988 239.999 351.988C178.124 351.988 127.999 387.865 127.999 431.994C127.999 476.121 178.124 512 239.999 512S351.999 476.121 351.999 431.994V372.576L303.999 334.955V366.488ZM239.999 463.996C200.249 463.996 175.999 443.244 175.999 431.994C175.999 420.742 200.249 399.992 239.999 399.992S303.999 420.742 303.999 431.994C303.999 443.244 279.749 463.996 239.999 463.996Z" })
  }
));
MusicNoteSlashRegular.displayName = "MusicNoteSlashRegular";
var MusicNoteSlash_default = MusicNoteSlashRegular;
