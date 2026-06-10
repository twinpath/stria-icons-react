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
var BullseyePointer_exports = {};
__export(BullseyePointer_exports, {
  default: () => BullseyePointer_default
});
module.exports = __toCommonJS(BullseyePointer_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BullseyePointerRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M267.686 244.688C263.592 240.594 257.545 239.062 251.983 240.609L27.983 304.609C21.467 306.469 16.827 312.234 16.405 318.984C15.983 325.75 19.842 332.047 26.077 334.703L100.514 366.609L16.372 450.754C3.877 463.25 3.875 483.508 16.37 496H16.372C28.866 508.5 49.125 508.5 61.622 496L145.764 411.859L177.67 486.297C180.202 492.219 185.999 496 192.374 496C192.702 496 193.045 495.984 193.389 495.969C200.139 495.547 205.905 490.906 207.764 484.391L271.764 260.391C273.358 254.812 271.795 248.797 267.686 244.688ZM256.374 16C123.834 16 16.374 123.418 16.374 256C16.374 262.316 16.838 268.516 17.317 274.711C17.981 274.484 18.514 274.031 19.192 273.84L64.678 260.844C64.637 259.219 64.434 257.633 64.434 256C64.434 149.828 150.231 64 256.374 64S448.313 149.828 448.313 256S362.516 448 256.374 448C254.733 448 253.143 447.797 251.512 447.758L238.536 493.172C238.34 493.852 237.885 494.391 237.663 495.055C243.856 495.535 250.057 496 256.374 496C388.913 496 496.374 388.578 496.374 256C496.374 123.418 388.913 16 256.374 16ZM279.795 348.758L265.417 399.09C340.676 394.344 400.37 332.492 400.37 256C400.37 176.406 335.932 112 256.374 112C179.913 112 118.038 171.668 113.288 246.957L163.522 232.605C174.081 191.039 211.625 160 256.374 160C309.229 160 352.463 203.125 352.463 256C352.463 300.754 321.362 338.215 279.795 348.758Z" })
  }
));
BullseyePointerRegular.displayName = "BullseyePointerRegular";
var BullseyePointer_default = BullseyePointerRegular;
