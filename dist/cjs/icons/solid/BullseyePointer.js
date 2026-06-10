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
const BullseyePointerSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M290.59 309.678L269.75 382.615C333.906 375.678 383.996 322.037 383.996 256C383.996 185.25 326.719 128 256 128C189.992 128 136.328 178.068 129.391 242.248L202.285 221.422C213.719 203.779 233.508 192 256 192C291.238 192 320.059 220.75 320.059 256C320.059 278.504 308.25 298.262 290.59 309.678ZM267.312 244.688C263.219 240.594 257.172 239.062 251.609 240.609L27.609 304.609C21.094 306.469 16.453 312.234 16.031 318.984C15.609 325.75 19.469 332.047 25.703 334.703L100.141 366.611L4.688 462.064C-1.563 468.312 -1.563 478.443 4.688 484.691L27.309 507.314C33.559 513.562 43.688 513.562 49.938 507.314L145.391 411.861L177.297 486.297C179.828 492.219 185.625 496 192 496C192.328 496 192.672 495.984 193.016 495.969C199.766 495.547 205.531 490.906 207.391 484.391L271.391 260.391C272.984 254.812 271.422 248.797 267.312 244.688ZM256 16C123.461 16 16 123.42 16 256C16 262.316 16.465 268.516 16.945 274.709C17.609 274.486 18.141 274.033 18.82 273.84L80.07 256.34C80.07 256.225 80.055 256.115 80.055 256C80.055 158.674 158.703 80 256 80S431.945 158.674 431.945 256S353.297 432 256 432C255.879 432 255.766 431.982 255.645 431.982L238.16 493.172C237.965 493.854 237.508 494.387 237.289 495.055C243.484 495.533 249.68 496 256 496C388.539 496 496 388.58 496 256S388.539 16 256 16Z" })
  }
));
BullseyePointerSolid.displayName = "BullseyePointerSolid";
var BullseyePointer_default = BullseyePointerSolid;
