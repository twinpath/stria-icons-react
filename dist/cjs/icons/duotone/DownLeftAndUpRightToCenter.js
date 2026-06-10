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
var DownLeftAndUpRightToCenter_exports = {};
__export(DownLeftAndUpRightToCenter_exports, {
  default: () => DownLeftAndUpRightToCenter_default
});
module.exports = __toCommonJS(DownLeftAndUpRightToCenter_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DownLeftAndUpRightToCenterDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M216 272H79.998C67.06 272 55.373 279.797 50.435 291.75C45.466 303.718 48.216 317.468 57.373 326.624L87.436 356.686L9.372 434.753C-3.123 447.248 -3.124 467.507 9.37 480.003L31.99 502.626C44.487 515.124 64.75 515.125 77.247 502.627L155.311 424.561L185.374 454.623C191.499 460.748 199.687 463.998 207.999 463.998C212.125 463.998 216.281 463.201 220.25 461.56C232.218 456.607 240 444.935 240 431.998V296C240 282.745 229.255 272 216 272Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M272 216V80.002C272 67.065 279.781 55.393 291.75 50.44C303.75 45.533 317.469 48.237 326.626 57.377L356.688 87.439L434.752 9.373C447.25 -3.125 467.513 -3.124 480.01 9.374L502.628 31.993C515.124 44.49 515.124 64.751 502.627 77.248L424.564 155.314L454.627 185.376C463.783 194.532 466.533 208.282 461.565 220.25C456.627 232.203 444.939 240 432.002 240H296C282.745 240 272 229.255 272 216Z" })
    ]
  }
));
DownLeftAndUpRightToCenterDuotone.displayName = "DownLeftAndUpRightToCenterDuotone";
var DownLeftAndUpRightToCenter_default = DownLeftAndUpRightToCenterDuotone;
