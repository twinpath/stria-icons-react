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
var WeightHanging_exports = {};
__export(WeightHanging_exports, {
  default: () => WeightHanging_default
});
module.exports = __toCommonJS(WeightHanging_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WeightHangingRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M510.456 443.031L445.565 171C439.487 145.688 417.065 128 391.018 128H334.007C340.133 116 344.008 102.5 344.008 88C344.008 39.375 304.632 0 256.003 0C207.376 0 167.999 39.375 167.999 88C167.999 102.5 171.874 116 177.999 128H120.987C94.94 128 72.518 145.688 66.44 171.031L1.549 443.031C-2.451 459.781 1.378 477.156 12.065 490.656C22.768 504.219 38.799 512 56.081 512H455.924C473.206 512 489.237 504.219 499.94 490.656C510.628 477.156 514.456 459.781 510.456 443.031ZM216.001 88C216.001 66 234.001 48 256.003 48S296.005 66 296.005 88S278.005 128 256.003 128S216.001 110 216.001 88ZM462.268 460.938C461.362 462.062 459.331 464 455.924 464H56.081C52.674 464 50.643 462.062 49.737 460.938C48.846 459.813 47.456 457.406 48.237 454.156L113.128 182.188C114.002 178.531 117.237 176 120.987 176H391.018C394.768 176 398.002 178.531 398.878 182.156L463.768 454.156C464.549 457.406 463.159 459.812 462.268 460.938Z" })
  }
));
WeightHangingRegular.displayName = "WeightHangingRegular";
var WeightHanging_default = WeightHangingRegular;
