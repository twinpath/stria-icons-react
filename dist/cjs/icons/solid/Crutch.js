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
const CrutchSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M502.571 168.988L343.008 9.442C330.467 -3.098 310.153 -3.155 297.544 9.316C284.867 21.851 284.812 42.42 297.418 55.026L456.982 214.572C469.577 227.167 490.009 227.139 502.571 214.509L502.634 214.446C515.147 201.866 515.118 181.533 502.571 168.988ZM334.452 245.431L266.576 177.557L321.701 122.433L276.451 77.184L166.699 186.807C154.074 199.557 145.199 215.557 141.074 233.182L113.324 353.43L4.688 462.063C-1.563 468.313 -1.563 478.438 4.688 484.688L27.313 507.313C33.563 513.562 43.688 513.562 49.938 507.313L158.574 398.679L278.826 370.93C296.326 366.805 312.451 357.93 325.201 345.305L434.828 235.557L389.577 190.307L334.452 245.431ZM279.951 300.056C275.701 304.181 270.326 307.181 264.451 308.556L185.2 326.805L203.45 247.556C204.825 241.682 207.825 236.307 211.95 232.057L221.325 222.807L289.201 290.681L279.951 300.056Z" })
  }
));
CrutchSolid.displayName = "CrutchSolid";
var Crutch_default = CrutchSolid;
