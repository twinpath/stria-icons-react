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
var LeftToLine_exports = {};
__export(LeftToLine_exports, {
  default: () => LeftToLine_default
});
module.exports = __toCommonJS(LeftToLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LeftToLineThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 440V72C16 67.582 12.418 64 8 64S0 67.582 0 72V440C0 444.418 3.582 448 8 448S16 444.418 16 440ZM287.818 392V320H415.908C433.596 320 447.932 305.672 447.932 288V224C447.932 206.326 433.596 192 415.908 192H287.818V120C287.818 110.422 282.109 101.75 273.307 97.953C264.504 94.172 254.277 95.969 247.305 102.547L103.201 238.547C98.4 243.078 96 249.539 96 256S98.4 268.922 103.201 273.453L247.305 409.453C254.277 416.031 264.504 417.828 273.307 414.047C282.109 410.25 287.818 401.578 287.818 392ZM258.287 397.816L114.184 261.818C112.816 260.527 112 258.352 112 256S112.816 251.473 114.184 250.184L258.285 114.186C260.617 111.984 264.035 111.385 266.971 112.645C269.916 113.916 271.818 116.803 271.818 120V208H415.908C424.744 208 431.932 215.178 431.932 224V288C431.932 296.822 424.744 304 415.908 304H271.818V392C271.818 395.197 269.916 398.084 266.992 399.346C264.035 400.615 260.617 400.016 258.287 397.816Z" })
  }
));
LeftToLineThin.displayName = "LeftToLineThin";
var LeftToLine_default = LeftToLineThin;
