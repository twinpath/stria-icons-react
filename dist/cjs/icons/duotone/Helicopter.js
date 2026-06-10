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
var Helicopter_exports = {};
__export(Helicopter_exports, {
  default: () => Helicopter_default
});
module.exports = __toCommonJS(Helicopter_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HelicopterDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M128 32C128 14.328 142.328 0 160 0H543.996C561.668 0 575.996 14.328 575.996 32S561.668 64 543.996 64H383.998V128H319.998V64H160C142.328 64 128 49.672 128 32ZM613.245 436.625C606.995 430.375 596.996 430.5 590.621 436.625C583.496 443.375 576.746 447.875 565.996 447.875H272.124C245.546 447.875 223.999 469.422 223.999 496C223.999 504.797 231.202 512 239.999 512H565.996C580.875 512 601.257 511.5 634.394 482.477C641.44 476.309 641.991 465.371 635.37 458.75L613.245 436.625Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M303.975 384H575.972C593.449 384 607.945 369.836 607.972 352.359C608.167 228.445 507.844 128 383.974 128H111.977L68.727 70.375C65.716 66.359 60.993 64 55.973 64H15.978C5.603 64 -2.022 73.75 0.478 83.875L31.978 192L191.976 256L278.35 371.25C284.475 379.25 293.85 384 303.975 384ZM415.974 195.5C478.473 208.25 527.973 257.5 540.723 320H415.974V195.5Z" })
    ]
  }
));
HelicopterDuotone.displayName = "HelicopterDuotone";
var Helicopter_default = HelicopterDuotone;
