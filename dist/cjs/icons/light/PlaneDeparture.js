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
var PlaneDeparture_exports = {};
__export(PlaneDeparture_exports, {
  default: () => PlaneDeparture_default
});
module.exports = __toCommonJS(PlaneDeparture_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PlaneDepartureLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M624 480H17.111C8.275 480 1.111 487.162 1.111 496C1.111 504.836 8.275 512 17.111 512H624C632.8 512 640 504.799 640 496C640 487.199 632.8 480 624 480ZM80.488 371.25C88.238 379.375 98.863 384 109.988 384L237.115 383.875C248.367 383.75 259.492 381.25 269.617 376.25L552.623 235.875C581.873 221.5 605.5 201.375 621 177.75C639 150.5 643.375 127.5 634.25 109.375C622.625 86.5 592.248 78.625 561.498 78.625C535.498 78.625 508.998 85.125 482.746 98.25L389.994 144.25L181.24 67.625C177.24 65.25 172.74 64 167.99 64C163.99 64 160.115 64.875 156.49 66.625L92.488 98.375C84.988 102.125 79.863 109.375 78.738 117.75C77.613 127 82.113 136.125 90.238 141L226.74 225.125L142.738 266.75L75.988 233.875C68.738 230.25 60.361 230.25 53.111 233.875L14.111 253.25C7.111 256.625 1.986 263.125 0.486 270.75S0.986 286.375 6.111 292.25L80.488 371.25ZM64.613 263.875L142.863 302.375L292.742 228.125L118.488 121.25L167.865 96.75L391.869 178.875L496.871 126.875C518.748 116.125 540.498 110.625 561.498 110.625C577.748 110.625 600.875 114.25 605.75 123.875C609.125 130.625 604.875 144.125 594.373 160.125C581.998 179 562.623 195.375 538.498 207.25L255.367 347.5C249.742 350.375 243.492 351.875 237.115 351.875L110.113 352C107.738 352 105.488 351 103.738 349.375L36.486 277.75L64.613 263.875Z" })
  }
));
PlaneDepartureLight.displayName = "PlaneDepartureLight";
var PlaneDeparture_default = PlaneDepartureLight;
