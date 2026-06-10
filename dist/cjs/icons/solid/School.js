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
var School_exports = {};
__export(School_exports, {
  default: () => School_default
});
module.exports = __toCommonJS(School_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SchoolSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352 159.979H336V143.977C336 135.176 328.801 127.977 320 127.977S304 135.176 304 143.977V175.979C304 184.779 311.201 191.98 320.002 191.98H352C360.801 191.98 368 184.779 368 175.98V175.979C368 167.178 360.801 159.979 352 159.979ZM0 247.059V480C0 497.673 14.327 512 32 512H96V191.98L21.875 216.703C8.811 221.06 0 233.287 0 247.059ZM618.125 216.703L544 191.98V512H608C625.673 512 640 497.673 640 480V247.059C640 233.287 631.189 221.06 618.125 216.703ZM497.75 111.975L337.75 5.344C327.001 -1.82 312.999 -1.82 302.25 5.344L142.25 111.975C133.375 117.975 128 127.977 128 138.602V512H256V383.99C256 366.317 270.327 351.99 288 351.99H352C369.673 351.99 384 366.317 384 383.99V512H512V138.602C512 127.977 506.625 117.975 497.75 111.975ZM320 255.984C275.875 255.984 240 220.107 240 175.979C240 131.852 275.875 95.975 320 95.975S400 131.852 400 175.979C400 220.107 364.125 255.984 320 255.984Z" })
  }
));
SchoolSolid.displayName = "SchoolSolid";
var School_default = SchoolSolid;
