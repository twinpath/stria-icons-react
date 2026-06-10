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
var WineBottle_exports = {};
__export(WineBottle_exports, {
  default: () => WineBottle_default
});
module.exports = __toCommonJS(WineBottle_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WineBottleLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M507.312 84.688L427.312 4.688C421.062 -1.562 410.937 -1.562 404.688 4.688C399.561 9.814 398.875 17.441 402.16 23.508L309.594 115.875C260.969 99.625 207.469 112 170.719 148.75L22.219 297.25C-7.406 327 -7.406 375.125 22.219 404.875L107.094 489.75C121.344 504.125 140.469 512 160.719 512C181.094 512 200.219 504.125 214.469 489.75L363.094 341.125C399.719 304.5 412.094 250.875 395.844 202.125L488.449 109.811C490.83 111.109 493.361 112 496 112C500.094 112 504.188 110.438 507.312 107.312C513.562 101.062 513.562 90.938 507.312 84.688ZM191.969 467.125C175.219 483.75 146.344 483.75 129.719 467.125L44.844 382.25C27.719 365 27.719 337.125 44.844 319.875L59.094 305.625L206.219 452.875L191.969 467.125ZM228.844 430.125L81.719 283L171.094 193.625L318.219 340.75L228.844 430.125ZM340.844 318.125L193.719 171C244.594 120.75 305.469 148.5 307.344 149.25L317.344 153.5L352.281 118.906L393.156 159.781L358.344 194.5L362.469 204.375C379.094 243.5 370.469 288 340.844 318.125ZM415.812 137.188L375.018 96.393L424.635 47.26L465.256 87.881L415.812 137.188Z" })
  }
));
WineBottleLight.displayName = "WineBottleLight";
var WineBottle_default = WineBottleLight;
