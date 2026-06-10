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
var Prescription_exports = {};
__export(Prescription_exports, {
  default: () => Prescription_default
});
module.exports = __toCommonJS(Prescription_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PrescriptionSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M440.97 448.357L344.693 352.15L440.562 256.204C449.935 246.824 449.935 231.616 440.562 222.236L417.941 199.596C408.568 190.216 393.373 190.216 384 199.596L288.088 295.585L220.47 228.018C267.332 205.099 297.209 152.561 285.422 94.894C273.943 38.742 221.832 0 164.562 0H32C14.326 0 0 14.338 0 32.026V296.236C0 309.5 10.746 320.255 24 320.255H56C69.254 320.255 80 309.5 80 296.236V240.191H119.441L231.525 352.193L135.437 448.357C126.064 457.738 126.064 472.945 135.437 482.326L158.058 504.965C167.431 514.345 182.627 514.345 192 504.965L288.131 408.757L384.408 504.965C393.781 514.345 408.976 514.345 418.349 504.965L440.97 482.326C450.343 472.945 450.343 457.738 440.97 448.357ZM80 80.064H168C190.062 80.064 208 98.016 208 120.096S190.062 160.128 168 160.128H80V80.064Z" })
  }
));
PrescriptionSolid.displayName = "PrescriptionSolid";
var Prescription_default = PrescriptionSolid;
