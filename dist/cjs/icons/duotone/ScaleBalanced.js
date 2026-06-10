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
var ScaleBalanced_exports = {};
__export(ScaleBalanced_exports, {
  default: () => ScaleBalanced_default
});
module.exports = __toCommonJS(ScaleBalanced_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ScaleBalancedDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M495.997 448H351.998V153.25C375.498 143 393.123 121.75 398.373 96H511.997C529.67 96 543.996 81.674 543.996 64S529.67 32 511.997 32H383.623C368.998 12.625 346.123 0 319.998 0S270.999 12.625 256.374 32H128C110.326 32 96 46.326 96 64S110.326 96 128 96H241.624C246.874 121.75 264.499 143 287.998 153.25V448H144C117.49 448 96 469.49 96 496C96 504.836 103.164 512 112 512H527.996C536.832 512 543.996 504.836 543.996 496C543.996 469.49 522.506 448 495.997 448Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M554.874 154.5C537.25 119.25 486.75 119.125 469 154.5C382.001 328.75 384.001 320.375 384.001 336C384.001 380.125 441.25 416 512 416S639.999 380.125 639.999 336C639.999 319.875 641.374 327.25 554.874 154.5ZM440 320L512 176L583.999 320H440ZM85.003 154.5C-1.996 328.75 0.004 320.375 0.004 336C0.004 380.125 57.253 416 128.003 416S256.002 380.125 256.002 336C256.002 319.875 257.377 327.25 170.877 154.5C153.253 119.25 102.753 119.125 85.003 154.5ZM56.003 320L128.003 176L200.002 320H56.003Z" })
    ]
  }
));
ScaleBalancedDuotone.displayName = "ScaleBalancedDuotone";
var ScaleBalanced_default = ScaleBalancedDuotone;
