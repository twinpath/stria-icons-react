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
var AirConditioner_exports = {};
__export(AirConditioner_exports, {
  default: () => AirConditioner_default
});
module.exports = __toCommonJS(AirConditioner_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AirConditionerDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M64 128V160H512V128H64ZM208 424C208 446.062 190.062 464 168 464S128 446.062 128 424C128 407.625 137.812 393.062 153.016 386.906C165.297 381.938 171.219 367.938 166.25 355.656C161.266 343.375 147.328 337.5 134.984 342.406C101.578 355.938 80 387.969 80 424C80 472.531 119.469 512 168 512S256 472.531 256 424V256H208V424ZM441.016 310.406C428.672 305.5 414.734 311.375 409.75 323.656C404.781 335.938 410.703 349.938 422.984 354.906C438.188 361.062 448 375.625 448 392C448 414.062 430.062 432 408 432S368 414.062 368 392V256H320V392C320 440.531 359.469 480 408 480S496 440.531 496 392C496 355.969 474.422 323.938 441.016 310.406Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M528 0H48C21.6 0 0 21.6 0 48V176C0 202.4 21.6 224 48 224H528C554.4 224 576 202.4 576 176V48C576 21.6 554.4 0 528 0ZM512 160H64V128H512V160Z" })
    ]
  }
));
AirConditionerDuotone.displayName = "AirConditionerDuotone";
var AirConditioner_default = AirConditionerDuotone;
