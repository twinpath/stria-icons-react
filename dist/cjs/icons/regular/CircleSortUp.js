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
var CircleSortUp_exports = {};
__export(CircleSortUp_exports, {
  default: () => CircleSortUp_default
});
module.exports = __toCommonJS(CircleSortUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleSortUpRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M360.625 208.625L269.125 117.375C265.625 114 260.875 112 256 112S246.5 114 243 117.375L151.375 208.625C139.875 220.125 148 240 164.5 240H347.5C364 240 372.125 220.125 360.625 208.625ZM496 256C496 123.453 388.549 16 256 16S16 123.453 16 256S123.451 496 256 496S496 388.547 496 256ZM448 256C448 361.867 361.869 448 256 448S64 361.867 64 256S150.131 64 256 64S448 150.133 448 256ZM360.625 303.375C372.125 291.875 364 272 347.5 272H164.5C148 272 139.875 291.875 151.375 303.375L243 394.625C246.5 398 251.125 400 256 400S265.625 398 269.125 394.625L360.625 303.375ZM314.682 304L256.053 362.469L197.35 304H314.682Z" })
  }
));
CircleSortUpRegular.displayName = "CircleSortUpRegular";
var CircleSortUp_default = CircleSortUpRegular;
