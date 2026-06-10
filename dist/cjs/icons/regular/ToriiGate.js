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
var ToriiGate_exports = {};
__export(ToriiGate_exports, {
  default: () => ToriiGate_default
});
module.exports = __toCommonJS(ToriiGate_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ToriiGateRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M479.993 176.031C497.665 176.029 511.99 161.704 511.989 144.034L511.978 24.782C511.977 13.44 500.552 5.697 490.034 9.945C453.992 24.501 415.453 32.066 376.484 32.07L135.62 32.092C96.546 32.096 57.988 24.538 21.94 9.988C11.422 5.743 -0.001 13.488 0 24.83L0.011 144.082C0.013 161.752 14.341 176.075 32.013 176.073L64.011 176.07L64.017 240.057L24.019 240.061C10.82 240.062 0.021 250.861 0.022 264.058V264.058C0.024 277.256 10.824 288.052 24.024 288.051L64.022 288.047L64.041 488.007C64.042 501.204 74.842 512.001 88.042 512H88.042C101.241 511.999 112.04 501.2 112.039 488.003L112.02 288.043L400.007 288.016L400.026 487.976C400.027 501.173 410.828 511.97 424.027 511.969H424.027C437.227 511.967 448.025 501.168 448.024 487.971L448.005 288.011L488.003 288.008C501.203 288.006 512.001 277.208 512 264.01V264.01C511.999 250.813 501.198 240.016 487.999 240.017L448.001 240.021L447.995 176.034L479.993 176.031ZM232.01 240.041L112.015 240.053L112.009 176.065L232.004 176.054L232.01 240.041ZM400.003 240.026L280.008 240.037L280.002 176.05L399.997 176.038L400.003 240.026ZM48.008 128.081L48.002 68.968C76.627 76.339 106.126 80.085 135.499 80.083L376.364 80.06C405.862 80.057 435.361 76.305 463.859 68.929L463.864 128.042L48.008 128.081Z" })
  }
));
ToriiGateRegular.displayName = "ToriiGateRegular";
var ToriiGate_default = ToriiGateRegular;
