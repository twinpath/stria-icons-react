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
var LeftLong_exports = {};
__export(LeftLong_exports, {
  default: () => LeftLong_default
});
module.exports = __toCommonJS(LeftLong_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LeftLongThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M191.818 391.999V319.999H479.977C497.664 319.999 512 305.671 512 288V224C512 206.327 497.664 192.001 479.977 192.001H191.818V120.001C191.818 110.423 186.109 101.751 177.307 97.955C168.504 94.173 158.277 95.97 151.305 102.548L7.201 238.547C2.4 243.078 0 249.539 0 256S2.4 268.922 7.201 273.453L151.305 409.452C158.277 416.03 168.504 417.827 177.307 414.045C186.109 410.249 191.818 401.577 191.818 391.999ZM162.287 397.815L18.184 261.818C16.816 260.527 16 258.352 16 256C16 253.648 16.816 251.473 18.184 250.184L162.285 114.187C164.617 111.986 168.035 111.386 170.971 112.646C173.916 113.917 175.818 116.804 175.818 120.001V208H479.977C488.813 208 496 215.178 496 224V288C496 296.822 488.813 304 479.977 304H175.818V391.999C175.818 395.196 173.916 398.083 170.992 399.344C168.035 400.614 164.617 400.014 162.287 397.815Z" })
  }
));
LeftLongThin.displayName = "LeftLongThin";
var LeftLong_default = LeftLongThin;
