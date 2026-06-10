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
var UpToLine_exports = {};
__export(UpToLine_exports, {
  default: () => UpToLine_default
});
module.exports = __toCommonJS(UpToLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UpToLineThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 48.034H376C380.418 48.034 384 44.452 384 40.034S380.418 32.034 376 32.034H8C3.582 32.034 0 35.616 0 40.034S3.582 48.034 8 48.034ZM56 319.853H128V447.942C128 465.63 142.328 479.966 160 479.966H224C241.674 479.966 256 465.63 256 447.942V319.853H328C337.578 319.853 346.25 314.144 350.047 305.341C353.828 296.538 352.031 286.312 345.453 279.339L209.453 135.235C204.922 130.435 198.461 128.034 192 128.034S179.078 130.435 174.547 135.235L38.547 279.339C31.969 286.312 30.172 296.538 33.953 305.341C37.75 314.144 46.422 319.853 56 319.853ZM50.184 290.321L186.182 146.218C187.473 144.851 189.648 144.034 192 144.034S196.527 144.851 197.816 146.218L333.814 290.319C336.016 292.651 336.615 296.069 335.355 299.005C334.084 301.95 331.197 303.853 328 303.853H240V447.942C240 456.778 232.822 463.966 224 463.966H160C151.178 463.966 144 456.778 144 447.942V303.853H56C52.803 303.853 49.916 301.95 48.654 299.026C47.385 296.069 47.984 292.651 50.184 290.321Z" })
  }
));
UpToLineThin.displayName = "UpToLineThin";
var UpToLine_default = UpToLineThin;
