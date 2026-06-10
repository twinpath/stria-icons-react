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
const FaceGrinWinkDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.461 16 16 123.418 16 256C16 388.578 123.461 496 256 496S496 388.578 496 256C496 123.418 388.539 16 256 16ZM336.043 180.125C361.836 180.125 391.988 197 395.984 222.25C397.559 233.25 384.48 240.375 376.004 233L366.559 224.5C351.664 211.25 320.301 211.25 305.527 224.5L295.961 233C287.727 240.375 274.406 233.375 276.223 222.25C280.219 197 310.371 180.125 336.043 180.125ZM175.939 176C193.725 176 208 190.25 208 208S193.725 240 175.939 240C158.275 240 144 225.75 144 208S158.275 176 175.939 176ZM256 432C195.453 432 121.465 393.75 112.141 338.75C110.203 326.75 121.465 317.125 132.848 320.75C163.121 330.5 208.047 336 256 336S348.879 330.5 379.152 320.75C390.414 317.125 401.676 326.75 399.859 338.75C390.656 393.75 316.547 432 256 432Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M175.939 176C158.275 176 144 190.25 144 208S158.275 240 175.939 240C193.725 240 208 225.75 208 208S193.725 176 175.939 176ZM336.043 180.125C310.371 180.125 280.219 197 276.223 222.25C274.406 233.375 287.727 240.375 295.961 233L305.527 224.5C320.301 211.25 351.664 211.25 366.559 224.5L376.004 233C384.48 240.375 397.559 233.25 395.984 222.25C391.988 197 361.836 180.125 336.043 180.125Z" })
    ]
  }
));
FaceGrinWinkDuotone.displayName = "FaceGrinWinkDuotone";
var FaceGrinWink_default = FaceGrinWinkDuotone;
