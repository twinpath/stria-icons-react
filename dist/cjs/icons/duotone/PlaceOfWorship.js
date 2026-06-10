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
var PlaceOfWorship_exports = {};
__export(PlaceOfWorship_exports, {
  default: () => PlaceOfWorship_default
});
module.exports = __toCommonJS(PlaceOfWorship_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PlaceOfWorshipDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M620.625 366.438L480 304V512L608 511.938C625.674 511.938 640 497.611 640 479.938V395.938C640 383.062 632.375 371.562 620.625 366.438ZM0 395.938V479.938C0 497.611 14.328 511.938 32 511.938L160 512V304L19.375 366.438C7.625 371.562 0 383.062 0 395.938Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M464.5 250.23L416 221.23V106.148C416 97.666 412.627 89.533 406.625 83.539L331.305 8.345C325.059 2.109 314.941 2.109 308.695 8.345L233.389 83.527C227.379 89.527 224 97.671 224 106.166V221.23L175.5 250.23C165.887 255.978 160 266.357 160 277.558V515.667H256V419.668C256 384.322 284.654 355.668 320 355.668C355.348 355.668 384 384.322 384 419.668V515.667H480V277.558C480 266.357 474.115 255.978 464.5 250.23Z" })
    ]
  }
));
PlaceOfWorshipDuotone.displayName = "PlaceOfWorshipDuotone";
var PlaceOfWorship_default = PlaceOfWorshipDuotone;
