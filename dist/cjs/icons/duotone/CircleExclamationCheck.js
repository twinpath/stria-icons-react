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
const CircleExclamationCheckDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M408.402 335.596L352.402 279.596C330.568 257.762 330.568 222.236 352.402 200.404C362.98 189.826 377.043 184 391.998 184S421.016 189.826 431.594 200.404L446.504 215.312L482.322 176.736C449.553 83.195 360.73 16 256 16C123.451 16 16 123.451 16 256S123.451 496 256 496C358.232 496 445.301 431.967 479.889 341.912C470.811 348.16 459.855 351.783 447.998 352C433.258 352 418.826 346.021 408.402 335.596ZM232 152C232 138.75 242.75 128 256 128S280 138.75 280 152V280C280 293.25 269.25 304 256 304S232 293.25 232 280V152ZM256 400C238.637 400 224.562 385.924 224.562 368.561C224.562 351.199 238.637 337.123 256 337.123S287.438 351.199 287.438 368.561C287.438 385.924 273.363 400 256 400Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M569.594 200.328L465.594 312.328C461.156 317.109 454.969 319.875 448.437 320H448C441.641 320 435.531 317.469 431.031 312.969L375.031 256.969C365.656 247.594 365.656 232.406 375.031 223.031S399.594 213.656 408.969 223.031L447.359 261.422L534.406 167.672C543.422 157.953 558.625 157.406 568.328 166.406C578.047 175.438 578.609 190.625 569.594 200.328Z" })
    ]
  }
));
CircleExclamationCheckDuotone.displayName = "CircleExclamationCheckDuotone";
var CircleExclamationCheck_default = CircleExclamationCheckDuotone;
