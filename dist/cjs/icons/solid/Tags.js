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
var Tags_exports = {};
__export(Tags_exports, {
  default: () => Tags_default
});
module.exports = __toCommonJS(Tags_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TagsSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M431.598 225.604L254.402 48.402C245.381 39.381 227.562 32 214.805 32H28C12.535 32 0 44.535 0 60V246.803C0 259.561 7.381 277.381 16.402 286.402L193.592 463.598C215.461 485.467 250.916 485.467 272.787 463.6L431.596 304.801C453.467 282.932 453.469 247.473 431.598 225.604ZM112 176C94.334 176 80 161.676 80 144C80 126.322 94.334 112 112 112S144 126.322 144 144C144 161.676 129.666 176 112 176ZM559.598 225.604L382.402 48.402C373.381 39.381 355.562 32 342.805 32H305.883L516.453 242.576C528.949 255.074 528.949 275.336 516.451 287.832L332.422 471.85C353.943 484.799 382.225 482.16 400.787 463.6L559.596 304.801C581.467 282.932 581.469 247.473 559.598 225.604Z" })
  }
));
TagsSolid.displayName = "TagsSolid";
var Tags_default = TagsSolid;
