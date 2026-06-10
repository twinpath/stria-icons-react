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
var Capsules_exports = {};
__export(Capsules_exports, {
  default: () => Capsules_default
});
module.exports = __toCommonJS(Capsules_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CapsulesSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M555.266 300.125L424.262 112.75C401.887 81 366.386 64 330.385 64C307.759 64 284.883 70.75 264.883 84.75C245.257 98.5 231.257 117.5 223.382 138.5C220.506 79.25 172.005 32 112.003 32C50.126 32 0 82.125 0 144V368C0 429.875 50.126 480 112.003 480S224.007 429.875 224.007 368V218.875C227.257 227.5 231.257 236 236.757 243.875L368.011 431.25C390.261 463 425.762 480 461.763 480C484.514 480 507.265 473.25 527.265 459.25C579.017 423.125 591.517 351.75 555.266 300.125ZM160.005 256H64.002V144C64.002 117.5 85.502 96 112.003 96S160.005 117.5 160.005 144V256ZM354.76 300.875L289.258 207.25C281.508 196.25 278.508 182.75 280.883 169.625C283.258 156.375 290.633 144.75 301.634 137.125C310.134 131.125 320.134 128 330.385 128C346.885 128 362.261 136 371.761 149.5L437.263 243.25L354.76 300.875Z" })
  }
));
CapsulesSolid.displayName = "CapsulesSolid";
var Capsules_default = CapsulesSolid;
