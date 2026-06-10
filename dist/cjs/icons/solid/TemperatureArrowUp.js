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
var TemperatureArrowUp_exports = {};
__export(TemperatureArrowUp_exports, {
  default: () => TemperatureArrowUp_default
});
module.exports = __toCommonJS(TemperatureArrowUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TemperatureArrowUpSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M159.998 322.875V112C159.998 103.125 152.873 96 144 96C135.125 96 128 103.125 128 112V322.875C105.998 330.75 92.75 353.25 96.75 376.25C100.625 399.375 120.625 416.125 144 416.125C167.373 416.125 187.373 399.375 191.248 376.25C195.248 353.25 181.998 330.75 159.998 322.875ZM255.998 112C255.998 50.125 205.873 0 144 0C82.125 0 32 50.125 32 112V278.5C12.25 303.25 0 334 0 368C0 447.5 64.5 512 144 512C223.498 512 287.998 447.5 287.998 368C287.998 334 275.748 303.125 255.998 278.5V112ZM219.873 393.375C208.998 426.125 178.373 448 144 448C109.625 448 79 426.125 68.125 393.375C57.25 360.75 68.5 324.875 96 304.25V112C96 85.5 117.5 64 144 64C170.498 64 191.998 85.5 191.998 112V304.25C219.498 324.875 230.748 360.75 219.873 393.375ZM504.984 124L440.984 44C428.859 28.812 403.141 28.812 391.016 44L327.016 124C315.969 137.812 318.203 157.938 332.016 169C345.766 180.031 365.953 177.781 376.984 164L384 155.229V448C384 465.688 398.328 480 416 480S448 465.688 448 448V155.229L455.016 164C461.328 171.906 470.625 176 480.016 176C487.031 176 494.094 173.719 499.984 169C513.797 157.938 516.031 137.812 504.984 124Z" })
  }
));
TemperatureArrowUpSolid.displayName = "TemperatureArrowUpSolid";
var TemperatureArrowUp_default = TemperatureArrowUpSolid;
