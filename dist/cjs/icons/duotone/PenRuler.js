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
var PenRuler_exports = {};
__export(PenRuler_exports, {
  default: () => PenRuler_default
});
module.exports = __toCommonJS(PenRuler_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PenRulerDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M138.246 127.055C136.965 128.336 134.434 129.368 132.621 129.368C130.809 129.368 128.309 128.336 127.028 127.055L115.809 115.837C112.716 112.743 112.716 107.712 115.809 104.634L177.495 42.948L143.871 9.308C131.465 -3.082 111.372 -3.082 98.997 9.308L9.281 99.009C-3.094 111.399 -3.094 131.477 9.281 143.867L109.466 244.052L244.024 109.493L199.901 65.369L138.246 127.055ZM497.923 127.243C516.673 108.493 516.673 78.072 497.923 59.323L452.675 14.074C433.894 -4.691 403.489 -4.691 384.708 14.074L338.709 60.073L451.893 173.273L497.923 127.243ZM469.049 334.503L407.363 396.189C404.27 399.283 399.27 399.283 396.176 396.189L384.958 384.97C381.864 381.877 381.864 376.846 384.958 373.768L446.644 312.082L402.489 267.942L267.93 402.501L368.115 502.702C380.52 515.092 400.614 515.092 412.988 502.702L502.705 413.001C515.079 400.611 515.079 380.533 502.705 368.143L469.049 334.503Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M338.731 60.08L26.261 372.52C21.605 377.176 18.497 383.152 17.364 389.638L0.326 487.108C-2.207 501.6 10.411 514.213 24.903 511.672L122.43 494.571C128.908 493.436 134.881 490.331 139.531 485.681L451.915 173.28L338.731 60.08Z" })
    ]
  }
));
PenRulerDuotone.displayName = "PenRulerDuotone";
var PenRuler_default = PenRulerDuotone;
