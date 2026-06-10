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
var PhoneMissed_exports = {};
__export(PhoneMissed_exports, {
  default: () => PhoneMissed_default
});
module.exports = __toCommonJS(PhoneMissed_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PhoneMissedSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M631.138 376.328C459.582 204.768 180.427 204.76 8.849 376.336C-1.118 386.305 -2.862 401.607 4.619 413.51L57.328 497.844C65.001 510.148 80.441 515.219 94.044 509.904L199.525 467.717C211.916 462.723 219.533 450.107 218.195 436.824L211.574 370.229C281.765 346.264 358.33 346.273 428.55 370.248L421.91 436.805C420.486 450.043 428.169 462.787 440.623 467.717L546.031 509.873C559.57 515.25 575.029 510.096 582.66 497.875L635.388 413.521C642.861 401.607 641.117 386.305 631.138 376.328ZM112.457 157.963C124.619 162.99 135.765 157.936 141.519 152.182L172.224 121.475L225.929 175.18C246.947 196.197 273.812 211.473 303.304 215.182C343.593 220.25 382.443 206.826 410.5 178.75L539.314 49.936C545.562 43.687 545.562 33.557 539.314 27.309L516.691 4.686C510.443 -1.563 500.312 -1.563 494.064 4.686L365.25 133.5C340.363 158.387 299.638 158.387 274.75 133.5L217.474 76.225L248.181 45.52C255.81 37.889 258.103 26.432 253.962 16.457C249.847 6.498 240.109 0 229.328 0H115.998C104.953 0 96 8.953 96 20V133.328C96 144.109 102.484 153.836 112.457 157.963Z" })
  }
));
PhoneMissedSolid.displayName = "PhoneMissedSolid";
var PhoneMissed_default = PhoneMissedSolid;
