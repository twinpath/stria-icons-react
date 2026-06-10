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
var HelmetSafety_exports = {};
__export(HelmetSafety_exports, {
  default: () => HelmetSafety_default
});
module.exports = __toCommonJS(HelmetSafety_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HelmetSafetyDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M574.688 393.656C572.156 387.812 566.375 384 560 384H16C9.625 384 3.844 387.812 1.313 393.656C-1.219 399.531 -0.031 406.344 4.375 411C7.031 413.812 72.031 480 288 480S568.969 413.812 571.625 411C576.031 406.344 577.219 399.531 574.688 393.656Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M544 280.891C544 191.723 482.166 115.473 404.389 83.527L352 174.223V49.777C352 39.914 344.084 32 334.223 32H241.777C231.916 32 224 39.914 224 49.777V174.223L171.611 83.527C93.834 115.473 32 191.723 32 280.891V384H544V280.891Z" })
    ]
  }
));
HelmetSafetyDuotone.displayName = "HelmetSafetyDuotone";
var HelmetSafety_default = HelmetSafetyDuotone;
