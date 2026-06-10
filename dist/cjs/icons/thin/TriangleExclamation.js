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
var TriangleExclamation_exports = {};
__export(TriangleExclamation_exports, {
  default: () => TriangleExclamation_default
});
module.exports = __toCommonJS(TriangleExclamation_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TriangleExclamationThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256.017 320C260.423 320 264.017 316.406 264.017 312V152C264.017 147.594 260.423 144 256.017 144C251.61 144 248.017 147.594 248.017 152V312C248.017 316.406 251.61 320 256.017 320ZM506.218 417L292.961 53C284.781 39 270.406 32 256.019 32C241.634 32 227.237 39 219.014 53L5.757 417C-10.604 444.918 9.841 480 42.73 480H469.328C502.052 480 522.663 445 506.218 417ZM492.555 450.654C487.772 459.01 479.088 464 469.328 464H42.73C32.941 464 24.242 459.018 19.458 450.67C14.781 442.508 14.818 433.184 19.562 425.088L232.811 61.104C237.63 52.898 246.306 48 256.019 48C265.718 48 274.363 52.887 279.156 61.088L492.421 425.104C497.173 433.191 497.219 442.504 492.555 450.654ZM256.079 368C247.257 368 240.079 375.178 240.079 384S247.257 400 256.079 400C264.902 400 272.079 392.822 272.079 384S264.902 368 256.079 368Z" })
  }
));
TriangleExclamationThin.displayName = "TriangleExclamationThin";
var TriangleExclamation_default = TriangleExclamationThin;
