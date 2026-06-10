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
var CircleExclamationCheck_exports = {};
__export(CircleExclamationCheck_exports, {
  default: () => CircleExclamationCheck_default
});
module.exports = __toCommonJS(CircleExclamationCheck_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleExclamationCheckLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M449.468 352C443.706 352 438.515 355.193 435.618 360.172C396.817 426.869 322.272 470.291 238.226 463.254C140.378 455.061 60.28 377.475 49.341 279.896C35.29 154.557 133.435 48 255.999 48C351.089 48 431.294 112.201 455.958 199.502C459.315 211.387 474.069 215.387 482.802 206.654C486.778 202.676 488.46 196.855 486.948 191.437C457.933 87.416 360.837 11.801 246.573 16.18C124.831 20.846 24.31 118.588 16.509 240.168C7.544 379.885 118.21 496 255.999 496C344.737 496 421.747 447.584 463.179 375.926C469.315 365.311 461.73 352 449.468 352ZM231.999 368C231.999 381.254 242.745 392 255.999 392S279.999 381.254 279.999 368S269.253 344 255.999 344S231.999 354.746 231.999 368ZM271.999 288V128C271.999 119.156 264.843 112 255.999 112S239.999 119.156 239.999 128V288C239.999 296.844 247.155 304 255.999 304S271.999 296.844 271.999 288ZM571.312 186.016C565.062 179.766 554.937 179.766 548.687 186.016L453.343 281.375L411.312 239.359C405.062 233.109 394.937 233.109 388.687 239.359S382.437 255.734 388.687 261.984L442.03 315.312C445.155 318.438 449.249 320 453.343 320S461.53 318.438 464.655 315.312L571.312 208.641C577.562 202.391 577.562 192.266 571.312 186.016Z" })
  }
));
CircleExclamationCheckLight.displayName = "CircleExclamationCheckLight";
var CircleExclamationCheck_default = CircleExclamationCheckLight;
