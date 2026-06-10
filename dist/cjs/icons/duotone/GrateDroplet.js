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
var GrateDroplet_exports = {};
__export(GrateDroplet_exports, {
  default: () => GrateDroplet_default
});
module.exports = __toCommonJS(GrateDroplet_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GrateDropletDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H344.217C328.967 457.262 320 430.004 320 400.672C320 362.945 334.801 334.967 352 309.361V288H366.824C384.611 262.926 402.699 236.561 414.773 196.576C419.771 180.035 432.318 167.656 448 162.574V96C448 60.652 419.346 32 384 32ZM96 416H64V288H96V416ZM96 224H64V96H96V224ZM192 416H160V288H192V416ZM192 224H160V96H192V224ZM288 416H256V288H288V416ZM288 224H256V96H288V224ZM384 224H352V96H384V224Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M482.594 205.83C477.562 187.783 451.094 187.002 445.406 205.83C415.656 304.344 352 331.219 352 400.672C352 462.156 402.094 512 464 512S576 462.156 576 400.672C576 330.828 512.49 304.891 482.594 205.83Z" })
    ]
  }
));
GrateDropletDuotone.displayName = "GrateDropletDuotone";
var GrateDroplet_default = GrateDropletDuotone;
