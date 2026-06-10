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
var PlaceOfWorship_exports = {};
__export(PlaceOfWorship_exports, {
  default: () => PlaceOfWorship_default
});
module.exports = __toCommonJS(PlaceOfWorship_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PlaceOfWorshipSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 395.938V479.938C0 497.611 14.327 511.938 32 511.938H128V319.938L19.375 366.438C7.625 371.562 0 383.062 0 395.938ZM464.5 246.562L416 217.562V102.48C416 93.998 412.627 85.865 406.625 79.871L331.305 4.678C325.059 -1.559 314.941 -1.559 308.695 4.678L233.389 79.859C227.379 85.859 224 94.004 224 102.498V217.563L175.5 246.563C165.887 252.311 160 262.689 160 273.891V512H256V416C256 380.654 284.654 352 320 352C355.348 352 384 380.654 384 416V512H480V273.891C480 262.689 474.115 252.311 464.5 246.562ZM620.625 366.438L512 319.938V511.938H608C625.673 511.938 640 497.611 640 479.938V395.938C640 383.062 632.375 371.562 620.625 366.438Z" })
  }
));
PlaceOfWorshipSolid.displayName = "PlaceOfWorshipSolid";
var PlaceOfWorship_default = PlaceOfWorshipSolid;
