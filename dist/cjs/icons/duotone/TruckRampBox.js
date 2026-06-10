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
var TruckRampBox_exports = {};
__export(TruckRampBox_exports, {
  default: () => TruckRampBox_default
});
module.exports = __toCommonJS(TruckRampBox_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TruckRampBoxDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M543.937 320C490.918 320 447.937 362.98 447.937 416S490.918 512 543.937 512S639.937 469.02 639.937 416S596.957 320 543.937 320ZM247.699 123.744C245.449 115.246 236.699 110.246 228.199 112.496L150.953 133.244L175.701 225.99L113.953 242.49L89.205 149.744L11.832 170.492C3.332 172.742 -1.793 181.617 0.582 190.117L50.205 375.609C52.455 384.109 61.205 389.234 69.705 386.859L286.197 328.861C294.697 326.611 299.697 317.738 297.447 309.238L247.699 123.744Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M175.763 225.99L151.015 133.244L89.267 149.744L114.015 242.49L175.763 225.99ZM416.008 0C380.662 0 352.008 28.652 352.008 64V355.611L5.894 449.982C1.644 451.232 -0.856 455.607 0.269 459.732L12.894 506.105C14.144 510.355 18.519 512.855 22.769 511.73L417.426 404.045C423.554 339.072 477.424 288 544 288C582.451 288 616.537 305.305 640 332.145V0H416.008Z" })
    ]
  }
));
TruckRampBoxDuotone.displayName = "TruckRampBoxDuotone";
var TruckRampBox_default = TruckRampBoxDuotone;
