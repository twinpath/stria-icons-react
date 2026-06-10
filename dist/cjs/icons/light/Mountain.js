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
var Mountain_exports = {};
__export(Mountain_exports, {
  default: () => Mountain_default
});
module.exports = __toCommonJS(Mountain_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MountainLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M503.193 393.783L280.074 44.246C274.865 36.082 265.433 32 256 32C246.568 32 237.136 36.082 231.927 44.246L8.806 393.783C-2.307 411.193 -2.946 433.207 7.14 451.234C17.072 468.973 35.921 480 56.314 480H455.685C476.078 480 494.929 468.973 504.861 451.234C514.945 433.193 514.306 411.18 503.193 393.783ZM256.002 66.006L346.64 208H256C250.968 208 246.218 210.375 243.203 214.406L208 261.344L172.796 214.406C170.763 211.688 167.824 210.094 164.658 209.102L256.002 66.006ZM476.939 435.602C472.658 443.248 464.513 448 455.685 448H56.314C47.488 448 39.343 443.248 35.066 435.609C30.746 427.887 31.019 418.457 35.779 411L144.935 240H152L195.203 297.594C198.218 301.625 202.968 304 208 304S217.781 301.625 220.796 297.594L264 240H367.066L476.226 411.01C480.982 418.455 481.252 427.887 476.939 435.602Z" })
  }
));
MountainLight.displayName = "MountainLight";
var Mountain_default = MountainLight;
