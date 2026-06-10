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
var PaperPlane_exports = {};
__export(PaperPlane_exports, {
  default: () => PaperPlane_default
});
module.exports = __toCommonJS(PaperPlane_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PaperPlaneRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M501.564 4.186C493.97 -0.97 484.158 -1.408 476.126 3.123L12.121 267.124C4.184 271.655 -0.504 280.312 0.043 289.437C0.59 298.562 6.278 306.593 14.7 310.124L167.998 374.507V488C167.998 496.781 172.795 504.844 180.498 509.063C184.092 511.031 188.045 512 191.998 512C196.514 512 201.03 510.719 204.983 508.188L316.142 436.726L414.704 478.125C417.688 479.375 420.845 480 424.001 480C428.079 480 432.142 478.969 435.782 476.906C442.235 473.281 446.657 466.844 447.735 459.531L511.736 27.53C513.096 18.436 509.127 9.373 501.564 4.186ZM369.252 119.163L181.274 328.027L78.231 284.749L369.252 119.163ZM215.999 444.031V394.671L262.444 414.179L215.999 444.031ZM404.798 421.906L228.151 347.714L452.743 98.171L404.798 421.906Z" })
  }
));
PaperPlaneRegular.displayName = "PaperPlaneRegular";
var PaperPlane_default = PaperPlaneRegular;
