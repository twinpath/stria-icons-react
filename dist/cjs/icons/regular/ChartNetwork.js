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
var ChartNetwork_exports = {};
__export(ChartNetwork_exports, {
  default: () => ChartNetwork_default
});
module.exports = __toCommonJS(ChartNetwork_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChartNetworkRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M576 192C611.346 192 640 163.346 640 128C640 92.652 611.346 64 576 64S512 92.652 512 128C512 163.346 540.654 192 576 192ZM576 384C561.566 384 548.395 388.953 537.689 397.014L455.789 347.873C460.826 334.135 464 319.484 464 304C464 284.316 459.195 265.891 451.258 249.23L494.187 217.75C504.875 209.938 507.187 194.906 499.344 184.219C491.531 173.562 476.531 171.125 465.812 179.062L422.912 210.521C400.061 189.27 369.668 176 336 176C325.16 176 314.809 177.752 304.758 180.289L270.758 107.432C281.371 96.008 288 80.822 288 64C288 28.652 259.346 0 224 0S160 28.652 160 64C160 99.346 188.654 128 224 128C225.105 128 226.133 127.729 227.225 127.674L261.217 200.514C229.102 223.768 208 261.316 208 304C208 374.693 265.309 432 336 432C373.906 432 407.6 415.205 431.037 389.023L512.988 438.193C512.49 441.412 512 444.641 512 448C512 483.346 540.654 512 576 512S640 483.346 640 448C640 412.652 611.346 384 576 384ZM336 384C291.889 384 256 348.111 256 304S291.889 224 336 224C380.113 224 416 259.889 416 304S380.113 384 336 384ZM152 280H123.254C113.75 256.564 90.844 240 64 240C28.654 240 0 268.652 0 304C0 339.346 28.654 368 64 368C90.844 368 113.75 351.436 123.254 328H152C165.25 328 176 317.25 176 304S165.25 280 152 280Z" })
  }
));
ChartNetworkRegular.displayName = "ChartNetworkRegular";
var ChartNetwork_default = ChartNetworkRegular;
