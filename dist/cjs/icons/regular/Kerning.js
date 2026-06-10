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
var Kerning_exports = {};
__export(Kerning_exports, {
  default: () => Kerning_default
});
module.exports = __toCommonJS(Kerning_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const KerningRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M441.813 2.094C429.75 -3.344 415.532 2.094 410.094 14.188L202.094 478.188C196.688 490.281 202.094 504.469 214.188 509.906C217.375 511.344 220.719 512 224 512C233.157 512 241.907 506.719 245.907 497.812L453.907 33.812C459.313 21.719 453.907 7.531 441.813 2.094ZM306.707 98.531C294.866 92.625 280.459 97.438 274.524 109.281L160 338.344L45.477 109.281C39.541 97.406 25.135 92.594 13.293 98.531C1.418 104.469 -3.394 118.875 2.543 130.719L138.534 402.719C142.596 410.875 150.907 416 160 416S177.405 410.875 181.467 402.719L317.457 130.719C323.395 118.875 318.582 104.469 306.707 98.531ZM621.957 382.312L501.967 110.312C494.28 92.937 465.721 92.937 458.034 110.312L338.043 382.312C332.7 394.437 338.2 408.594 350.323 413.969C362.416 419.25 376.602 413.812 381.977 401.687L403.895 352H556.106L578.024 401.688C581.993 410.656 590.772 416 599.991 416C603.241 416 606.522 415.344 609.678 413.969C621.801 408.594 627.301 394.438 621.957 382.312ZM425.067 304L480 179.469L534.934 304H425.067Z" })
  }
));
KerningRegular.displayName = "KerningRegular";
var Kerning_default = KerningRegular;
