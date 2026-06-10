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
var PenSwirl_exports = {};
__export(PenSwirl_exports, {
  default: () => PenSwirl_default
});
module.exports = __toCommonJS(PenSwirl_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PenSwirlThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 480C132.5 480 32 379.516 32 256S132.5 32 256 32C283.031 32 308.844 37.059 332.859 45.875L345.318 33.416C317.678 22.283 287.58 16 256 16C123.656 16 16 123.656 16 256S123.656 496 256 496C260.406 496 264 492.422 264 488S260.406 480 256 480ZM466.125 179.139C474.941 203.154 480 228.967 480 256C480 324.688 424.125 380.578 355.438 380.578C319.463 380.578 287.26 365.016 264.492 340.545L246.766 344.092C272.562 375.844 311.426 396.578 355.438 396.578C432.938 396.578 496 333.516 496 256C496 224.42 489.717 194.322 478.584 166.682L466.125 179.139ZM512 69.788C512 58.528 507.704 47.268 499.113 38.678L473.324 12.887C464.732 4.295 453.473 0 442.213 0C430.951 0 419.691 4.295 411.1 12.887L215.691 208.307C212.619 211.379 210.527 215.291 209.676 219.549L192.219 306.836C192.07 307.58 191.999 308.315 191.999 309.035C191.999 315.048 196.952 320 202.965 320C203.684 320 204.418 319.928 205.162 319.779L292.453 302.32C296.711 301.469 300.621 299.375 303.691 296.305L499.109 100.906C507.703 92.314 512 81.051 512 69.788ZM292.377 284.992C291.537 285.832 290.479 286.398 289.314 286.631L209.359 302.713L225.365 222.687C225.598 221.52 226.166 220.459 227.006 219.619L377.652 68.965L443.035 134.348L292.377 284.992ZM487.797 89.592L454.35 123.037L388.965 57.652L422.412 24.201C427.701 18.912 434.732 16 442.211 16C449.691 16 456.723 18.912 462.01 24.201L487.799 49.99C493.088 55.279 496 62.311 496 69.791C496 77.27 493.086 84.303 487.797 89.592Z " })
  }
));
PenSwirlThin.displayName = "PenSwirlThin";
var PenSwirl_default = PenSwirlThin;
