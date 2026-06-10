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
var Filters_exports = {};
__export(Filters_exports, {
  default: () => Filters_default
});
module.exports = __toCommonJS(Filters_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FiltersThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M308.389 282.82L271.997 325.51V450.998C271.997 455.936 269.387 460.232 265.028 462.498C260.637 464.795 255.606 464.482 251.559 461.654L181.542 412.654C178.073 410.232 175.993 406.262 175.993 402.012V325.51L20.364 142.926C15.629 137.207 14.661 129.799 17.801 123.127C21.083 116.158 27.723 112.002 35.583 112.002H159.993C164.415 112.002 167.993 108.424 167.993 104.002S164.415 96.002 159.993 96.002H35.583C21.567 96.002 9.208 103.783 3.315 116.314C-2.435 128.564 -0.622 142.676 8.112 153.223L159.993 331.416V402.012C159.993 411.482 164.633 420.373 172.368 425.764L242.372 474.75C247.34 478.234 253.137 480 258.965 480C263.559 480 268.169 478.906 272.419 476.703C282.028 471.688 287.999 461.842 287.999 450.998V331.416L320.577 293.195C323.436 289.836 323.03 284.789 319.67 281.914C316.342 279.07 311.28 279.43 308.389 282.82ZM636.682 52.312C630.807 39.781 618.43 32 604.415 32H227.588C213.573 32 201.198 39.781 195.323 52.312C189.573 64.547 191.385 78.627 200.135 89.158L352.001 267.102V370.105C352.001 379.559 356.641 388.449 364.391 393.855L434.393 442.764C439.362 446.232 445.143 447.998 450.971 447.998C455.567 447.998 460.192 446.904 464.442 444.686C474.036 439.686 480.004 429.857 480.004 419.029V267.102L631.948 89.08C640.62 78.627 642.432 64.547 636.682 52.312ZM619.711 78.783L464.004 261.195V419.029C464.004 423.936 461.411 428.232 457.051 430.498C452.659 432.811 447.612 432.482 443.549 429.639L373.547 380.73C370.079 378.309 368.001 374.34 368.001 370.105V261.195L212.37 78.861C207.635 73.156 206.682 65.766 209.807 59.109C213.073 52.156 219.713 48 227.588 48H604.415C612.29 48 618.93 52.156 622.196 59.109C625.323 65.766 624.37 73.156 619.711 78.783Z" })
  }
));
FiltersThin.displayName = "FiltersThin";
var Filters_default = FiltersThin;
