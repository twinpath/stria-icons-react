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
var FloppyDiskCircleArrowRight_exports = {};
__export(FloppyDiskCircleArrowRight_exports, {
  default: () => FloppyDiskCircleArrowRight_default
});
module.exports = __toCommonJS(FloppyDiskCircleArrowRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FloppyDiskCircleArrowRightDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M433.938 129.938L350.062 46.062C342.328 38.328 327.051 32 316.113 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H296.234C278.588 458.633 265.953 433.01 259.951 404.928C249.701 411.904 237.334 416 224 416C188.656 416 160 387.344 160 352S188.656 288 224 288C240.928 288 256.213 294.697 267.658 305.43C292.908 239.164 356.869 192 432 192C437.402 192 442.723 192.33 448 192.807V163.887C448 152.949 441.672 137.672 433.938 129.938ZM320 208C320 216.836 312.836 224 304 224H80C71.164 224 64 216.836 64 208V112C64 103.162 71.164 96 80 96H304C312.836 96 320 103.162 320 112V208Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M432.002 224C352.463 224 288 288.463 288 368S352.463 512 432.002 512C511.537 512 576 447.537 576 368S511.537 224 432.002 224ZM507.312 379.312L451.312 435.312C448.187 438.438 444.094 440 440 440S431.812 438.438 428.688 435.312C422.438 429.062 422.438 418.937 428.688 412.688L457.375 384H368C359.164 384 352 376.836 352 368S359.164 352 368 352H457.375L428.688 323.312C422.438 317.062 422.438 306.937 428.688 300.688S445.063 294.438 451.312 300.688L507.312 356.688C513.562 362.938 513.562 373.062 507.312 379.312Z" })
    ]
  }
));
FloppyDiskCircleArrowRightDuotone.displayName = "FloppyDiskCircleArrowRightDuotone";
var FloppyDiskCircleArrowRight_default = FloppyDiskCircleArrowRightDuotone;
