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
var BlindsRaised_exports = {};
__export(BlindsRaised_exports, {
  default: () => BlindsRaised_default
});
module.exports = __toCommonJS(BlindsRaised_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BlindsRaisedRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M494.221 46.742C504.377 43.947 511.994 35.041 511.994 24C511.994 10.75 501.244 0 487.995 0H24.005C10.756 0 0.006 10.75 0.006 24C0.006 35.041 7.625 43.947 17.779 46.742L1.225 96.406C-1.213 103.719 0.037 111.781 4.537 118.031S16.287 128 24.005 128H144.003V208H57.317L62.786 191.594C66.973 179 60.161 165.438 47.599 161.219C34.818 157.156 21.443 163.844 17.224 176.406L1.225 224.406C-1.213 231.719 0.037 239.781 4.537 246.031S16.287 256 24.005 256H144.003V372.408C116.101 382.326 96.004 408.697 96.004 440C96.004 479.764 128.239 512 168.002 512S240 479.764 240 440C240 408.697 219.903 382.326 192.001 372.408V48H444.017L454.683 80H224.001V128H487.995C495.713 128 502.963 124.281 507.463 118.031C511.963 111.781 513.213 103.719 510.775 96.406L494.221 46.742ZM57.317 80L67.983 48H144.003V80H57.317ZM168.002 464C154.768 464 144.003 453.234 144.003 440S154.768 416 168.002 416S192.001 426.766 192.001 440S181.236 464 168.002 464ZM494.776 176.406C490.557 163.844 477.057 157.125 464.401 161.219C451.839 165.437 445.027 179 449.214 191.594L454.683 208H224.001V256H487.995C495.713 256 502.963 252.281 507.463 246.031C511.963 239.781 513.213 231.719 510.775 224.406L494.776 176.406Z" })
  }
));
BlindsRaisedRegular.displayName = "BlindsRaisedRegular";
var BlindsRaised_default = BlindsRaisedRegular;
