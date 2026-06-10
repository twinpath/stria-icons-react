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
var ArrowDownZA_exports = {};
__export(ArrowDownZA_exports, {
  default: () => ArrowDownZA_default
});
module.exports = __toCommonJS(ArrowDownZA_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowDownZADuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 96H370.75L297.375 169.375C288.219 178.531 285.485 192.281 290.438 204.25S307.063 224 320 224H448C465.672 224 480 209.688 480 192S465.672 160 448 160H397.25L470.625 86.625C479.782 77.469 482.516 63.719 477.563 51.75S460.938 32 448 32H320C302.329 32 288 46.312 288 64S302.329 96 320 96ZM492.614 433.312L412.621 272.359C401.78 250.547 366.221 250.547 355.379 272.359L275.387 433.312C267.481 449.219 273.887 468.551 289.698 476.504C305.571 484.426 324.741 477.98 332.631 462.105L339.786 447.711H428.215L435.37 462.105C441.543 474.531 459.344 485.977 478.303 476.504C494.114 468.551 500.52 449.219 492.614 433.312ZM367.784 391.375L384 358.746L400.217 391.375H367.784Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16.408 373.96C4.472 360.913 5.347 340.647 18.377 328.694C24.517 323.065 32.267 320.28 39.986 320.28C48.658 320.28 57.283 323.784 63.595 330.667L96 366.062V64.03C96 46.327 110.328 31.999 128 31.999S160 46.327 160 64.03V366.062L192.404 330.667C204.357 317.655 224.607 316.749 237.623 328.694C250.652 340.647 251.527 360.913 239.591 373.96L151.593 470.054C139.468 483.315 116.531 483.315 104.406 470.054L16.408 373.96Z" })
    ]
  }
));
ArrowDownZADuotone.displayName = "ArrowDownZADuotone";
var ArrowDownZA_default = ArrowDownZADuotone;
