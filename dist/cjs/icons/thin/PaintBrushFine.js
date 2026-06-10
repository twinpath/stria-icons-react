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
var PaintBrushFine_exports = {};
__export(PaintBrushFine_exports, {
  default: () => PaintBrushFine_default
});
module.exports = __toCommonJS(PaintBrushFine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PaintBrushFineThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M576 61.719C576 45.232 569.578 29.732 557.906 18.061C533.844 -6.035 494.641 -6.004 470.578 18.061L199.266 289.391C164.75 283.75 130.953 294.969 106.953 318.721C84.891 340.535 73.797 370.756 76.531 401.617C77.328 410.586 74.719 418.635 69 424.869C62.109 432.4 51.188 436.557 38.234 436.557C17.156 436.557 0 453.48 0 474.279C0 495.076 17.156 512 38.234 512H88.984C144.562 512 218.859 504.047 257.203 466.121C280.969 442.605 291.844 409.398 286.766 376.553L557.906 105.395C569.578 93.721 576 78.221 576 61.719ZM245.953 454.746C219.063 481.342 163.313 495.998 88.984 495.998H38.234C25.969 495.998 16 486.248 16 474.279C16 462.309 25.969 452.559 38.234 452.559C55.719 452.559 70.844 446.559 80.812 435.682C89.516 426.166 93.656 413.572 92.469 400.211C90.156 374.115 99.547 348.551 118.203 330.098C135.219 313.252 157.906 303.986 182.109 303.986C187.437 303.986 192.902 304.666 198.357 305.656L270.344 377.646L270.48 377.51C275.334 405.768 266.393 434.504 245.953 454.746ZM278.008 362.686L213.305 297.977L281.992 229.285L346.695 293.992L278.008 362.686ZM358.008 282.68L293.305 217.973L481.891 29.373C499.719 11.527 528.734 11.527 546.594 29.373C564.437 47.219 564.437 76.236 546.594 94.08L358.008 282.68Z" })
  }
));
PaintBrushFineThin.displayName = "PaintBrushFineThin";
var PaintBrushFine_default = PaintBrushFineThin;
