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
var ChartLineDown_exports = {};
__export(ChartLineDown_exports, {
  default: () => ChartLineDown_default
});
module.exports = __toCommonJS(ChartLineDown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChartLineDownThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M186.35 261.656C189.475 264.781 194.537 264.781 197.662 261.656L288.006 171.312L452.693 336H352.006C347.6 336 344.006 339.578 344.006 344S347.6 352 352.006 352H472.006C476.412 352 480.006 348.422 480.006 344V224C480.006 219.578 476.412 216 472.006 216S464.006 219.578 464.006 224V324.688L293.662 154.344C290.537 151.219 285.475 151.219 282.35 154.344L192.006 244.688L109.656 162.336C108.094 160.773 106.062 159.992 104 159.992S99.906 160.773 98.344 162.336C95.219 165.461 95.219 170.523 98.344 173.648L186.35 261.656ZM504 464H72C41.125 464 16 438.875 16 408V40C16 35.594 12.406 32 8 32S0 35.594 0 40V408C0 447.688 32.312 480 72 480H504C508.406 480 512 476.406 512 472S508.406 464 504 464Z" })
  }
));
ChartLineDownThin.displayName = "ChartLineDownThin";
var ChartLineDown_default = ChartLineDownThin;
