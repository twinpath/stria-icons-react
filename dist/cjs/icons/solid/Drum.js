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
var Drum_exports = {};
__export(Drum_exports, {
  default: () => Drum_default
});
module.exports = __toCommonJS(Drum_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DrumSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M431.133 122.07L501.152 76.143C512.246 68.869 515.34 53.977 508.059 42.869C500.84 31.795 485.965 28.635 474.84 35.939L368.357 105.783C318.545 96.996 271.26 96.096 256 96.096H255.996C255.994 96.096 255.996 96.096 255.994 96.096C219.494 96.096 0 100.6 0 208.35V368.4C0 398.666 27.504 426.076 71.998 446.25V344.373C71.998 331.102 82.744 320.346 95.998 320.346S119.996 331.102 119.996 344.373V463.277C153.045 472.385 191.062 478.332 231.994 480V376.41C231.994 363.139 242.74 352.383 255.994 352.383C255.996 352.383 255.994 352.383 255.996 352.383H256C269.254 352.383 280 363.139 280 376.41V480C320.932 478.332 358.947 472.385 391.996 463.277V344.373C391.996 331.102 402.742 320.346 415.996 320.346S439.996 331.102 439.996 344.373V446.25C484.49 426.076 511.994 398.666 511.994 368.4V208.35C511.994 164.895 476.131 138.418 431.133 122.07ZM256 272.549H255.996C255.994 272.549 255.996 272.549 255.994 272.549C141.121 272.549 48 243.766 48 208.35S141.121 144.275 255.994 144.275C255.996 144.275 255.994 144.275 255.996 144.275H256C273.502 144.275 290.404 145.014 306.643 146.266L242.842 188.115C231.748 195.389 228.654 210.281 235.936 221.389C240.529 228.428 248.186 232.244 256.029 232.244C260.529 232.244 265.092 230.977 269.154 228.318L378.447 156.627C430.221 168.275 463.994 187.064 463.994 208.35C463.994 243.766 370.871 272.549 256 272.549Z" })
  }
));
DrumSolid.displayName = "DrumSolid";
var Drum_default = DrumSolid;
