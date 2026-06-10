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
var Crutch_exports = {};
__export(Crutch_exports, {
  default: () => Crutch_default
});
module.exports = __toCommonJS(Crutch_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CrutchDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M502.571 168.988L343.008 9.442C330.467 -3.098 310.153 -3.155 297.544 9.316C284.867 21.851 284.812 42.42 297.418 55.026L456.982 214.572C469.577 227.167 490.009 227.139 502.571 214.509L502.634 214.446C515.147 201.866 515.118 181.533 502.571 168.988Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M411.141 168.734L334.447 245.428L266.572 177.553L343.262 100.863L298.008 55.615L166.697 186.803C154.072 199.553 145.197 215.553 141.072 233.178L113.322 353.428L4.688 462.062C-1.563 468.312 -1.563 478.438 4.688 484.687L27.312 507.312C33.562 513.562 43.688 513.562 49.937 507.312L158.572 398.678L278.822 370.928C296.322 366.803 312.447 357.928 325.197 345.303L456.393 213.982L411.141 168.734ZM279.947 300.053C275.697 304.178 270.322 307.178 264.447 308.553L185.197 326.803L203.447 247.553C204.822 241.678 207.822 236.303 211.947 232.053L221.322 222.803L289.197 290.678L279.947 300.053Z" })
    ]
  }
));
CrutchDuotone.displayName = "CrutchDuotone";
var Crutch_default = CrutchDuotone;
