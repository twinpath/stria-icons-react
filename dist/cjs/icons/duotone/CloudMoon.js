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
var CloudMoon_exports = {};
__export(CloudMoon_exports, {
  default: () => CloudMoon_default
});
module.exports = __toCommonJS(CloudMoon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CloudMoonDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M565.117 298.375C472.119 316.125 386.621 244.75 386.621 150.75C386.621 96.5 415.621 46.75 462.744 19.875C470.119 15.75 468.119 4.75 459.994 3.25C448.245 1.125 436.62 0 424.87 0C318.998 0 233 85.875 233 192C233 200.5 233.625 208.75 234.75 217C240.625 221.25 246.375 225.875 251.5 231.25C262.874 226.5 275.124 224 287.874 224C340.747 224 383.871 267.125 383.871 320C383.871 323.625 383.621 327.25 383.246 330.75C406.871 341.5 425.62 360.25 436.745 383.25C491.119 379.875 540.492 354 573.866 312.875C579.116 306.375 573.367 296.75 565.117 298.375Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M415.99 432C415.99 476.25 380.241 512 335.992 512H95.998C42.999 512 0 469 0 416C0 374.125 27.124 338.75 64.623 325.75C64.498 323.75 63.998 322 63.998 320C63.998 267 106.997 224 159.996 224C196.245 224 227.369 244.25 243.744 273.875C255.244 262.875 270.743 256 287.993 256C323.242 256 351.991 284.75 351.991 320C351.991 332 348.491 343.125 342.742 352.75C383.741 356.25 415.99 390.125 415.99 432Z" })
    ]
  }
));
CloudMoonDuotone.displayName = "CloudMoonDuotone";
var CloudMoon_default = CloudMoonDuotone;
