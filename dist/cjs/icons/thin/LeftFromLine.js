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
var LeftFromLine_exports = {};
__export(LeftFromLine_exports, {
  default: () => LeftFromLine_default
});
module.exports = __toCommonJS(LeftFromLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LeftFromLineThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 440V72C448 67.582 444.418 64 440 64S432 67.582 432 72V440C432 444.418 435.582 448 440 448S448 444.418 448 440ZM191.818 392V320H319.908C337.596 320 351.932 305.672 351.932 288V224C351.932 206.326 337.596 192 319.908 192H191.818V120C191.818 110.422 186.109 101.75 177.307 97.953C168.504 94.172 158.277 95.969 151.305 102.547L7.201 238.547C2.4 243.078 0 249.539 0 256S2.4 268.922 7.201 273.453L151.305 409.453C158.277 416.031 168.504 417.828 177.307 414.047C186.109 410.25 191.818 401.578 191.818 392ZM162.287 397.816L18.184 261.818C16.816 260.527 16 258.352 16 256S16.816 251.473 18.184 250.184L162.285 114.186C164.617 111.984 168.035 111.385 170.971 112.645C173.916 113.916 175.818 116.803 175.818 120V208H319.908C328.744 208 335.932 215.178 335.932 224V288C335.932 296.822 328.744 304 319.908 304H175.818V392C175.818 395.197 173.916 398.084 170.992 399.346C168.035 400.615 164.617 400.016 162.287 397.816Z" })
  }
));
LeftFromLineThin.displayName = "LeftFromLineThin";
var LeftFromLine_default = LeftFromLineThin;
