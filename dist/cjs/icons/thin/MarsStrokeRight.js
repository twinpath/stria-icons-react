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
var MarsStrokeRight_exports = {};
__export(MarsStrokeRight_exports, {
  default: () => MarsStrokeRight_default
});
module.exports = __toCommonJS(MarsStrokeRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MarsStrokeRightThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M605.656 250.343L503.832 148.519C500.705 145.39 495.644 145.39 492.517 148.519C489.392 151.648 489.392 156.706 492.517 159.835L580.685 247.999H455.998V188.117C455.998 183.699 452.42 180.117 448 180.117S440 183.699 440 188.117V247.999H383.619C381.705 205.663 364.781 163.878 332.451 131.546C263.719 62.82 152.283 62.816 83.549 131.546C14.816 200.281 14.818 311.718 83.549 380.452C152.283 449.183 263.719 449.183 332.451 380.452C364.779 348.124 381.705 306.335 383.619 263.999H440V323.882C440 326.093 440.894 328.093 442.344 329.538C443.791 330.984 445.789 331.882 448 331.882C452.42 331.882 455.998 328.3 455.998 323.882V263.999H580.685L492.517 352.163C489.392 355.292 489.392 360.351 492.517 363.48C495.644 366.608 500.705 366.608 503.832 363.48L605.656 261.656C608.781 258.531 608.781 253.468 605.656 250.343ZM321.136 369.136C258.754 431.519 157.248 431.522 94.863 369.136S32.48 205.245 94.863 142.863S258.754 80.476 321.136 142.863C383.521 205.249 383.519 306.753 321.136 369.136Z" })
  }
));
MarsStrokeRightThin.displayName = "MarsStrokeRightThin";
var MarsStrokeRight_default = MarsStrokeRightThin;
