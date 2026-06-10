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
var ArrowsRepeat1_exports = {};
__export(ArrowsRepeat1_exports, {
  default: () => ArrowsRepeat1_default
});
module.exports = __toCommonJS(ArrowsRepeat1_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowsRepeat1Light = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M176 112H387.803L325.75 163.719C321.956 166.883 319.996 171.437 319.996 176.022C319.996 186.771 329.259 192 336.016 192C339.625 192 343.25 190.781 346.25 188.281L442.25 108.281C445.891 105.25 448 100.75 448 96S445.891 86.75 442.25 83.719L346.25 3.715C343.26 1.213 339.631 -0.001 336.023 -0.001C329.269 -0.001 319.996 5.284 319.996 15.974C319.996 20.559 321.956 25.113 325.75 28.277L387.803 80H176C78.953 80 0 158.969 0 256C0 264.844 7.156 272 16 272S32 264.844 32 256C32 176.594 96.594 112 176 112ZM272 320C280.844 320 288 312.844 288 304V208C288 199.156 280.844 192 272 192H240C231.156 192 224 199.156 224 208S231.156 224 240 224H256V304C256 312.844 263.156 320 272 320ZM496 240C487.156 240 480 247.156 480 256C480 335.406 415.406 400 336 400H124.197L186.25 348.281C190.044 345.117 192.004 340.563 192.004 335.978C192.004 325.262 182.796 320.016 176.006 320.016C172.395 320.016 168.757 321.228 165.75 323.719L69.75 403.719C66.109 406.75 64 411.25 64 416S66.109 425.25 69.75 428.281L165.75 508.281C168.75 510.781 172.375 512 175.984 512C182.699 512 192.004 506.735 192.004 496.022C192.004 491.437 190.044 486.883 186.25 483.719L124.197 432H336C433.047 432 512 353.031 512 256C512 247.156 504.844 240 496 240Z " })
  }
));
ArrowsRepeat1Light.displayName = "ArrowsRepeat1Light";
var ArrowsRepeat1_default = ArrowsRepeat1Light;
