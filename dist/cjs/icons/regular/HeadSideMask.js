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
var HeadSideMask_exports = {};
__export(HeadSideMask_exports, {
  default: () => HeadSideMask_default
});
module.exports = __toCommonJS(HeadSideMask_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HeadSideMaskRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352.063 160C334.387 160 320.057 174.328 320.057 192S334.387 224 352.063 224C369.737 224 384.067 209.672 384.067 192S369.737 160 352.063 160ZM509.291 275C488.352 227.875 460.846 123.266 436.201 88.25C397.758 33.594 334.621 0 266.141 0H198.199C93.676 0 3.668 80.861 0.113 185.307C-1.91 244.785 23.272 298.295 64.012 334.812V488C64.012 501.254 74.758 512 88.016 512S112.02 501.254 112.02 488V313.391L96.065 299.078C67.578 273.537 50.604 237.828 48.426 200.139L224.039 319.285V480C224.039 497.672 238.369 512 256.045 512H371.08C408.086 512 441.373 488.609 453.893 453.797L508.49 302.17C512.547 294.072 513.44 284.326 509.291 275ZM439.531 352H336.059C327.221 352 320.057 359.162 320.057 368C320.057 376.836 327.221 384 336.059 384H428.008L416.487 416H336.059C327.221 416 320.057 423.162 320.057 432C320.057 440.836 327.221 448 336.059 448H402.998C395.561 457.854 383.83 464 371.08 464H272.047V320H451.055L439.531 352ZM239.83 272L55.623 147.025C57.76 140.602 60.084 134.188 63.203 127.906C88.217 77.529 142.1 48 198.356 48H266.141C318.133 48 367.033 73.375 396.944 115.875C408.133 131.781 425.012 181.547 437.326 217.875C443.875 237.188 450.188 255.797 456.299 272H239.83Z" })
  }
));
HeadSideMaskRegular.displayName = "HeadSideMaskRegular";
var HeadSideMask_default = HeadSideMaskRegular;
