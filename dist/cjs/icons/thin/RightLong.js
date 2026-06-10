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
var RightLong_exports = {};
__export(RightLong_exports, {
  default: () => RightLong_default
});
module.exports = __toCommonJS(RightLong_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RightLongThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320.182 120.001V192.001H32.023C14.336 192.001 0 206.329 0 224V288C0 305.673 14.336 319.999 32.023 319.999H320.182V391.999C320.182 401.577 325.891 410.249 334.693 414.045C343.496 417.827 353.723 416.03 360.695 409.452L504.799 273.453C509.6 268.922 512 262.461 512 256S509.6 243.078 504.799 238.547L360.695 102.548C353.723 95.97 343.496 94.173 334.693 97.955C325.891 101.751 320.182 110.423 320.182 120.001ZM349.713 114.185L493.816 250.182C495.184 251.473 496 253.648 496 256S495.184 260.527 493.816 261.816L349.715 397.813C347.383 400.014 343.965 400.614 341.029 399.354C338.084 398.083 336.182 395.196 336.182 391.999V304H32.023C23.188 304 16 296.822 16 288V224C16 215.178 23.188 208 32.023 208H336.182V120.001C336.182 116.804 338.084 113.917 341.008 112.656C343.965 111.386 347.383 111.986 349.713 114.185Z" })
  }
));
RightLongThin.displayName = "RightLongThin";
var RightLong_default = RightLongThin;
