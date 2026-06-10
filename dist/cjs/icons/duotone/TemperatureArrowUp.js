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
const TemperatureArrowUpDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M255.998 278.5V112C255.998 50.125 205.873 0 144 0C82.125 0 32 50.125 32 112V278.5C12.25 303.25 0 334 0 368C0 447.5 64.5 512 144 512C223.498 512 287.998 447.5 287.998 368C287.998 334 275.748 303.125 255.998 278.5ZM219.873 393.375C208.998 426.125 178.373 448 144 448C109.625 448 79 426.125 68.125 393.375C57.25 360.75 68.5 324.875 96 304.25V112C96 85.5 117.5 64 144 64C170.498 64 191.998 85.5 191.998 112V304.25C219.498 324.875 230.748 360.75 219.873 393.375Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M159.958 322.875V112C159.958 103.125 152.833 96 143.96 96C135.085 96 127.96 103.125 127.96 112V322.875C105.958 330.75 92.71 353.25 96.71 376.25C100.585 399.375 120.585 416.125 143.96 416.125C167.333 416.125 187.333 399.375 191.208 376.25C195.208 353.25 181.958 330.75 159.958 322.875ZM504.944 124L440.944 44C428.819 28.812 403.1 28.812 390.975 44L326.975 124C315.928 137.812 318.163 157.938 331.975 169C345.725 180.031 365.913 177.781 376.944 164L383.96 155.229V448C383.96 465.688 398.288 480 415.96 480S447.96 465.688 447.96 448V155.229L454.975 164C461.288 171.906 470.585 176 479.975 176C486.991 176 494.053 173.719 499.944 169C513.756 157.938 515.991 137.812 504.944 124Z" })
    ]
  }
));
TemperatureArrowUpDuotone.displayName = "TemperatureArrowUpDuotone";
var TemperatureArrowUp_default = TemperatureArrowUpDuotone;
