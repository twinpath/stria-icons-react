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
var MusicSlash_exports = {};
__export(MusicSlash_exports, {
  default: () => MusicSlash_default
});
module.exports = __toCommonJS(MusicSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MusicSlashRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M630.812 469.109L558.626 412.531C567.148 402.082 573.179 390.078 574.999 376.875C575.624 374.125 575.874 371.375 575.999 368.625V32C575.999 14.375 561.749 0 543.999 0C540.749 0 537.499 0.5 534.374 1.5L230.374 97.5C217.124 101.75 207.999 114 207.999 128V137.715L38.812 5.109C28.343 -3.062 13.312 -1.25 5.109 9.188C-3.063 19.625 -1.235 34.719 9.187 42.891L601.187 506.891C605.593 510.328 610.796 512 615.984 512C623.109 512 630.156 508.844 634.89 502.812C643.062 492.375 641.234 477.281 630.812 469.109ZM521.38 383.338L463.728 338.152C468.757 336.867 474.138 336 479.999 336C508.249 336 527.999 352.875 527.999 368C527.999 373.17 525.544 378.504 521.38 383.338ZM527.999 299.125C512.999 291.75 496.624 288 479.999 288C457.81 288 437.609 294.438 421.437 305.004L329.363 232.838L527.999 170.125V299.125ZM527.999 119.75L283.546 196.928L255.999 175.338V139.75L527.999 53.875V119.75ZM207.999 363.125C192.999 355.75 176.624 352 159.999 352C106.999 352 63.999 387.75 63.999 432S106.999 512 159.999 512C209.374 512 249.499 480.875 254.874 440.875C255.624 438.125 255.999 435.125 255.999 432.25V296.883L207.999 259.262V363.125ZM159.999 464C131.749 464 111.999 447.125 111.999 432S131.749 400 159.999 400S207.999 416.875 207.999 432S188.249 464 159.999 464Z" })
  }
));
MusicSlashRegular.displayName = "MusicSlashRegular";
var MusicSlash_default = MusicSlashRegular;
