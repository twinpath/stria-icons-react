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
var TrashArrowUp_exports = {};
__export(TrashArrowUp_exports, {
  default: () => TrashArrowUp_default
});
module.exports = __toCommonJS(TrashArrowUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TrashArrowUpSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M53.25 467C54.75 492.25 75.75 512 101.125 512H346.875C372.25 512 393.25 492.25 394.75 467L416 128H32L53.25 467ZM119.031 287.031L207.031 199.031C209.596 196.467 215.506 192 224 192S238.404 196.467 240.969 199.031L328.969 287.031C338.344 296.406 338.344 311.594 328.969 320.969S304.406 330.344 295.031 320.969L248 273.938V424C248 437.25 237.25 448 224 448S200 437.25 200 424V273.938L152.969 320.969C143.594 330.344 128.406 330.344 119.031 320.969S109.656 296.406 119.031 287.031ZM432 32H312L302.625 13.25C298.5 5.125 290.25 0 281.125 0H166.75C157.75 0 149.375 5.125 145.375 13.25L136 32H16C7.125 32 0 39.125 0 48V80C0 88.875 7.125 96 16 96H432C440.875 96 448 88.875 448 80V48C448 39.125 440.875 32 432 32Z" })
  }
));
TrashArrowUpSolid.displayName = "TrashArrowUpSolid";
var TrashArrowUp_default = TrashArrowUpSolid;
