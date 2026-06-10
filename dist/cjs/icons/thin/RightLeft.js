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
var RightLeft_exports = {};
__export(RightLeft_exports, {
  default: () => RightLeft_default
});
module.exports = __toCommonJS(RightLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RightLeftThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M504 375.993H160V263.987C160 260.893 158.203 258.049 155.391 256.737C152.594 255.424 149.266 255.861 146.875 257.83L2.875 377.837C1.062 379.368 0 381.618 0 383.993S1.062 388.618 2.875 390.15L146.875 510.156C148.344 511.375 150.156 512 152 512C153.156 512 154.312 511.75 155.391 511.25C158.203 509.937 160 507.094 160 504V391.994H504C508.422 391.994 512 388.4 512 383.993C512 379.587 508.422 375.993 504 375.993ZM144 486.905L20.5 383.993L144 281.082V486.905ZM8 135.98H352V247.986C352 251.08 353.797 253.924 356.609 255.236C357.688 255.736 358.844 255.986 360 255.986C361.844 255.986 363.656 255.361 365.125 254.143L509.125 134.136C510.938 132.605 512 130.355 512 127.98C512 125.605 510.938 123.354 509.125 121.823L365.125 1.817C362.75 -0.152 359.406 -0.527 356.609 0.723C353.797 2.036 352 4.879 352 7.973V119.979H8C3.578 119.979 0 123.573 0 127.98C0 132.386 3.578 135.98 8 135.98ZM368 25.068L491.5 127.98L368 230.891V25.068Z" })
  }
));
RightLeftThin.displayName = "RightLeftThin";
var RightLeft_default = RightLeftThin;
