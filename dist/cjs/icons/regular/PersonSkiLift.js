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
var PersonSkiLift_exports = {};
__export(PersonSkiLift_exports, {
  default: () => PersonSkiLift_default
});
module.exports = __toCommonJS(PersonSkiLift_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PersonSkiLiftRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M111.973 127.969C138.483 127.969 159.991 106.474 159.991 79.98S138.483 31.992 111.973 31.992S63.955 53.487 63.955 79.98S85.463 127.969 111.973 127.969ZM256.027 0H224.015V215.947L256.027 207.949V0ZM191.628 381.282C204.258 377.158 211.01 363.536 206.759 350.914C202.632 338.292 189.127 331.419 176.372 335.668L157.99 341.917C138.983 348.29 117.975 339.417 109.222 321.172L45.698 188.204C39.946 176.332 25.69 171.208 13.686 176.957C1.681 182.705 -3.321 196.952 2.307 208.949L65.956 341.917C80.961 373.159 112.348 391.904 145.486 391.904C158.115 391.904 162.492 391.03 191.628 381.282ZM488.115 287.93C474.86 287.93 464.106 298.677 464.106 311.924C464.106 325.795 455.353 338.417 442.348 343.166L312.048 391.404V255.938C312.048 240.191 297.043 228.944 282.287 232.693L188.752 256.062L148.987 170.583C141.609 154.587 122.727 147.464 106.471 154.962C93.841 160.711 82.337 179.206 90.715 197.452L138.108 298.052C142.86 308.55 154.614 314.173 165.743 311.174L263.905 286.68V409.15L111.598 465.511C99.218 470.135 92.716 483.882 97.342 496.254C100.969 506.001 110.222 512 119.851 512C122.727 512 125.478 511.5 128.229 510.5L458.854 388.405C490.616 376.658 511.999 345.916 511.999 312.049C512.124 298.677 501.37 287.93 488.115 287.93Z" })
  }
));
PersonSkiLiftRegular.displayName = "PersonSkiLiftRegular";
var PersonSkiLift_default = PersonSkiLiftRegular;
