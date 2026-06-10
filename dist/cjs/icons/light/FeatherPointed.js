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
var FeatherPointed_exports = {};
__export(FeatherPointed_exports, {
  default: () => FeatherPointed_default
});
module.exports = __toCommonJS(FeatherPointed_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FeatherPointedLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M481.152 0C480.395 0 479.635 0.027 478.865 0.082C361.41 8.51 -9.994 62.785 77.107 412.268L4.688 484.688C-1.563 490.938 -1.563 501.063 4.688 507.312C7.813 510.438 11.906 512 16 512S24.188 510.438 27.313 507.312L99.732 434.893C135.816 443.885 168.773 448 198.84 448C459.949 448 504.359 138.461 511.918 33.135C513.217 15.039 498.967 0 481.152 0ZM198.84 416C176.133 416 151.631 412.762 126.633 407.992L182.855 351.77C183.254 351.799 183.594 352 184 352H360.563C317.016 394.291 263.045 416 198.84 416ZM387.775 320.762C386.531 320.453 385.34 320 384 320H214.625L278.855 255.77C279.254 255.799 279.594 256 280 256H426.17C424.65 259.285 423.369 262.654 421.766 265.904C411.621 286.461 400.105 304.4 387.775 320.762ZM439.596 224H310.625L347.313 187.312C353.563 181.062 353.563 170.937 347.313 164.688S330.938 158.438 324.688 164.688L104.121 385.254C87.117 301.652 98.127 231.535 137.688 176.967C220.287 63.033 403.541 37.699 479.91 32.09C476.74 75.25 467.139 150.814 439.596 224Z" })
  }
));
FeatherPointedLight.displayName = "FeatherPointedLight";
var FeatherPointed_default = FeatherPointedLight;
