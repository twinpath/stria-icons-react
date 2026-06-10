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
var ArrowsUpDown_exports = {};
__export(ArrowsUpDown_exports, {
  default: () => ArrowsUpDown_default
});
module.exports = __toCommonJS(ArrowsUpDown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowsUpDownRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 256 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M128 511.998C121.313 511.998 114.906 509.185 110.375 504.279L14.375 400.279C10.094 395.654 8 389.81 8 383.998C8 377.529 10.594 371.092 15.719 366.373C25.469 357.373 40.656 357.967 49.625 367.717L104 426.623V85.373L49.625 144.279C40.656 154.029 25.469 154.623 15.719 145.623C10.594 140.904 8 134.467 8 127.998C8 122.185 10.094 116.342 14.375 111.717L110.375 7.717C114.906 2.81 121.313 -0.002 128 -0.002S141.094 2.81 145.625 7.717L241.625 111.717C250.656 121.498 250 136.685 240.281 145.623C230.531 154.623 215.344 154.029 206.375 144.279L152 85.373V426.623L206.375 367.717C215.344 357.967 230.531 357.373 240.281 366.373C250 375.342 250.656 390.498 241.625 400.279L145.625 504.279C141.094 509.185 134.688 511.998 128 511.998Z" })
  }
));
ArrowsUpDownRegular.displayName = "ArrowsUpDownRegular";
var ArrowsUpDown_default = ArrowsUpDownRegular;
