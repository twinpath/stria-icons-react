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
var CircleChevronRight_exports = {};
__export(CircleChevronRight_exports, {
  default: () => CircleChevronRight_default
});
module.exports = __toCommonJS(CircleChevronRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleChevronRightDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.42 16 16 123.418 16 256C16 388.578 123.42 496 256 496S496 388.578 496 256C496 123.418 388.58 16 256 16ZM358.625 278.625L246.625 390.625C234.125 403.125 213.875 403.125 201.375 390.625S188.875 357.875 201.375 345.375L290.75 256L201.375 166.625C188.875 154.125 188.875 133.875 201.375 121.375S234.125 108.875 246.625 121.375L358.625 233.375C364.875 239.625 368 247.812 368 256S364.875 272.375 358.625 278.625Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M358.625 277.583L246.625 389.583C234.125 402.083 213.875 402.083 201.375 389.583S188.875 356.833 201.375 344.333L290.75 254.958L201.375 165.583C188.875 153.083 188.875 132.833 201.375 120.333S234.125 107.833 246.625 120.333L358.625 232.333C364.875 238.583 368 246.771 368 254.958S364.875 271.333 358.625 277.583Z" })
    ]
  }
));
CircleChevronRightDuotone.displayName = "CircleChevronRightDuotone";
var CircleChevronRight_default = CircleChevronRightDuotone;
