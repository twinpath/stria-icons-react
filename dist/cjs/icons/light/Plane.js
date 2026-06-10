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
var Plane_exports = {};
__export(Plane_exports, {
  default: () => Plane_default
});
module.exports = __toCommonJS(Plane_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PlaneLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M464.01 176H374.588L274.51 16.078C269.057 6.609 257.635 0 246.729 0H181.213C171.072 0 161.744 4.641 155.651 12.75C149.557 20.844 147.666 31.078 150.572 41.203L193.072 176H135.994L97.588 124.797C91.572 116.781 82.01 112 71.994 112H31.994C22.072 112 12.885 116.484 6.776 124.312C0.682 132.125 -1.443 142.141 1.135 152.344L31.322 256L0.979 360.234C-1.443 369.859 0.682 379.875 6.776 387.688C12.885 395.516 22.072 400 31.994 400H71.994C82.01 400 91.572 395.219 97.604 387.188L135.994 336H193.072L150.463 471.172C147.666 480.922 149.557 491.141 155.651 499.25C161.76 507.359 171.072 512 181.213 512H246.729C258.182 512 268.822 505.812 274.166 496.422L374.588 336H464.01C502.463 336 576.01 304.844 576.01 256S502.463 176 464.01 176ZM464.01 304H356.869L246.729 480L181.104 480.406L236.697 304H119.994L71.994 368L31.854 368.594L64.666 256L31.994 144H72.01L119.994 208H236.697L181.213 32H246.729L356.869 208H464.01C495.604 208 544.01 233.75 544.01 256S495.604 304 464.01 304Z" })
  }
));
PlaneLight.displayName = "PlaneLight";
var Plane_default = PlaneLight;
