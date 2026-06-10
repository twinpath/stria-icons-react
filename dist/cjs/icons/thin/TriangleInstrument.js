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
var TriangleInstrument_exports = {};
__export(TriangleInstrument_exports, {
  default: () => TriangleInstrument_default
});
module.exports = __toCommonJS(TriangleInstrument_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TriangleInstrumentThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M498.379 375.359L413.16 236.75C410.847 233.016 405.879 231.828 402.16 234.125C398.394 236.438 397.222 241.359 399.535 245.125L484.785 383.797C499.019 406.484 499.738 434.797 486.644 457.75C473.472 481.344 448.394 496 421.191 496H90.109C63.312 496 38.594 481.5 25.547 458.094C12.328 434.969 12.89 406.625 27.015 384.094L192.158 115.625C205.799 93.312 229.674 80 256.002 80C282.252 80 306.095 93.234 319.785 115.406L369.088 195.604L289.4 275.289C280.053 268.293 268.572 264 256 264C225.072 264 200 289.072 200 320S225.072 376 256 376S312 350.928 312 320C312 307.428 307.709 295.947 300.713 286.602L501.66 85.656C504.785 82.531 504.785 77.469 501.66 74.344S493.472 71.219 490.347 74.344L380.715 183.977L333.41 107.016C318.164 82.334 292.428 67.414 263.767 64.982V8C263.767 3.578 260.189 0 255.767 0S247.767 3.578 247.767 8V65.045C219.191 67.617 193.613 82.57 178.517 107.266L13.422 375.656C-3.813 403.141 -4.485 437.766 11.609 465.953C27.437 494.359 57.515 512 90.109 512H421.191C454.191 512 484.613 494.203 500.582 465.625C516.568 437.594 515.709 402.984 498.379 375.359ZM256 360C233.945 360 216 342.055 216 320C216 297.943 233.945 280 256 280C278.056 280 296 297.943 296 320C296 342.055 278.056 360 256 360Z" })
  }
));
TriangleInstrumentThin.displayName = "TriangleInstrumentThin";
var TriangleInstrument_default = TriangleInstrumentThin;
