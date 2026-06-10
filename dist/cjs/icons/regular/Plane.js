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
const PlaneRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M463.999 176H374.578L274.185 15.574C269.041 6.613 257.621 0 246.717 0H181.215C171.071 0 161.753 4.646 155.651 12.752C149.556 20.846 147.665 31.074 150.464 40.811L193.055 176H152.005L113.616 124.807C107.583 116.781 98.011 112 88.003 112H31.996C22.075 112 12.883 116.486 6.782 124.307C0.678 132.131 -1.439 142.139 0.975 151.766L31.33 255.998L1.133 359.65C-1.439 369.861 0.678 379.869 6.782 387.693C12.883 395.514 22.075 400 31.996 400H88.003C98.011 400 107.583 395.219 113.605 387.209L152.005 336H193.055L150.581 470.785C147.663 480.914 149.556 491.146 155.655 499.246C161.759 507.352 171.075 512 181.215 512H246.717C258.168 512 268.81 505.818 274.488 495.867L374.576 336H463.999C502.456 336 576 304.846 576 256S502.456 176 463.999 176ZM463.999 288H347.997L237.853 464H203.045L258.507 288H128.003L80.011 352H53.357L81.326 256L53.338 160H80.011L128.003 224H258.505L203.039 48H237.853L347.993 224H463.999C490.237 224 526.606 245.754 528.004 255.908C526.606 266.246 490.237 288 463.999 288Z" })
  }
));
PlaneRegular.displayName = "PlaneRegular";
var Plane_default = PlaneRegular;
