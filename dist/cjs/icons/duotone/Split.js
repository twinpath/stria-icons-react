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
var Split_exports = {};
__export(Split_exports, {
  default: () => Split_default
});
module.exports = __toCommonJS(Split_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SplitDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M504.921 382.954C514.307 392.341 514.307 407.56 504.921 416.946L424.92 496.923C409.791 512.044 383.93 501.329 383.93 479.939V440.001H319.961C308.524 440.001 297.649 435.126 290.055 426.564L174 296.001H191.961C203.398 296.001 214.274 291.126 221.867 282.563L245.481 256.001L337.93 360.001H383.93V319.97C383.93 298.575 409.795 287.86 424.926 302.985L504.921 382.954Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M504.96 129.048L424.966 209.016C409.835 224.141 383.969 213.423 383.969 192.032V152.001H337.969L221.907 282.563C214.313 291.126 203.438 296.001 192 296.001H40C17.906 296.001 0 278.095 0 256.001S17.906 216.001 40 216.001H174.032L290.094 85.438C297.688 76.876 308.563 72.001 320.001 72.001H383.969V32.063C383.969 10.672 409.831 -0.046 424.96 15.079L504.96 95.055C514.347 104.438 514.347 119.657 504.96 129.048Z" })
    ]
  }
));
SplitDuotone.displayName = "SplitDuotone";
var Split_default = SplitDuotone;
