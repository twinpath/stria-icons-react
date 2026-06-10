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
var DownToLine_exports = {};
__export(DownToLine_exports, {
  default: () => DownToLine_default
});
module.exports = __toCommonJS(DownToLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DownToLineThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M376 463.966H8C3.582 463.966 0 467.548 0 471.966S3.582 479.966 8 479.966H376C380.418 479.966 384 476.384 384 471.966S380.418 463.966 376 463.966ZM328 192.147H256V64.058C256 46.37 241.672 32.034 224 32.034H160C142.326 32.034 128 46.37 128 64.058V192.147H56C46.422 192.147 37.75 197.856 33.953 206.659C30.172 215.462 31.969 225.688 38.547 232.661L174.547 376.765C179.078 381.565 185.539 383.966 192 383.966S204.922 381.565 209.453 376.765L345.453 232.661C352.031 225.688 353.828 215.462 350.047 206.659C346.25 197.856 337.578 192.147 328 192.147ZM333.816 221.679L197.818 365.782C196.527 367.149 194.352 367.966 192 367.966S187.473 367.149 186.184 365.782L50.186 221.681C47.984 219.349 47.385 215.931 48.645 212.995C49.916 210.05 52.803 208.147 56 208.147H144V64.058C144 55.222 151.178 48.034 160 48.034H224C232.822 48.034 240 55.222 240 64.058V208.147H328C331.197 208.147 334.084 210.05 335.346 212.974C336.615 215.931 336.016 219.349 333.816 221.679Z" })
  }
));
DownToLineThin.displayName = "DownToLineThin";
var DownToLine_default = DownToLineThin;
