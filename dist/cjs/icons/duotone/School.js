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
const SchoolDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 247.088V480.029C0 497.701 14.326 512.029 32 512.029H128V181.352L21.875 216.732C8.811 221.088 0 233.316 0 247.088ZM618.125 216.732L512 181.352V512.029H608C625.674 512.029 640 497.701 640 480.029V247.088C640 233.316 631.189 221.088 618.125 216.732ZM352 160.008H336V144.006C336 135.205 328.801 128.006 320 128.006S304 135.205 304 144.006V176.008C304 184.809 311.201 192.01 320.002 192.01H352C360.801 192.01 368 184.809 368 176.01V176.008C368 167.207 360.801 160.008 352 160.008Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M497.75 112.004L337.75 5.373C327.001 -1.791 312.999 -1.791 302.25 5.373L142.25 112.004C133.375 118.004 128 128.006 128 138.631V512.029H256V384.019C256 366.346 270.327 352.019 288 352.019H352C369.673 352.019 384 366.346 384 384.019V512.029H512V138.631C512 128.006 506.625 118.004 497.75 112.004ZM320 256.013C275.875 256.013 240 220.136 240 176.008C240 131.881 275.875 96.004 320 96.004S400 131.881 400 176.008C400 220.136 364.125 256.013 320 256.013Z" })
    ]
  }
));
SchoolDuotone.displayName = "SchoolDuotone";
var School_default = SchoolDuotone;
