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
var PlanetRinged_exports = {};
__export(PlanetRinged_exports, {
  default: () => PlanetRinged_default
});
module.exports = __toCommonJS(PlanetRinged_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PlanetRingedDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M323.335 323.336C186.954 459.717 46.213 540.114 9.072 502.914C-14.433 479.446 9.095 414.587 63.941 335.638C70.169 350.56 78.583 364.197 87.931 377.137C78.125 396.96 75.292 411.439 81.533 417.679C100.098 436.244 190.397 376.045 283.222 283.22C376.047 190.397 436.246 100.098 417.681 81.533C411.441 75.292 396.962 78.126 377.137 87.933C364.197 78.585 350.56 70.169 335.638 63.94C414.587 9.095 479.446 -14.431 502.914 9.07C540.114 46.211 459.717 186.954 323.335 323.336Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M412.637 119.417C374.507 75.725 318.553 47.988 256.006 47.988C141.128 47.988 48 141.115 48 255.994C48 318.538 75.739 374.491 119.43 412.623C158.466 394.105 220.235 346.221 283.235 283.221C346.235 220.223 394.119 158.454 412.637 119.417ZM448.119 176.265C416.153 222.295 373.591 273.094 323.348 323.337S222.306 416.141 176.277 448.106C200.838 458.312 227.751 463.999 256.006 463.999C370.884 463.999 464.012 370.872 464.012 255.994C464.012 227.739 458.324 200.826 448.119 176.265Z" })
    ]
  }
));
PlanetRingedDuotone.displayName = "PlanetRingedDuotone";
var PlanetRinged_default = PlanetRingedDuotone;
