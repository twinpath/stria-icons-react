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
var ParachuteBox_exports = {};
__export(ParachuteBox_exports, {
  default: () => ParachuteBox_default
});
module.exports = __toCommonJS(ParachuteBox_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ParachuteBoxDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M26 192L161.439 342.492C164.914 331.525 173.928 323.555 185.361 321.242L69.045 192H26ZM441.994 192L325.678 321.242C337.113 323.555 346.127 331.521 349.602 342.49L485.039 192H441.994ZM239.52 320H271.52V192H239.52V320Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 0C196.871 0 127.992 76.75 127.992 192H384.01C384.01 76.75 315.129 0 256 0ZM0.107 175C-1.018 184.125 6.857 192 16.109 192H95.99C95.99 116.875 121.992 55.75 158.369 16.25C78.488 42.75 9.234 99.5 0.107 175ZM353.633 16.25C390.01 55.75 416.012 116.875 416.012 192H495.768C505.143 192 513.018 184.25 511.893 175C502.768 99.375 433.514 42.625 353.633 16.25ZM320 320H192C174.328 320 160 334.326 160 352V480C160 497.674 174.328 512 192 512H320C337.674 512 352 497.674 352 480V352C352 334.326 337.674 320 320 320Z" })
    ]
  }
));
ParachuteBoxDuotone.displayName = "ParachuteBoxDuotone";
var ParachuteBox_default = ParachuteBoxDuotone;
