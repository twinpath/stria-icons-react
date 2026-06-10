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
var CheeseSwiss_exports = {};
__export(CheeseSwiss_exports, {
  default: () => CheeseSwiss_default
});
module.exports = __toCommonJS(CheeseSwiss_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CheeseSwissDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 256.008C512 136.137 418 38.266 299.875 32.018C292.125 31.768 284.625 34.266 278.75 39.016L217 87.014C229.625 107.889 224.625 134.764 205.5 149.762C186.25 164.762 158.875 162.887 141.875 145.512L0 256.008H332.451C324.793 264.512 320 275.654 320 288C320 314.51 341.49 336 368 336S416 314.51 416 288C416 275.654 411.207 264.512 403.549 256.008H512ZM176 336C149.49 336 128 357.49 128 384S149.49 432 176 432S224 410.51 224 384S202.51 336 176 336Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M403.549 256.008C411.207 264.512 416 275.654 416 288C416 314.51 394.51 336 368 336S320 314.51 320 288C320 275.654 324.793 264.512 332.451 256.008H0V448C0 465.625 14.375 480 32 480H480C497.625 480 512 465.625 512 448V256.008H403.549ZM176 432.002C149.5 432.002 128 410.502 128 384.004C128 357.504 149.5 336.006 176 336.006S224 357.504 224 384.004C224 410.502 202.5 432.002 176 432.002Z" })
    ]
  }
));
CheeseSwissDuotone.displayName = "CheeseSwissDuotone";
var CheeseSwiss_default = CheeseSwissDuotone;
