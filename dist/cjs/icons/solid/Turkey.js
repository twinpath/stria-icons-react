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
var Turkey_exports = {};
__export(Turkey_exports, {
  default: () => Turkey_default
});
module.exports = __toCommonJS(Turkey_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TurkeySolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M636.372 155.601C628.997 175.103 609.747 188.978 588.872 189.479C578.122 189.854 567.622 186.978 558.622 181.228C543.497 171.602 524.747 169.602 509.997 179.853C482.372 199.104 440.123 237.107 419.373 300.361C404.998 344.364 367.498 378.866 321.623 383.366C317.373 383.741 313.123 383.991 308.998 383.991C251.624 383.991 207.249 344.489 195.374 294.235C194.499 290.61 191.374 287.985 187.624 287.985H171.249C168.749 287.985 166.499 288.985 164.999 290.86C163.499 292.61 162.874 295.111 163.249 297.361C167.249 317.362 175.374 336.363 187.124 352.989C215.249 392.992 259.749 415.994 308.998 415.994C314.248 415.994 319.373 415.744 324.748 415.244C381.623 409.618 430.748 368.365 449.748 310.237C460.998 274.984 482.247 243.732 510.747 220.106C551.497 272.984 575.997 333.988 575.997 383.991C575.997 498.874 446.998 512 287.999 512S0 498.874 0 383.991S128.999 95.972 287.999 95.972C333.873 95.972 376.998 110.598 415.373 133.85C439.248 123.474 447.998 116.599 463.498 105.848C476.748 96.722 481.622 80.346 477.997 64.72C476.497 57.845 476.372 50.719 477.622 43.844C480.372 28.593 489.497 15.342 502.747 7.466C515.997 -0.409 531.997 -2.159 546.622 2.716C566.497 9.216 580.747 27.843 582.747 48.719C583.997 61.595 580.372 74.596 572.497 84.972C580.247 82.721 588.372 82.221 596.372 83.596C628.497 89.472 648.622 123.224 636.372 155.601Z" })
  }
));
TurkeySolid.displayName = "TurkeySolid";
var Turkey_default = TurkeySolid;
