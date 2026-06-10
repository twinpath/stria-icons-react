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
const HelicopterSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M635.347 458.75L613.222 436.625C606.972 430.375 596.972 430.5 590.597 436.625C583.472 443.375 576.722 447.875 565.973 447.875H272.1C245.522 447.875 223.976 469.422 223.976 496C223.976 504.797 231.179 512 239.976 512H565.973C580.851 512 601.234 511.5 634.37 482.477C641.417 476.309 641.968 465.371 635.347 458.75ZM303.975 384H575.972C593.449 384 607.945 369.836 607.972 352.359C608.167 228.445 507.844 128 383.974 128V64H543.973C561.644 64 575.972 49.672 575.972 32S561.644 0 543.973 0H159.976C142.305 0 127.977 14.328 127.977 32S142.305 64 159.976 64H319.975V128H111.977L68.727 70.375C65.716 66.359 60.993 64 55.973 64H15.978C5.603 64 -2.022 73.75 0.478 83.875L31.978 192L191.976 256L278.35 371.25C284.475 379.25 293.85 384 303.975 384ZM415.974 195.5C478.473 208.25 527.973 257.5 540.723 320H415.974V195.5Z" })
  }
));
HelicopterSolid.displayName = "HelicopterSolid";
var Helicopter_default = HelicopterSolid;
