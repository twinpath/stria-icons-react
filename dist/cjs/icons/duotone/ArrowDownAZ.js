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
var ArrowDownAZ_exports = {};
__export(ArrowDownAZ_exports, {
  default: () => ArrowDownAZ_default
});
module.exports = __toCommonJS(ArrowDownAZ_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowDownAZDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 416H397.25L470.625 342.625C479.782 333.469 482.516 319.719 477.563 307.75S460.938 288 448 288H320C302.329 288 288 302.312 288 320S302.329 352 320 352H370.75L297.375 425.375C288.219 434.531 285.485 448.281 290.438 460.25S307.063 480 320 480H448C465.672 480 480 465.688 480 448S465.672 416 448 416ZM492.614 209.312L412.621 48.359C401.78 26.547 366.221 26.547 355.379 48.359L275.387 209.312C267.481 225.219 273.887 244.551 289.698 252.504C305.571 260.426 324.741 253.98 332.631 238.105L339.786 223.711H428.215L435.37 238.105C441.543 250.531 459.344 261.977 478.303 252.504C494.114 244.551 500.52 225.219 492.614 209.312ZM367.784 167.375L384 134.746L400.217 167.375H367.784Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M151.593 470.054C139.468 483.315 116.531 483.315 104.406 470.054L16.408 373.96C4.472 360.913 5.347 340.647 18.377 328.694C31.392 316.749 51.642 317.655 63.595 330.667L96 366.062V64.03C96 46.327 110.328 31.999 128 31.999S160 46.327 160 64.03V366.062L192.404 330.667C203.861 318.175 224.074 316.272 237.623 328.694C250.652 340.647 251.527 360.913 239.591 373.96L151.593 470.054Z" })
    ]
  }
));
ArrowDownAZDuotone.displayName = "ArrowDownAZDuotone";
var ArrowDownAZ_default = ArrowDownAZDuotone;
