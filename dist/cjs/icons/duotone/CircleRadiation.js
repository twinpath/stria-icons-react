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
var CircleRadiation_exports = {};
__export(CircleRadiation_exports, {
  default: () => CircleRadiation_default
});
module.exports = __toCommonJS(CircleRadiation_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleRadiationDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 224C238.328 224 224 238.326 224 256S238.328 288 256 288C273.674 288 288 273.674 288 256S273.674 224 256 224ZM256 16C123.42 16 16 123.42 16 256S123.42 496 256 496C388.582 496 496 388.58 496 256S388.582 16 256 16ZM256 432C158.953 432 80 353.047 80 256S158.953 80 256 80S432 158.953 432 256S353.047 432 256 432Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M226.42 208.645L184.768 141.943C179.588 133.65 168.34 132.016 160.729 138.154C130.782 162.307 110.073 197.406 105.131 237.438C103.924 247.207 111.192 256 121.037 256H199.992C199.992 236.004 210.61 218.553 226.42 208.645ZM285.604 303.336C276.991 308.744 266.891 312 255.992 312C245.106 312 235.016 308.748 226.408 303.35L184.672 370.15C179.461 378.488 183.059 389.221 191.942 393.438C211.405 402.676 233.045 408 255.992 408C278.967 408 300.633 402.666 320.116 393.408C328.998 389.189 332.592 378.455 327.377 370.117L285.604 303.336ZM351.362 138.229C343.758 132.084 332.506 133.711 327.321 141.998L285.608 208.666C301.397 218.58 311.992 236.021 311.992 256H390.95C400.793 256 408.061 247.209 406.856 237.439C401.922 197.453 381.254 162.381 351.362 138.229Z" })
    ]
  }
));
CircleRadiationDuotone.displayName = "CircleRadiationDuotone";
var CircleRadiation_default = CircleRadiationDuotone;
