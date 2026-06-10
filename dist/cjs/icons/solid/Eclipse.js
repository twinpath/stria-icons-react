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
var Eclipse_exports = {};
__export(Eclipse_exports, {
  default: () => Eclipse_default
});
module.exports = __toCommonJS(Eclipse_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const EclipseSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M464.009 80.021C366.763 80.021 288.017 158.762 288.017 256S366.763 431.979 464.009 431.979S640 353.238 640 256S561.254 80.021 464.009 80.021ZM165.523 346.489C115.651 296.62 115.651 215.38 165.523 165.511C200.646 130.39 251.019 120.517 295.267 134.765C302.766 124.391 311.141 114.767 320.391 105.893L271.518 9.655C265.143 -3.218 246.894 -3.218 240.52 9.655L193.272 104.269L92.777 70.773C79.152 66.273 66.278 79.272 70.778 92.77L104.276 193.133L9.656 240.502C-3.219 246.876 -3.219 265.124 9.656 271.498L104.276 318.742L70.778 419.23C66.278 432.853 79.277 445.727 92.777 441.227L193.147 407.732L240.395 502.345C246.769 515.218 265.018 515.218 271.393 502.345L318.766 407.732L324.015 409.481C313.266 399.732 303.766 388.984 295.267 377.235C251.019 391.483 200.646 381.61 165.523 346.489ZM256.019 160.012C203.146 160.012 160.023 203.131 160.023 256S203.146 351.988 256.019 351.988C263.768 351.988 271.143 350.738 278.268 349.114C264.143 321.117 256.019 289.496 256.019 256S264.143 190.883 278.268 162.886C271.143 161.262 263.768 160.012 256.019 160.012Z" })
  }
));
EclipseSolid.displayName = "EclipseSolid";
var Eclipse_default = EclipseSolid;
