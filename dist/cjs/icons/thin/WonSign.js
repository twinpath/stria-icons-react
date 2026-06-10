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
var WonSign_exports = {};
__export(WonSign_exports, {
  default: () => WonSign_default
});
module.exports = __toCommonJS(WonSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WonSignThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M504 280.003H426.047L487.75 42.006C488.859 37.741 486.281 33.366 482 32.256C477.703 31.147 473.359 33.741 472.25 38.006L409.512 280.003H326.488L263.75 38.006C261.906 30.944 250.094 30.944 248.25 38.006L185.512 280.003H102.488L39.75 38.006C38.641 33.741 34.328 31.147 30 32.256C25.719 33.366 23.141 37.741 24.25 42.006L85.953 280.003H8C3.578 280.003 0 283.581 0 288.003S3.578 296.003 8 296.003H90.102L136.25 474C138.094 481.063 149.906 481.063 151.75 474L197.896 296.003H314.104L360.25 474C361.172 477.531 364.359 480 368 480S374.828 477.531 375.75 474L421.898 296.003H504C508.422 296.003 512 292.425 512 288.003S508.422 280.003 504 280.003ZM144 440.126L106.637 296.003H181.363L144 440.126ZM202.045 280.003L256 71.881L309.955 280.003H202.045ZM368 440.126L330.637 296.003H405.363L368 440.126Z" })
  }
));
WonSignThin.displayName = "WonSignThin";
var WonSign_default = WonSignThin;
