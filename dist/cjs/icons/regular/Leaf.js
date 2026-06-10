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
var Leaf_exports = {};
__export(Leaf_exports, {
  default: () => Leaf_default
});
module.exports = __toCommonJS(Leaf_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LeafRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M486.182 39.985C483.797 34.666 478.844 32 473.824 32C469.08 32 464.278 34.381 461.526 39.157C436.537 82.425 391.414 104.312 345.588 104.312C334.405 104.312 323.182 103.009 312.196 100.395C299.309 97.329 285.864 96.004 272.032 96.004H272.001C174.8 96.004 96.001 174.807 96.001 272.017C96.001 280.84 96.863 289.442 98.117 297.917C18.719 367.051 0.74 449.976 0.471 451.31C-2.123 464.28 6.267 476.844 19.205 479.5C20.83 479.844 22.439 480 24.017 480C35.158 480 45.158 472.156 47.517 460.842C48.377 456.694 61.027 400.707 113.423 347.983C141.8 407.104 202.044 448.029 272.001 448.029V448.002H272.014C294.882 448.002 316.659 443.497 336.702 435.559C441.946 400.756 512 293.264 512 165.404C512 121.897 502.67 76.761 486.182 39.985ZM321.633 389.982L320.317 390.418L319.028 390.927C303.835 396.945 287.995 400.006 272.001 400.026C216.849 400.026 170.159 364.767 152.199 315.76C193.743 286.905 250.925 263.122 330.173 255.922C343.376 254.703 353.094 243.046 351.907 229.826C350.688 216.638 338.657 206.95 325.829 208.106C248.907 215.103 190.206 236.831 144.777 264.346C148.833 197.39 204.062 144.008 272.032 144.008C282.7 144.008 292.475 145.047 301.085 147.094C315.643 150.559 330.618 152.315 345.588 152.315C388.194 152.315 427.705 138.589 459.074 113.988C462.289 130.888 464 148.36 464 165.404C464 271.571 406.787 361.824 321.633 389.982Z" })
  }
));
LeafRegular.displayName = "LeafRegular";
var Leaf_default = LeafRegular;
