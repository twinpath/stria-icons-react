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
const PersonSkiLiftSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M111.946 128C138.449 128 159.952 106.5 159.952 80S138.449 32 111.946 32S63.939 53.5 63.939 80S85.442 128 111.946 128ZM255.965 0H223.961V184L255.965 176V0ZM487.997 288C474.745 288 463.994 298.75 463.994 312C463.994 325.875 455.242 338.5 442.241 343.25L319.974 388.5V248C319.974 238.125 315.473 228.75 307.722 222.75C299.846 216.75 289.72 214.5 280.219 217L211.834 234L187.706 180.25C176.83 156.125 148.451 145.25 124.197 156.25C100.069 167.125 89.193 195.5 100.194 219.75C100.194 219.75 127.073 285.625 127.948 287.75C135.824 306.875 150.701 315.375 167.703 311.125L255.965 289V412.25L111.696 465.5C99.194 470.125 92.818 483.875 97.444 496.25C101.069 506 110.196 512 119.947 512C122.697 512 125.573 511.5 128.198 510.5L458.743 388.375C490.622 376.625 512 345.875 512 312C512 298.75 501.249 288 487.997 288ZM191.582 381.375C204.208 377.25 210.959 363.625 206.709 351C202.583 338.375 189.081 331.5 176.33 335.75L157.952 342C138.95 348.375 117.947 339.5 109.195 321.25L45.687 188.25C39.936 176.375 25.684 171.25 13.683 177C1.681 182.75 -3.32 197 2.306 209L65.94 342C80.942 373.25 112.321 392 145.45 392C158.077 392 162.453 391.125 191.582 381.375Z" })
  }
));
PersonSkiLiftSolid.displayName = "PersonSkiLiftSolid";
var PersonSkiLift_default = PersonSkiLiftSolid;
