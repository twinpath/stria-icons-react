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
var Scribble_exports = {};
__export(Scribble_exports, {
  default: () => Scribble_default
});
module.exports = __toCommonJS(Scribble_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ScribbleLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M430.123 512C403.467 512 377.374 499.546 359.702 476.419C333.655 442.322 335.765 399.084 365.061 366.284L468.389 245.476C483.717 229.178 483.686 204.567 468.795 188.893C461.139 180.814 450.78 176.298 439.655 176.158C428.577 176.83 418.061 180.314 410.217 188.221L158.281 455.933C144 470.231 125.656 478.372 105.75 477.513C86 477.263 67.672 469.215 54.094 454.886C27.313 426.555 27.641 382.504 54.844 354.595L277.28 126.544C297.077 104.48 296.155 70.07 274.734 48.678C263.64 37.599 249.093 31.583 233.203 32.004C217.5 32.348 203.015 38.911 192.406 50.49L27.219 212.942C20.907 219.13 10.751 219.052 4.594 212.755C-1.609 206.457 -1.515 196.316 4.782 190.128L169.39 28.27C185.375 10.799 208 0.549 232.499 0.002C256.859 -0.139 280.046 8.706 297.358 26.051C330.811 59.46 332.249 113.215 300.64 148.405L77.75 376.941C62.578 392.505 62.391 417.085 77.344 432.884C84.906 440.884 95.156 445.369 106.172 445.51C106.344 445.525 106.531 445.525 106.719 445.525C117.531 445.525 127.656 441.322 135.297 433.665L387.202 165.969C401.499 151.578 420.311 143.936 440.014 144.155C459.889 144.389 478.358 152.453 492.014 166.86C518.576 194.847 518.654 238.773 492.186 266.853L389.155 387.348C366.358 412.866 372.171 440.009 385.124 456.98C399.389 475.669 426.577 488.139 454.983 473.95L489.248 457.995C497.311 454.229 506.795 457.745 510.498 465.746C514.232 473.747 510.764 483.279 502.748 486.998L468.889 502.765C456.451 508.984 443.217 512 430.123 512Z" })
  }
));
ScribbleLight.displayName = "ScribbleLight";
var Scribble_default = ScribbleLight;
