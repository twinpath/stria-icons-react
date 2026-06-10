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
var Bold_exports = {};
__export(Bold_exports, {
  default: () => Bold_default
});
module.exports = __toCommonJS(Bold_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BoldRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M303.834 241.709C305.918 239.871 308.244 238.402 310.219 236.406C332.937 213.5 345.25 183.094 344.937 150.813C344.281 85.312 290.438 32 224.938 32H24C10.75 32 0 42.75 0 56S10.75 80 24 80H48V432H24C10.75 432 0 442.75 0 456S10.75 480 24 480H240C310.594 480 368 422.594 368 352C368 304.758 342 263.887 303.834 241.709ZM224.938 80C264.25 80 296.531 112 296.938 151.312C297.125 170.656 289.719 188.875 276.094 202.656C262.469 216.406 244.312 224 224.938 224H96V80H224.938ZM240 432H96V272H240C284.125 272 320 307.875 320 352S284.125 432 240 432Z" })
  }
));
BoldRegular.displayName = "BoldRegular";
var Bold_default = BoldRegular;
