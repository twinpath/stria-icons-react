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
var Trees_exports = {};
__export(Trees_exports, {
  default: () => Trees_default
});
module.exports = __toCommonJS(Trees_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TreesSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M298.373 288H329.002C338.002 288 346.004 283 349.879 275C353.629 266.875 352.379 257.625 346.504 250.875L268.369 160H297.246C306.373 160 314.625 154.625 318.125 146.375C321.75 138.25 320 128.75 313.875 122.25L203.609 4.875C197.609 -1.625 186.357 -1.625 180.357 4.875L69.967 122.25C63.967 128.75 62.217 138.25 65.842 146.375C69.342 154.625 77.594 160 86.719 160H115.598L37.463 250.875C31.588 257.75 30.338 266.875 34.088 275C37.963 283 45.84 288 54.965 288H85.594L5.709 378.5C-0.291 385.25 -1.668 394.625 2.084 402.75C5.834 410.75 14.084 416 23.086 416H160V480C160 497.673 174.327 512 192 512H192C209.673 512 224 497.673 224 480V416H360.881C369.881 416 378.133 410.75 381.883 402.75C385.633 394.625 384.383 385.25 378.383 378.5L298.373 288ZM634.291 378.5L554.406 288H585.035C594.035 288 602.037 283 605.912 275C609.662 266.875 608.412 257.625 602.537 250.875L524.402 160H553.281C562.406 160 570.658 154.625 574.158 146.375C577.783 138.25 576.033 128.75 569.908 122.25L459.643 4.875C453.643 -1.625 442.391 -1.625 436.391 4.875L341.252 106.125C352.379 121.5 355.254 141.375 347.629 159C343.629 168.375 337.252 176.125 329.377 181.75L370.881 230C384.883 246.25 388.01 269.25 378.883 288.625C374.633 297.5 368.381 304.75 360.756 310.125L402.387 357.25C411.012 367.125 415.762 371.5 416.012 384H416V480C416 497.673 430.327 512 448 512H448C465.673 512 480 497.673 480 480V416H616.914C625.916 416 634.166 410.75 637.916 402.75C641.668 394.625 640.291 385.25 634.291 378.5Z" })
  }
));
TreesSolid.displayName = "TreesSolid";
var Trees_default = TreesSolid;
