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
var ScreenUsers_exports = {};
__export(ScreenUsers_exports, {
  default: () => ScreenUsers_default
});
module.exports = __toCommonJS(ScreenUsers_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ScreenUsersSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M96 64H544V224C568.625 224 591 233.625 608 249V49.625C608 22.25 586.5 0 560 0H80C53.5 0 32 22.25 32 49.625V249C49 233.625 71.375 224 96 224V64ZM256.268 320C256.268 355.262 284.781 383.844 320 383.977C355.219 383.844 383.732 355.262 383.732 320S355.219 256.156 320 256.023C284.781 256.156 256.268 284.738 256.268 320ZM343.75 416H296.25C256.424 416 224 449.5 224 490.656C224 502.438 233.34 512 244.834 512H395.166C406.66 512 416 502.438 416 490.656C416 449.5 383.576 416 343.75 416ZM567.75 416H520.25C480.424 416 448 449.5 448 490.656C448 502.438 457.34 512 468.834 512H619.166C630.66 512 640 502.438 640 490.656C640 449.5 607.576 416 567.75 416ZM480.268 320C480.268 355.262 508.781 383.844 544 383.977C579.219 383.844 607.732 355.262 607.732 320S579.219 256.156 544 256.023C508.781 256.156 480.268 284.738 480.268 320ZM32.268 320C32.268 355.262 60.781 383.844 96 383.977C131.219 383.844 159.732 355.262 159.732 320S131.219 256.156 96 256.023C60.781 256.156 32.268 284.738 32.268 320ZM119.75 416H72.25C32.424 416 0 449.5 0 490.656C0 502.438 9.34 512 20.834 512H171.166C182.66 512 192 502.438 192 490.656C192 449.5 159.576 416 119.75 416Z" })
  }
));
ScreenUsersSolid.displayName = "ScreenUsersSolid";
var ScreenUsers_default = ScreenUsersSolid;
