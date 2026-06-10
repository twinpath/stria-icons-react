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
var ArrowRotateForward_exports = {};
__export(ArrowRotateForward_exports, {
  default: () => ArrowRotateForward_default
});
module.exports = __toCommonJS(ArrowRotateForward_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowRotateForwardLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 32C335.471 32 407.641 73.867 448 141.559V48C448 39.156 455.156 32 464 32S480 39.156 480 48V176C480 184.844 472.844 192 464 192H336C327.156 192 320 184.844 320 176S327.156 160 336 160H421.846C387.502 100.727 324.936 64 256 64C150.125 64 64 150.125 64 256S150.125 448 256 448C315.484 448 370.656 421.094 407.344 374.156C412.781 367.156 422.828 365.875 429.812 371.406C436.766 376.844 438 386.906 432.562 393.844C389.766 448.594 325.406 480 256 480C132.484 480 32 379.5 32 256S132.484 32 256 32Z" })
  }
));
ArrowRotateForwardLight.displayName = "ArrowRotateForwardLight";
var ArrowRotateForward_default = ArrowRotateForwardLight;
