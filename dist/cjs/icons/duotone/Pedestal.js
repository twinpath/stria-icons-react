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
var Pedestal_exports = {};
__export(Pedestal_exports, {
  default: () => Pedestal_default
});
module.exports = __toCommonJS(Pedestal_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PedestalDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352 0H96C60.654 0 32 28.652 32 64V448H416V64C416 28.652 387.346 0 352 0ZM112 96C103.164 96 96 88.836 96 80C96 71.162 103.164 64 112 64S128 71.162 128 80C128 88.836 120.836 96 112 96ZM336 96C327.164 96 320 88.836 320 80C320 71.162 327.164 64 336 64S352 71.162 352 80C352 88.836 344.836 96 336 96Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M432 448H16C7.164 448 0 455.162 0 464V496C0 504.836 7.164 512 16 512H432C440.836 512 448 504.836 448 496V464C448 455.162 440.836 448 432 448ZM112 96C120.836 96 128 88.836 128 80C128 71.162 120.836 64 112 64S96 71.162 96 80C96 88.836 103.164 96 112 96ZM336 96C344.836 96 352 88.836 352 80C352 71.162 344.836 64 336 64S320 71.162 320 80C320 88.836 327.164 96 336 96Z" })
    ]
  }
));
PedestalDuotone.displayName = "PedestalDuotone";
var Pedestal_default = PedestalDuotone;
