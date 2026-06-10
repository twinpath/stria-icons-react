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
var FaceGrinWink_exports = {};
__export(FaceGrinWink_exports, {
  default: () => FaceGrinWink_default
});
module.exports = __toCommonJS(FaceGrinWink_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FaceGrinWinkSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 256C16 388.581 123.461 496 256 496S496 388.581 496 256S388.539 16 256 16S16 123.419 16 256ZM208 208C208 225.75 193.724 240 175.94 240C158.276 240 144 225.75 144 208S158.276 176 175.94 176C193.724 176 208 190.25 208 208ZM376.004 233L366.559 224.5C351.664 211.25 320.301 211.25 305.527 224.5L295.961 233C287.727 240.375 274.406 233.375 276.223 222.25C280.219 197 310.371 180.125 336.043 180.125C361.836 180.125 391.988 197 395.984 222.25C397.559 233.25 384.48 240.375 376.004 233ZM132.848 320.75C163.121 330.5 208.047 336 256 336S348.879 330.5 379.152 320.75C390.414 317.125 401.676 326.75 399.859 338.75C390.656 393.75 316.547 432 256 432S121.465 393.75 112.141 338.75C110.203 326.75 121.465 317.125 132.848 320.75Z" })
  }
));
FaceGrinWinkSolid.displayName = "FaceGrinWinkSolid";
var FaceGrinWink_default = FaceGrinWinkSolid;
